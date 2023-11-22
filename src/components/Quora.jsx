import React from 'react'
import Script from 'next/script';

export default function Quora() {

  return (
    <>
    <Script
        dangerouslySetInnerHTML={{
          __html: `
            !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
            qp('init', '7bcb1f9c921d49e08a93d00a3f204d9e');
            qp('track', 'ViewContent');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://q.quora.com/_/ad/7bcb1f9c921d49e08a93d00a3f204d9e/pixel?tag=ViewContent&noscript=1"
        />
      </noscript>
    </>
  )
}
