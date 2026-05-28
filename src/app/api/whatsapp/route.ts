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
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!number || !/^\d{10,15}$/.test(number)) {
      return NextResponse.json(
        { error: "Geçersiz numara formatı. Sadece rakam, 10-15 karakter." },
        { status: 400 }
      );
    }

    const success = await setWhatsAppNumber(number);
    if (success) {
      return NextResponse.json({ success: true, number });
    } else {
      return NextResponse.json(
        { error: "Numara kaydedilemedi." },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }
}
