const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL!;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN!;
const DEFAULT_NUMBER = process.env.DEFAULT_WHATSAPP_NUMBER || "905551234567";
const KEY = "whatsapp_number";

async function redisRequest(command: string[]) {
  const response = await fetch(`${REDIS_URL}/${command.join("/")}`, {
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Redis error: ${response.status}`);
  }
  return response.json();
}

export async function getWhatsAppNumber(): Promise<string> {
  try {
    if (!REDIS_URL || REDIS_URL.includes("your-redis-url")) {
      return DEFAULT_NUMBER;
    }
    const data = await redisRequest(["get", KEY]);
    return data.result || DEFAULT_NUMBER;
  } catch {
    return DEFAULT_NUMBER;
  }
}

export async function setWhatsAppNumber(number: string): Promise<{ success: boolean; error?: string }> {
  if (!REDIS_URL || !REDIS_TOKEN) {
    return { success: false, error: "UPSTASH_REDIS_REST_URL veya UPSTASH_REDIS_REST_TOKEN env değişkeni eksik." };
  }
  try {
    await redisRequest(["set", KEY, number]);
    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}
