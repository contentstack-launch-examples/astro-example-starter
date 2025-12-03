// API route to test execution timeout on Launch
// This route intentionally waits for 60 seconds to exceed the 30-second timeout limit

export async function GET() {
  const startTime = Date.now();

  // Wait for 60 seconds (60000 milliseconds)
  // This will exceed Launch's 30-second execution timeout
  await new Promise((resolve) => setTimeout(resolve, 60000));

  const elapsedTime = Date.now() - startTime;

  return new Response(
    JSON.stringify({
      message: "This response should not be reached due to timeout",
      elapsedTime: `${elapsedTime}ms`,
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }
  );
}
