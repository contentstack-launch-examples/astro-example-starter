export default async function handler(request, context) {
  const url = new URL(request.url);

  if (url.pathname === "/appliances") {
    return new Response(
      JSON.stringify({
        message: "Edge Function executed!",
        time: new Date().toISOString(),
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }

  // fallback to origin
  return fetch(request);
}
