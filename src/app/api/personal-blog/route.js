import { NextResponse } from "next/server";
import data from "./data";

export async function GET(req) {
  return NextResponse.json(data);
}

