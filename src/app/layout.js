import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Peepoye Network',
  description: 'Work for all',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <NavigationBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
