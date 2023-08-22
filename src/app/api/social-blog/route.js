import { NextResponse } from "next/server";
import blogdata from "./blog";

export async function GET(req) {
  const tempdata = blogdata.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return bDate - aDate;
  });
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
  
  return NextResponse.json(data);
}
