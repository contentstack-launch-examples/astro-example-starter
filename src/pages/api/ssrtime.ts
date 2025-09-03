import type { APIRoute } from 'astro';

export const get: APIRoute = async () => {
  const now = new Date().toLocaleString();

  return new Response(JSON.stringify({ time: now }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
};
