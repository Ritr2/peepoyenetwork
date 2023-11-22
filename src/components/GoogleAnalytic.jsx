'use client'
import React, { useEffect } from 'react'
import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from 'next/script';
import TagManager from 'react-gtm-module';
import { LinkedInInsightTag } from 'nextjs-linkedin-insight-tag'
import Quora from './Quora';

export default function GoogleAnalytic() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N2W2DF4Z' });
  }, []);

  return (
    <>
      <GoogleAnalytics />
      <LinkedInInsightTag />
      <Script
        strategy="lazyOnload"
        crossOrigin="anonymous"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4476984830702989"
      />
    </>
  )
}
