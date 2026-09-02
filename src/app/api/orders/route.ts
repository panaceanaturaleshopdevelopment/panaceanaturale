import { NextResponse } from "next/server";
import { Resend } from "resend";

const recipient = "panacea.naturale@gmail.com";
const bottlesPerPackage = 7;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = clean(body.fullName);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const address = clean(body.address);
    const packages = Number(body.packages);
    const bottles = packages * bottlesPerPackage;
    const message = clean(body.message);

    if (!fullName || !email || !phone || !address || !Number.isInteger(packages) || packages < 1 || packages > 20) {
      return NextResponse.json({ error: "Invalid order data" }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email) || fullName.length > 120 || email.length > 254 || phone.length > 40 || address.length > 500 || message.length > 2000) {
      return NextResponse.json({ error: "Invalid order data" }, { status: 400 });
    }

    const orderNumber = `PN-${new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14)}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Panacea Naturale <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `Order ${orderNumber} - ${bottles} bottle${bottles === 1 ? "" : "s"}`,
      text: [
        `Order number: ${orderNumber}`,
        `Number of packages: ${packages}`,
        `Number of bottles: ${bottles}`,
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Physical address: ${address}`,
        "",
        `Message: ${message || "No message provided"}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Order email failed", error);
      return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ orderNumber }, { status: 201 });
  } catch (error) {
    console.error("Order request failed", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
