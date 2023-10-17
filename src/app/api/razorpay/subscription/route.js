import { NextResponse } from "next/server";
import data from "../data";
import { apiUrl } from "@/utils/url";
const Razorpay = require("razorpay");


export async function POST(req) {
    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRET,
    });
    const body = await req.json();

    await fetch(`${apiUrl}/payment_initiated`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: body.details.name,
          email: body.details.email,
          phone: body.details.phone,
          product: data[body.product].notes,
        }),
      });

    const params = {
        plan_id: body.plan_id,
        total_count: 6,
        quantity: 1,
        customer_notify: 1,
    }
    try {
        const response = await razorpay.subscriptions.create(params);
        return NextResponse.json({
            id: response.id,
            notes: data[body.product].notes,
        },
            {
                status: 200,
            }
        );
    } catch (err) {
        return NextResponse.json(err, {
            status: 400,
        });
    }
}

export async function GET(req) {
    return NextResponse.json({ message: "Hello World" });
}
