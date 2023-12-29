import axios from 'axios';
import { apiUrl } from '../url';

export const getVideoLink = async() => {
    const res = await fetch(`${apiUrl}/global_configs/blog_sidebar_video`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }