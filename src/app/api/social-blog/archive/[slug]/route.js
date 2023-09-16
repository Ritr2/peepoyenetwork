import { NextResponse } from "next/server";
import blogdata from "../../blog";

export async function GET(req, { params }) {
  const yearMonth = params.slug;
  let tempdata = blogdata.filter((blog) => {
    const date = new Date(blog.date);
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    return key === yearMonth;
  });

  tempdata = tempdata.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
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

  const data = tempdata.map((item) => {
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

  return NextResponse.json({data, totalPage});
}

