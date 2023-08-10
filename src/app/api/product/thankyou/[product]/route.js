import { NextResponse } from "next/server";
import data from "../data";

export async function GET(req, { params }) {
  const { product } = params;
  const productData = data.find((item) => item.product === product);
  if (!productData) {
    return NextResponse.json({ data:false}) ;
  }
  return NextResponse.json(productData);
}
