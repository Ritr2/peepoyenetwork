import { NextResponse } from "next/server";
import data from "../data";

export async function GET(req, { params }) {
  const { slug } = params;
  let blog = false;
  let category;
  data.forEach((cat) => {
    cat.blogs.forEach((b) => {
      if (b.slug === slug) {
        blog = b;
        category = {
          name: cat.name,
          slug: cat.slug,
        };
      }
    });
  });
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
  return NextResponse.json({ blog, category });
}
