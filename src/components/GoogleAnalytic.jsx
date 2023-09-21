'use client'
import React, { useEffect } from 'react'
import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from 'next/script';
import TagManager from 'react-gtm-module';

export default function GoogleAnalytic() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PCN84MFT' });
}, []);
  return (
    <>
      <GoogleAnalytics />

      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8328474876522258"
      />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive"
      />
    </>
  )
}
