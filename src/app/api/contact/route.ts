import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Sva polja su obavezna." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: "panacea.naturale@gmail.com",
    replyTo: email,
    subject: `Nova poruka sa sajta — ${name}`,
    html: `
      <p><strong>Ime:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Poruka:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
