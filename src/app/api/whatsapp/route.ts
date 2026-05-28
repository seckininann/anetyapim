import { NextRequest, NextResponse } from "next/server";
import { getWhatsAppNumber, setWhatsAppNumber } from "@/lib/upstash";

export const dynamic = "force-dynamic";

export async function GET() {
  const number = await getWhatsAppNumber();
  return NextResponse.json({ number });
}

export async function POST(req: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  try {
    const body = await req.json();
    const { number, password } = body;

    if (password !== adminPassword) {
      return NextResponse.json({ error: "Şifre hatalı." }, { status: 401 });
    }

    if (!number || !/^\d{10,15}$/.test(number)) {
      return NextResponse.json(
        { error: "Geçersiz numara formatı. Sadece rakam, 10-15 karakter. (örn: 905551234567)" },
        { status: 400 }
      );
    }

    const { success, error } = await setWhatsAppNumber(number);
    if (success) {
      return NextResponse.json({ success: true, number });
    } else {
      return NextResponse.json(
        { error: `Redis hatası: ${error}` },
        { status: 500 }
      );
    }
  } catch (e) {
    return NextResponse.json({ error: `İstek hatası: ${e}` }, { status: 400 });
  }
}
