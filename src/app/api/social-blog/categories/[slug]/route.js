import { NextResponse } from "next/server";
import categoryData from "../../category";
import blogdata from "../../blog";

export async function GET(req, { params }) {
  const categorySlug = params.slug;

  const category = categoryData.find((cat) => {
    return cat.slug === categorySlug;
  });

  if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  const blog = blogdata.filter((blog) => {
    return blog.category_id === category.id;
  });

  return NextResponse.json({blog, category});
}

