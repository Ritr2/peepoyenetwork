'use client'
import React from 'react'
import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from 'next/script';

export default function GoogleAnalytic() {
  return (
    <>
      <GoogleAnalytics />
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8328474876522258"
      />
    </>
  )
}
