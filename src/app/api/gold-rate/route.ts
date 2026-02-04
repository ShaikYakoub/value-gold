export async function GET() {
  const res = await fetch(
    "https://goldpricez.com/api/rates/currency/usd/measure/gram",
    {
      headers: {
        "X-API-KEY": process.env.GOLDPRICEZ_API_KEY ?? "",
      },
      cache: "no-store",
    }
  );

  const text = await res.text();

  // 🔴 THIS IS THE IMPORTANT PART
  console.log("RAW GoldPriceZ response:", text);

  return Response.json({
    status: res.status,
    raw: text,
  });
}
