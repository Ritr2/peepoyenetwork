import { NextResponse } from "next/server";
import data from "./data";
import { apiUrl } from "@/utils/url";
const Razorpay = require("razorpay");
const shortid = require("shortid");


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

  // Create an order -> generate the OrderID -> Send it to the Front-end
  const payment_capture = body.quantity ? body.quantity : 1;
  const amount = data[body.product].amount;
  const currency = "INR";
  const options = {
    amount: (amount * payment_capture * 100).toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      notes: data[body.product].notes,
    },
    {
      status: 200,
    }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, {
      status: 400,
    });
  }
}

export async function GET(req) {
  return NextResponse.json({ message: "Hello World" });
}
