import React from 'react'
import Script from 'next/script';

export default function QuoraPage() {

  return (
    <>
    <Script
        dangerouslySetInnerHTML={{
          __html: `
          qp('track', 'CompleteRegistration');
          `,
        }}
      />
    </>
  )
}
