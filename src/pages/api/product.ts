export async function GET() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const random = products[Math.floor(Math.random() * products.length)];

  return new Response(JSON.stringify(random), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
