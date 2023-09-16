import { getBlogs } from "./blogs/page"
import { getSocialBlogs } from "./social-awareness/blogs/page";
import url from "@/utils/url";

export default async function sitemap() {
  const blogs = await getBlogs();
  const socialBlogs = await getSocialBlogs(false,false,true);
  const blogUrls = blogs.map(blog => {
    return {
      url: `${url}/blogs/${blog.slug}`,
      lastModified: new Date(blog.date),
    }
  })
  const socialBlogUrls = socialBlogs.data.map(blog => {
    return {
      url: `${url}/social-awareness/blogs/${blog.slug}`,
      lastModified: new Date(blog.date),
    }
  })

  const date = new Date();
  return [
    {
      url: `${url}`,
      lastModified: date,
    },
    {
      url: `${url}/mentoring`,
      lastModified: date,
    },
    {
      url: `${url}/about`,
      lastModified: date,
    },
    {
      url: `${url}/blogs`,
      lastModified: date,
    },
    {
      url: `${url}/change-community`,
      lastModified: date,
    },
    {
      url: `${url}/collaborate-with-us`,
      lastModified: date,
    },
    {
      url: `${url}/courses`,
      lastModified: date,
    },
    {
      url: `${url}/mentoring`,
      lastModified: date,
    },
    {
      url: `${url}/resources`,
      lastModified: date,
    },
    {
      url: `${url}/social-awareness`,
      lastModified: date,
    },
    {
      url: `${url}/social-awareness/blogs`,
      lastModified: date,
    },
    {
      url: `${url}/cancellation-refund-policy`,
      lastModified: date,
    },
    {
      url: `${url}/careers`,
      lastModified: date,
    },
    {
      url: `${url}/help`,
      lastModified: date,
    },
    {
      url: `${url}/privacy-policy`,
      lastModified: date,
    },
    {
      url: `${url}/terms-of-service`,
      lastModified: date,
    },
    ...blogUrls,
    ...socialBlogUrls,
  ]
}
