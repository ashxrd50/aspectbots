// Bağlı Roller (Linked Roles) Doğrulama Endpoint'i
// Discord Developer Portal > Linked Roles > Verification URL olarak ekle

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Discord bu endpoint'e GET isteği atar ve metadata döndürmeni bekler
  // Kendi rol kriterlerini buraya ekleyebilirsin
  return res.status(200).json({
    schema_version: 1,
    metadata: [
      {
        type: 7, // BOOLEAN_EQUAL
        key: "aspect_user",
        name: "Aspect Bot Kullanıcısı",
        description: "Aspect Bot'u sunucusuna eklemiş kullanıcı",
      },
    ],
  });
}
