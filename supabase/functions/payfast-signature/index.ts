import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

async function generateMD5Hash(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { data, passphrase } = await req.json();

    const orderedData = Object.keys(data)
      .sort()
      .reduce(
        (acc: Record<string, string | number>, key: string) => {
          acc[key] = data[key];
          return acc;
        },
        {} as Record<string, string | number>
      );

    const queryString = Object.entries(orderedData)
      .map(
        ([key, value]) =>
          `${key}=${encodeURIComponent(String(value))}`
      )
      .join("&");

    const stringToSign = `${queryString}&passphrase=${encodeURIComponent(
      passphrase
    )}`;
    const signature = await generateMD5Hash(stringToSign);

    return new Response(JSON.stringify({ signature }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 400,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }
});
