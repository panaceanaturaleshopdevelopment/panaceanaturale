import { NextResponse } from "next/server";
import { Resend } from "resend";

const recipient = "panacea.naturale.shop@gmail.com";
const bottlesPerPackage = 7;
const maxBodyBytes = 16 * 1024;
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const requestLog = new Map<string, number[]>();

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length"));
    if (contentLength > maxBodyBytes) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }

    const clientIp = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    const now = Date.now();
    const recentRequests = (requestLog.get(clientIp) || []).filter((timestamp) => now - timestamp < rateLimitWindowMs);
    if (recentRequests.length >= maxRequestsPerWindow) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    recentRequests.push(now);
    requestLog.set(clientIp, recentRequests);

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > maxBodyBytes) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }

    const body = JSON.parse(rawBody);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid order data" }, { status: 400 });
    }
    const fullName = clean(body.fullName);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const address = clean(body.address);
    const packages = Number(body.packages);
    const bottles = packages * bottlesPerPackage;
    const message = clean(body.message);
    const honeypot = clean(body.website);

    if (honeypot || !fullName || !email || !phone || !address || !Number.isInteger(packages) || packages < 1 || packages > 20) {
      return NextResponse.json({ error: "Invalid order data" }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email) || fullName.length > 120 || email.length > 254 || phone.length > 40 || address.length > 500 || message.length > 2000) {
      return NextResponse.json({ error: "Invalid order data" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      console.error("Order email configuration is missing");
      return NextResponse.json({ error: "Order service unavailable" }, { status: 500 });
    }

    const orderTimestamp = new Date();
    const orderNumber = `PN-${orderTimestamp.toISOString().replace(/[-:TZ.]/g, "").slice(0, 14)}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const orderDate = orderTimestamp.toLocaleString("en-GB", { timeZone: "Europe/Belgrade", dateStyle: "medium", timeStyle: "short" });
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: recipient,
      replyTo: email,
      subject: `Order ${orderNumber} - ${bottles} bottle${bottles === 1 ? "" : "s"}`,
      text: [
        `Order number: ${orderNumber}`,
        `Order date: ${orderDate}`,
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
