// Vercel Serverless Function — secure proxy for Anthropic API
// The ANTHROPIC_API_KEY env var is set in Vercel dashboard, never exposed to the browser.

const SYSTEM_PROMPT = `You are the AI assistant for Dr. Raman Sharma's plastic surgery practice at Sir Ganga Ram Hospital, New Delhi. You help potential patients learn about procedures, understand what to expect, and guide them toward booking consultations.

Key information:
- Dr. Raman Sharma: MCh Plastic Surgery (PGIMER Chandigarh), MS General Surgery (MAMC Delhi), MBBS (UCMS Delhi)
- Based at Sir Ganga Ram Hospital, Old Rajinder Nagar, New Delhi 110060
- Phone: +91 98912 80450
- Specializations: Cosmetic Surgery, Reconstructive Surgery, Burn Care, Hand Surgery, Brachial Plexus Surgery, Non-Surgical Treatments (Botox, Fillers, PRP, Laser)
- Google Rating: 5.0 stars

Guidelines:
- Be warm, professional, and reassuring
- Answer medical questions generally but always recommend an in-person consultation for specific medical advice
- Encourage booking appointments for detailed assessments
- If asked about pricing, explain that costs vary per case and recommend a consultation
- Keep responses concise (2-3 sentences max unless detail is requested)
- If the user writes in Hindi, respond in Hindi`;

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      return res.status(502).json({ error: "Upstream API error" });
    }

    const data = await response.json();
    const reply = data.content?.map((b) => b.text || "").join("") || "";
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Proxy error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
