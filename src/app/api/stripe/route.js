import { NextResponse } from "next/server";
import Stripe from "stripe";
import {pagesData} from "./data";

export async function POST(req) {
    const data = await req.json();
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
    });

    return NextResponse.json({ url: session.url });
}