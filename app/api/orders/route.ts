import { NextRequest } from "next/server";
import { z } from "zod";

// Cart item schema
const cartItemSchema = z.object({
  product: z.object({
    id: z.string(),
    title: z.string(),
    images: z.array(z.string()),
  }),
  variant: z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    discountPrice: z.number().optional().nullable(),
  }),
  quantity: z.number().min(1),
});

// Order schema for validation
const orderSchema = z.object({
  customer: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().min(10),
    company: z.string().max(100).optional(),
  }),
  shipping: z.object({
    address: z.string().min(10).max(500),
    city: z.string().min(2).max(100),
    state: z.string().min(2).max(100),
    pincode: z.string().regex(/^\d{6}$/),
  }),
  items: z.array(cartItemSchema).min(1),
  totals: z.object({
    subtotal: z.number(),
    shipping: z.number(),
    total: z.number(),
  }),
});

// Format currency
function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

// Generate order ID
function generateOrderId(): string {
  return `MA-${Date.now().toString(36).toUpperCase()}`;
}

// Send email using Resend API
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
      from: process.env.EMAIL_FROM,
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

// Build customer confirmation email
function buildCustomerEmail(
  order: z.infer<typeof orderSchema>,
  orderId: string
) {
  const itemsText = order.items
    .map((item) => {
      const price = item.variant.discountPrice ?? item.variant.price;
      return `- ${item.product.title} (${item.variant.name}) x ${item.quantity} = ${formatPrice(price * item.quantity)}`;
    })
    .join("\n");

  const itemsHtml = order.items
    .map((item) => {
      const price = item.variant.discountPrice ?? item.variant.price;
      const lineTotal = price * item.quantity;
      return `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee;">
            <strong>${item.product.title}</strong><br/>
            <span style="color: #666; font-size: 14px;">${item.variant.name}</span>
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;"><strong>${formatPrice(lineTotal)}</strong></td>
        </tr>
      `;
    })
    .join("");

  const subject = "Your Order Has Been Successfully Placed";

  const text = `
Thank you for your order!

Your order has been successfully placed and is being processed.

ORDER DETAILS
-------------
Order ID: ${orderId}

Products:
${itemsText}

Subtotal: ${formatPrice(order.totals.subtotal)}
Shipping: ${order.totals.shipping === 0 ? "Free" : formatPrice(order.totals.shipping)}
Total Amount: ${formatPrice(order.totals.total)}

SHIPPING ADDRESS
----------------
${order.shipping.address}
${order.shipping.city}, ${order.shipping.state}
PIN: ${order.shipping.pincode}

We will notify you once your order is shipped.

Thank you for shopping with Mahadev Aromatics!
`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Order Confirmation - ${orderId}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: #d4af37; margin: 0; font-size: 24px;">Order Confirmed!</h1>
    <p style="color: #fff; margin: 10px 0 0 0; font-size: 14px;">Thank you for your order</p>
  </div>
  
  <div style="background: #fff; padding: 30px; border: 1px solid #eee; border-top: none;">
    <p style="font-size: 16px; margin-bottom: 25px;">
      Dear <strong>${order.customer.name}</strong>,<br/><br/>
      Thank you for your order. Your order has been successfully placed and is being processed.
    </p>
    
    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 25px; text-align: center;">
      <p style="margin: 0; font-size: 14px; color: #666;">Order ID</p>
      <p style="margin: 5px 0 0 0; font-size: 20px; color: #d4af37; font-weight: bold;">${orderId}</p>
    </div>
    
    <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px; font-size: 18px;">Order Details</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
      <thead>
        <tr style="background: #f5f5f5;">
          <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Product</th>
          <th style="padding: 12px; text-align: center; border-bottom: 2px solid #ddd;">Qty</th>
          <th style="padding: 12px; text-align: right; border-bottom: 2px solid #ddd;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>
    
    <div style="background: #1a1a1a; color: #fff; padding: 20px; border-radius: 5px; margin-bottom: 25px;">
      <table style="width: 100%;">
        <tr><td style="padding: 5px 0;">Subtotal:</td><td style="text-align: right;">${formatPrice(order.totals.subtotal)}</td></tr>
        <tr><td style="padding: 5px 0;">Shipping:</td><td style="text-align: right;">${order.totals.shipping === 0 ? '<span style="color: #4ade80;">Free</span>' : formatPrice(order.totals.shipping)}</td></tr>
        <tr><td colspan="2" style="border-top: 1px solid #444; padding-top: 10px;"></td></tr>
        <tr><td style="padding: 5px 0; font-size: 18px;"><strong>Total Amount:</strong></td><td style="text-align: right; font-size: 18px; color: #d4af37;"><strong>${formatPrice(order.totals.total)}</strong></td></tr>
      </table>
    </div>
    
    <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px; font-size: 18px;">Shipping Address</h2>
    <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
      ${order.shipping.address}<br/>
      ${order.shipping.city}, ${order.shipping.state}<br/>
      <strong>PIN:</strong> ${order.shipping.pincode}
    </p>
    
    <p style="padding: 15px; background: #fff8e7; border-left: 4px solid #d4af37; border-radius: 0 5px 5px 0;">
      We will notify you once your order is shipped.
    </p>
  </div>
  
  <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; color: #666;">
    <p style="margin: 0 0 10px 0;"><strong>Mahadev Aromatics</strong></p>
    <p style="margin: 0;">Thank you for shopping with us!</p>
  </div>
</body>
</html>
`;

  return { subject, text, html };
}

export async function POST(request: NextRequest) {
  // Validate environment variables
  if (
    !process.env.RESEND_API_KEY ||
    !process.env.EMAIL_FROM ||
    !process.env.EMAIL_TO
  ) {
    console.error("Missing required environment variables for order emails");
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server misconfiguration: email not set up",
      }),
      { status: 500 }
    );
  }

  // Parse and validate request body
  const json = await request.json();
  const result = orderSchema.safeParse(json);

  if (!result.success) {
    return new Response(
      JSON.stringify({ success: false, errors: result.error.format() }),
      { status: 400 }
    );
  }

  const order = result.data;
  const orderId = generateOrderId();
  const orderDate = new Date().toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  try {
    // Build items list for email
    const itemsHtml = order.items
      .map((item) => {
        const price = item.variant.discountPrice ?? item.variant.price;
        const lineTotal = price * item.quantity;
        return `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee;">
            <strong>${item.product.title}</strong><br/>
            <span style="color: #666; font-size: 14px;">${item.variant.name}</span>
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">${formatPrice(price)}</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;"><strong>${formatPrice(lineTotal)}</strong></td>
        </tr>
      `;
      })
      .join("");

    const itemsText = order.items
      .map((item) => {
        const price = item.variant.discountPrice ?? item.variant.price;
        return `- ${item.product.title} (${item.variant.name}) x ${item.quantity} = ${formatPrice(price * item.quantity)}`;
      })
      .join("\n");

    const subject = `New Order ${orderId} from ${order.customer.name}`;

    const text = `
NEW ORDER RECEIVED
==================

Order ID: ${orderId}
Date: ${orderDate}

CUSTOMER DETAILS
----------------
Name: ${order.customer.name}
Email: ${order.customer.email}
Phone: ${order.customer.phone}
Company: ${order.customer.company || "–"}

SHIPPING ADDRESS
----------------
${order.shipping.address}
${order.shipping.city}, ${order.shipping.state}
PIN: ${order.shipping.pincode}

ORDER ITEMS
-----------
${itemsText}

ORDER TOTALS
------------
Subtotal: ${formatPrice(order.totals.subtotal)}
Shipping: ${order.totals.shipping === 0 ? "Free" : formatPrice(order.totals.shipping)}
TOTAL: ${formatPrice(order.totals.total)}

Payment Method: Cash on Delivery / Bank Transfer
`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Order ${orderId}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 30px; border-radius: 10px 10px 0 0;">
    <h1 style="color: #d4af37; margin: 0; font-size: 24px;">New Order Received</h1>
    <p style="color: #fff; margin: 10px 0 0 0; font-size: 14px;">Mahadev Aromatics</p>
  </div>
  
  <div style="background: #fff; padding: 30px; border: 1px solid #eee; border-top: none;">
    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
      <p style="margin: 0;"><strong>Order ID:</strong> <span style="color: #d4af37;">${orderId}</span></p>
      <p style="margin: 5px 0 0 0;"><strong>Date:</strong> ${orderDate}</p>
    </div>
    
    <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px; font-size: 18px;">Customer Details</h2>
    <table style="width: 100%; margin-bottom: 25px;">
      <tr><td style="padding: 5px 0;"><strong>Name:</strong></td><td>${order.customer.name}</td></tr>
      <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td><a href="mailto:${order.customer.email}">${order.customer.email}</a></td></tr>
      <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td><a href="tel:${order.customer.phone}">${order.customer.phone}</a></td></tr>
      ${order.customer.company ? `<tr><td style="padding: 5px 0;"><strong>Company:</strong></td><td>${order.customer.company}</td></tr>` : ""}
    </table>
    
    <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px; font-size: 18px;">Shipping Address</h2>
    <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
      ${order.shipping.address}<br/>
      ${order.shipping.city}, ${order.shipping.state}<br/>
      <strong>PIN:</strong> ${order.shipping.pincode}
    </p>
    
    <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px; font-size: 18px;">Order Items</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
      <thead>
        <tr style="background: #f5f5f5;">
          <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Product</th>
          <th style="padding: 12px; text-align: center; border-bottom: 2px solid #ddd;">Qty</th>
          <th style="padding: 12px; text-align: right; border-bottom: 2px solid #ddd;">Price</th>
          <th style="padding: 12px; text-align: right; border-bottom: 2px solid #ddd;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>
    
    <div style="background: #1a1a1a; color: #fff; padding: 20px; border-radius: 5px;">
      <table style="width: 100%;">
        <tr><td style="padding: 5px 0;">Subtotal:</td><td style="text-align: right;">${formatPrice(order.totals.subtotal)}</td></tr>
        <tr><td style="padding: 5px 0;">Shipping:</td><td style="text-align: right;">${order.totals.shipping === 0 ? '<span style="color: #4ade80;">Free</span>' : formatPrice(order.totals.shipping)}</td></tr>
        <tr><td colspan="2" style="border-top: 1px solid #444; padding-top: 10px;"></td></tr>
        <tr><td style="padding: 5px 0; font-size: 18px;"><strong>Total:</strong></td><td style="text-align: right; font-size: 18px; color: #d4af37;"><strong>${formatPrice(order.totals.total)}</strong></td></tr>
      </table>
    </div>
    
    <p style="margin-top: 25px; padding: 15px; background: #fff8e7; border-left: 4px solid #d4af37; border-radius: 0 5px 5px 0;">
      <strong>Payment Method:</strong> Cash on Delivery / Bank Transfer
    </p>
  </div>
  
  <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; color: #666;">
    <p style="margin: 0;">This is an automated order notification from Mahadev Aromatics</p>
  </div>
</body>
</html>
`;

    // Send to configured admin recipients
    const recipients = process.env.EMAIL_TO!.split(",").map((email) => email.trim());

    await sendWithResend({
      to: recipients,
      subject,
      html,
      text,
    });

    // Send customer confirmation email
    const customerEmail = buildCustomerEmail(order, orderId);
    await sendWithResend({
      to: order.customer.email,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    });

    return new Response(
      JSON.stringify({ success: true, orderId }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Order email error:", err);
    return new Response(
      JSON.stringify({ success: false, error: (err as Error).message }),
      { status: 500 }
    );
  }
}
