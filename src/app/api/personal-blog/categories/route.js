import data from "../data";
import { NextResponse } from "next/server";

export async function GET(req) {
  const categoryList = data.map((cat) => {
    return {
      name: cat.name,
      slug: cat.slug,
    };
  });

  return NextResponse.json(categoryList);
}
