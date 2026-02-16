import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const body = await req.text();
    const params = new URLSearchParams(body);

    const notification: Record<string, string> = {};
    params.forEach((value, key) => {
      notification[key] = value;
    });

    console.log("PayFast Notification received:", {
      m_payment_id: notification.m_payment_id,
      payment_status: notification.payment_status,
      amount_gross: notification.amount_gross,
      pf_payment_id: notification.pf_payment_id,
    });

    return new Response(JSON.stringify({
      success: true,
      message: "Notification received",
      payment_id: notification.m_payment_id,
      status: notification.payment_status,
    }), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("PayFast notification error:", error);

    return new Response(JSON.stringify({
      error: (error as Error).message,
    }), {
      status: 400,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }
});
