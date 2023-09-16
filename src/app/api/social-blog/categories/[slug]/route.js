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

  let tempdata = blogdata.filter((blog) => {
    return blog.category_id === category.id;
  }).sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  let page = req.nextUrl.searchParams.get("page")
  let search = req.nextUrl.searchParams.get("search")

  if (search) {
    search = decodeURIComponent(search);
    tempdata = tempdata.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  let total = tempdata.length;
  let count = 8;
  let totalPage = Math.ceil(total / count);

  page ? page = parseInt(page) : page = 1;
  let range;

  if (page > totalPage) {
    range = [0, count - 1];
  }
  else if (page <= 0) {
    range = [0, count - 1];
  }
  else {
    range = [(page - 1) * count, page * count - 1];
  }

  tempdata = tempdata.slice(range[0], range[1] + 1)

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
      },
      description: item.description,
    };
  });

  return NextResponse.json({blog, category, totalPage});
}

