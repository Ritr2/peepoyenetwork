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

  const tempdata = blogdata.filter((blog) => {
    return blog.category_id === category.id;
  }).sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const blog = tempdata.map((item) => {
    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      date: item.date,
      summary: item.summary,
      image: {
        src: item.image.src,
        alt: item.image.alt,
      }
    };
  });

  return NextResponse.json({blog, category});
}

