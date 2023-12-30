import axios from 'axios';
import url, { apiUrl } from '../url';

export const getVideoLink = async(config_key) => {
    const res = await fetch(`${apiUrl}/global_configs/${config_key}`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  export const getPopularSocialBlogsData = async (data) => {
    let blogs_slug = data.split(',');
    let blogs = [];
  
    // Use Promise.all to wait for all fetch operations to complete
    await Promise.all(blogs_slug.map(async (blog_slug) => {
      let temp = await fetch(`${apiUrl}/social_awareness_blogs/${blog_slug}`, { cache: 'no-cache' })
      temp = await temp.json();
      blogs.push(temp);
    }));
    return blogs;
  };