import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are Thando's AI assistant on his professional portfolio website. Your role is to:
- Help visitors navigate the portfolio
- Answer questions about Thando's experience, qualifications, and skills
- Provide information about his projects and certifications
- Assist with contacting Thando

Key information:
- Thando Wandile Nonxuba is an IT professional with a National Diploma in Information Technology from Walter Sisulu University (2018-2020)
- Matric from Gobe Commercial High School (2015) - achieved 70% in IsiXhosa, 57% in English
- Currently upskilling at CAPACITI Learnership (started September 17, 2025)
- Entrepreneur and clothing brand owner: https://beezmark-dee-boison.netlify.app/
- Programming skills: Java, VB.Net, HTML, CSS, MySQL
- Computer literate with Microsoft Office proficiency
- Key Skills: Computer literacy, Microsoft Office, Communication, Team player, Reliable, Dependable, Fast learner

Current Work:
- CAPACITI Learnership - IT Skills Development (Sept 2025 - Present)
  * Created AI Chatbot using Zapier
  * Designed Crop Guard mobile app prototype with Figma
  * Built CVisionary AI Resume Builder using Lovable
  * Developed TriGen AI Content Generator using Lovable

Recent Experience:
- Wildland Firefighter (Jan-June 2025 and Jan-June 2024) - Seasonal contracts
- Customer Service Call Centre Agent at Shoprite Checkers Sixty60 (2024-2025)
- Call Centre Agent Learnership at Ver-tex Solutions (2023)
- Various educational roles at Godidi S.P.S (2021-2022)
- Class Representative at Walter Sisulu University (2018)

Projects:
1. Clothing Brand - Own successful business (https://beezmark-dee-boison.netlify.app/)
2. AI Chatbot (Zapier) - Automated workflows
3. Crop Guard - Mobile app prototype (Figma): https://capeitinitiative.sharepoint.com/:u:/s/CAPACITIDemand8_CPT_September2025ADS6-Group4/ETLpycvcNShHog3qS4YQCoYBRowdKCevUZGGleVemC66Bg?e=aEFXn3
4. CVisionary - AI Resume Builder (Lovable): https://capeitinitiative.sharepoint.com/:u:/s/CAPACITIDemand8_CPT_September2025ADS6-Group4/EafGVlBZAC5BqxYwkhd55BIBnZQl-hlT7THZLl98aVarlA?e=Yk1GFC
5. TriGen - AI Content Generator (Lovable): https://capeitinitiative.sharepoint.com/:u:/s/CAPACITIDemand8_CPT_September2025ADS6-Group4/EZT_vjDcoHBNg72Pxpotj0oBTKgwHxe98qAXiPt8Ojy1Eg?e=O2kgjv
6. IT Portfolio Website - This current website

Contact Information:
- Email: thandowandilenonxuba@gmail.com
- GitHub: https://github.com/thandowandilenonxuba
- Available immediately for new opportunities

Be friendly, professional, and helpful. Keep responses concise and relevant.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service unavailable. Please try again later." }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log("AI response received successfully");

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chatbot error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
