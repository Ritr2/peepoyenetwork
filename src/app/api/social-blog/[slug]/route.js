import { NextResponse } from "next/server";
import blogdata from "../blog";
import categoryData from "../category";
import { blog_by_slug } from "../apiMethods";

export async function GET(req, { params }) {
  const { slug } = params;
  const blog = blogdata.find((blog) => {
    return blog.slug === slug;
  });

  if (!blog) {
    let blogData = await blog_by_slug(slug);
    let categoryData = blogData.category;
    return NextResponse.json({ blog: blogData, category: categoryData });
  }
  else{
    const category = categoryData.find((cat) => {
      return cat.id === blog.category_id;
    });
    return NextResponse.json({ blog, category });
  }
}
