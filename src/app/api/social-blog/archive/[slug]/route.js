import { NextResponse } from "next/server";
import blogdata from "../../blog";
import { blog_by_archive } from "../../apiMethods";

export async function GET(req, { params }) {
  const yearMonth = params.slug;
  let tempdata = blogdata.filter((blog) => {
    const date = new Date(blog.date);
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    return key === yearMonth;
  });

  let page = req.nextUrl.searchParams.get("page")
  let search = req.nextUrl.searchParams.get("search")
  let temp

  if (search) {
    search = decodeURIComponent(search);
    tempdata = tempdata.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    temp = await blog_by_archive(yearMonth, search);
  }
  else{
    temp = await blog_by_archive(yearMonth);
  }

  tempdata = tempdata.concat(temp);
  tempdata = tempdata.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

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
