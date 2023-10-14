import { NextResponse } from "next/server";
import blogdata from "../blog";
import categoryData from "../category";
import { allArchives,recent_five_blogs, blog_categories } from "../apiMethods";

export async function GET(req) {
  let data = blogdata

  const temp = await allArchives();
  const temp2 = await recent_five_blogs();
  const temp3 = await blog_categories();

  let monthlyData = new Set();

  const monthlyArchive = data.reduce((acc, curr) => {
    const date = new Date(curr.date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    monthlyData.add(key);
  }, monthlyData);

  temp.forEach((item) => {
    monthlyData.add(item);
  });

  monthlyData = [...monthlyData].sort((a, b) => {
    const aDate = new Date(a);
    const bDate = new Date(b);
    return bDate - aDate;
  });


  const category = temp3.map((cat) => {
    return {
      name: cat.name,
      slug: cat.slug,
    };
  });



  data = data.concat(temp2)
  data = data.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return bDate - aDate;
  })

  console.log("====================================");
  console.log("data extraction");
  console.log(temp2);
  console.log("====================================");

  console.log("====================================");
  console.log("data consolidation");
  console.log(data);
  console.log("====================================");

  const recentFive = data.slice(0, 5);

  return NextResponse.json({recentFive, monthlyArchive: [...monthlyData], category });
}
