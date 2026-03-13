import { NextRequest } from "next/server";
import { z } from "zod";

// same schema as the client so we don't trust client-side validation
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(100).optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  requirement: z.string().optional(),
  message: z.string().min(10).max(2000),
});

// helper to call Resend's HTTP API
async function sendWithResend(data: {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      to: data.to,
      from: process.env.EMAIL_FROM, // set in env
      subject: data.subject,
      html: data.html,
      text: data.text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend error: ${res.status} ${body}`);
  }
  return res.json();
}

export async function POST(request: NextRequest) {
  // make sure required environment variables are set
  if (
    !process.env.RESEND_API_KEY ||
    !process.env.EMAIL_FROM ||
    !process.env.EMAIL_TO
  ) {
    console.error("missing one or more required env vars", {
      RESEND_API_KEY: !!process.env.RESEND_API_KEY,
      EMAIL_FROM: process.env.EMAIL_FROM,
      EMAIL_TO: process.env.EMAIL_TO,
    });
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server misconfiguration: environment variables not set",
      }),
      { status: 500 }
    );
  }

  const json = await request.json();
  const result = contactSchema.safeParse(json);
  if (!result.success) {
    return new Response(
      JSON.stringify({ success: false, errors: result.error.format() }),
      { status: 400 }
    );
  }

  const data = result.data;

  try {
    const subject = `New contact from ${data.name}`;
    const text = `
Name: ${data.name}
Company: ${data.company || "–"}
Email: ${data.email}
Phone: ${data.phone || "–"}
Requirement: ${data.requirement || "–"}

Message:
${data.message}
`;
    const html = `
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Company:</strong> ${data.company || "–"}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Phone:</strong> ${data.phone || "–"}</p>
<p><strong>Requirement:</strong> ${data.requirement || "–"}</p>
<p><strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>
`;

    // Parse EMAIL_TO as comma-separated list for multiple recipients
    // Example: EMAIL_TO="email1@example.com,email2@example.com,email3@example.com"
    const recipients = process.env.EMAIL_TO!.split(",").map((email) => email.trim());
    
    await sendWithResend({
      to: recipients,
      subject,
      text,
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("email error", err);
    return new Response(
      JSON.stringify({ success: false, error: (err as Error).message }),
      { status: 500 }
    );
  }
}
