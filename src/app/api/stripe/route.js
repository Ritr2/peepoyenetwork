import { NextResponse } from "next/server";
import Stripe from "stripe";
import {pagesData} from "./data";
import { apiUrl } from "@/utils/url";

export async function POST(req) {
    const data = await req.json();
    await fetch(`${apiUrl}/payment_initiated`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data.details.name,
          email: data.details.email,
          phone: data.details.phone,
          product: data.notes,
        }),
      });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: data.products.map((product) => {
            return {
                price: product.priceId,
                quantity: product.quantity,
            };
        }),
        mode: data.mode,
        success_url: `${data.success}`,
        cancel_url: `${data.cancel}`,
        metadata: {
            product: data.notes,
        },
    });

    return NextResponse.json({ url: session.url });
}