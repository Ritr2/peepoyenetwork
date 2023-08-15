import { NextResponse } from "next/server";
import blogdata from "../blog";
import categoryData from "../category";

export async function GET(req, { params }) {
  const { slug } = params;
  const blog = blogdata.find((blog) => {
    return blog.slug === slug;
  });

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  const category = categoryData.find((cat) => {
    return cat.id === blog.category_id;
  });

  return NextResponse.json({ blog, category });
}
