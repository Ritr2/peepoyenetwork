import { NextResponse } from "next/server";
import data from "../data";

export async function GET(req, { params }) {
  const { product } = params;
  const productData = data.find((item) => item.searchQuery === product);
  return NextResponse.json(productData);
}
