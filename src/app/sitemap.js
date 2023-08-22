import url from "@/utils/url";

export async function getBlogs() {
  let res
  try {
    res = await fetch(`${url}/api/personal-blog`, { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  }
  catch(err) {
    notFound()
  }
  return res.json()
}

export async function getSocialBlogs() {
  let res
  try {
    res = await fetch(`${url}/api/social-blog`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}

export default async function sitemap() {
  const blogs = await getBlogs();
  const socialBlogs = await getSocialBlogs();
  const blogUrls = blogs.map(blog => {
    return {
      url: `${url}/blogs/${blog.slug}`,
      lastModified: new Date(blog.date),
    }
  })
  const socialBlogUrls = socialBlogs.map(blog => {
    return {
      url: `${url}/social-awareness/blogs/${blog.slug}`,
      lastModified: new Date(blog.date),
    }
  })

  const date = new Date(2021, 8, 20);

  return [
    {
      url: `${url}`,
      lastModified: date,
      priority: 1,
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
