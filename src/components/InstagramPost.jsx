'use client'
import React, { useEffect } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramPost({ url }) {
  const [mobile, setMobile] = React.useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if(window.innerWidth < 768) {
        setMobile(true)
      }
      else {
        setMobile(false)
      }
    }
  }, [])
  return (
    <>
      <InstagramEmbed url={url} style={{
        maxWidth: 550
      }} width={mobile ? 320 : 550} />
    </>
  )
}
