import { NextResponse } from "next/server";
import blogdata from "../../blog";

export async function GET(req, { params }) {
  const yearMonth = params.slug;
  const tempdata = blogdata.filter((blog) => {
    const date = new Date(blog.date);
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    return key === yearMonth;
  });

  const data = tempdata.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return NextResponse.json(data);
}

