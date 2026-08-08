import { verifyKey } from "discord-interactions";

// Discord'un gönderdiği request'i raw body olarak okumak için
export const config = {
  api: {
    bodyParser: false,
  },
};

// Raw body okuyucu
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(Buffer.from(data)));
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // İmza doğrulama
  const signature = req.headers["x-signature-ed25519"];
  const timestamp = req.headers["x-signature-timestamp"];
  const rawBody = await getRawBody(req);

  const PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY;

  if (!PUBLIC_KEY) {
    return res.status(500).json({ error: "DISCORD_PUBLIC_KEY env variable not set" });
  }

  let isValid = false;
  try {
    isValid = verifyKey(rawBody, signature, timestamp, PUBLIC_KEY);
  } catch (e) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  if (!isValid) {
    return res.status(401).json({ error: "Bad request signature" });
  }

  const body = JSON.parse(rawBody.toString());

  // Discord PING kontrolü (zorunlu)
  if (body.type === 1) {
    return res.status(200).json({ type: 1 });
  }

  // Slash komutları burada işlenebilir
  if (body.type === 2) {
    const { name } = body.data;

    // Örnek komut yanıtı
    return res.status(200).json({
      type: 4,
      data: {
        content: `✅ \`/${name}\` komutu alındı!`,
        flags: 64, // Ephemeral (sadece kullanıcı görür)
      },
    });
  }

  return res.status(400).json({ error: "Unknown interaction type" });
}
