import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'
import { LayoutProvider } from './LayoutProvider'
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL('https://peepoye.com'),
  title: 'Peepoye',
  description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
  image: 'https://i.postimg.cc/pXPLWrYr/akassh-signature.png',
  url: 'https://peepoye.com',
  type: 'website',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://peepoye.com',
    title: 'Peepoye',
    description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
    image: 'https://i.postimg.cc/pXPLWrYr/akassh-signature.png',
    site_name: 'Peepoye',
  },
  canonical: 'https://peepoye.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
        <Analytics />
      </body>
    </html>
  )
}
