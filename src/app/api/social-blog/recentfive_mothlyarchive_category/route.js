import { NextResponse } from "next/server";
import blogdata from "../blog";
import categoryData from "../category";

export async function GET(req) {
  const data = blogdata.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return bDate - aDate;
  })

  const monthlyData = new Set();

  const monthlyArchive = data.reduce((acc, curr) => {
    const date = new Date(curr.date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    monthlyData.add(key);
  }, monthlyData);

  const category = categoryData.map((cat) => {
    return {
      name: cat.name,
      slug: cat.slug,
    };
  });

  const recentFive = data.slice(0, 5);

  return NextResponse.json({recentFive, monthlyArchive: [...monthlyData], category });
}
