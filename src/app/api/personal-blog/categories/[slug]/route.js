import { NextResponse } from "next/server";
import blogdata from "../../blog";
import categoryData from "../../category";

export async function GET(req, { params }) {
  const { slug } = params;
  let cat_id = false;
  categoryData.forEach((cat) => {
    if (cat.slug === slug) {
      cat_id = cat;
    }
  });
  if (!cat_id) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  let data = blogdata.filter((blog) => {
    return blog.category_id === cat_id.id;
  });

  data = data.sort((a, b) => {
    return b.id - a.id;
  });

  return NextResponse.json({ blogs: data, category: cat_id });
}
