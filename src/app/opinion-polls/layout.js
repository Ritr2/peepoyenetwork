import { Roboto } from 'next/font/google'
import url from '@/utils/url';
import NavBar from '@/components/polls/NavBar';


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})


export default function RootLayout({ children }) {
  return (
      <div className={`${roboto.className} flex flex-col`}>
        <NavBar />
        <div className="mt-24 md:mt-20" />
        {children}
      </div>
  )
}
