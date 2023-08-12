import { NextResponse } from "next/server";
import blogdata from "./blog";

export async function GET(req) {
  const data = blogdata.sort((a, b) => {
    return b.id - a.id;
  });
  return NextResponse.json(data);
}
