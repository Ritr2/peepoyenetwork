'use client'
import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import { a } from 'react-spring';

export default function InstagramPost({ url }) {
  return (
    <>
      <InstagramEmbed url={url} style={{
        maxWidth: 550
      }} width="100%" />
    </>
  )
}
