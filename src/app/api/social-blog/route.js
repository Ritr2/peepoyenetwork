import { NextResponse } from "next/server";
import blogdata from "./blog";

export async function GET(req) {
  let tempdata = blogdata.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return bDate - aDate;
  });

  let page = req.nextUrl.searchParams.get("page")
  let search = req.nextUrl.searchParams.get("search")
  let all = req.nextUrl.searchParams.get("all")
  let totalPage = 1;

  if (!all) {
    if (search) {
      search = decodeURIComponent(search);
      tempdata = tempdata.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
    }
    let total = tempdata.length;
    let count = 8;
    totalPage = Math.ceil(total / count);
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
  }

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

  return NextResponse.json({ data, totalPage });
}
