import { NextResponse } from "next/server";
import categoryData from "../category";

export async function GET(req) {
  const categoryList = categoryData.map((cat) => {
    return {
      name: cat.name,
      slug: cat.slug,
    };
  });

  return NextResponse.json(categoryList);
}
