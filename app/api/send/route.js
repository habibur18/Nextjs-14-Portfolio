// Create an API route in /pages/api/sendMail.js

import { EmailTemplate } from "@/app/components/EmailTemplateProps";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { user_name, user_email, message } = await req.json();

  try {
    const emailResponse = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>", // Customize sender info
      to: ["amarhabibur@gmail.com"], // Send to your email
      subject: `New Contact Form Submission from ${user_name}`,
      react: (
        <EmailTemplate
          user_name={user_name}
          user_email={user_email}
          message={message}
        />
      ),
    });
    return NextResponse.json(emailResponse);
  } catch (error) {
    return NextResponse.json(error);
  }
}
