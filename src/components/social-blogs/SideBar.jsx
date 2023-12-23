import React from 'react'
import url, { apiUrl } from '@/utils/url'
import { notFound } from 'next/navigation'
import SideBarClient from './SideBarClient'

const getrecentfiveblogs = async () => {
  let res
  try {
    res = await fetch(`${url}/api/social-blog/recentfive_mothlyarchive_category`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}

const getVideoLink = async() => {
  const res = await fetch(`${apiUrl}/global_configs/blog_sidebar_video`, { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


export default async function SideBar({ search, afterurl }) {
  const data = await getrecentfiveblogs();
  const {config_value} = await getVideoLink();
  return (
    <SideBarClient data={data} search={search} afterurl={afterurl} videoLink={config_value} />
  )
}
