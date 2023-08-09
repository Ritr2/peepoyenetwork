import { NextResponse } from "next/server";
import data from "../../data";

export async function GET(req, { params }) {
  const { slug } = params;
  let category = false;
  data.forEach((cat) => {
    if (cat.slug === slug) {
      category = cat;
    }
  });
  if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }
  return NextResponse.json(category);
}
