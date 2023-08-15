import { NextResponse } from "next/server";
import blogdata from "./blog";

export async function GET(req) {
  const data = blogdata.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return bDate - aDate;
  });
  return NextResponse.json(data);
}
