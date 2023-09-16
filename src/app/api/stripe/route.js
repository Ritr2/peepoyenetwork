import { NextResponse } from "next/server";
import Stripe from "stripe";
import {pagesData} from "./data";

export async function POST(req) {
    const data = await req.json();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let page = pagesData.find((item) => data.page === item.title);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: data.products.map((product) => {
            return {
                price: product.priceId,
                quantity: product.quantity,
            };
        }),
        mode: "payment",
        success_url: `${req.nextUrl.origin}/thankyou?product=${page.success}`,
        cancel_url: `${data.cancel}`,
    });

    return NextResponse.json({ url: session.url });
}