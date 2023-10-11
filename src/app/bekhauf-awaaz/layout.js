import { Roboto } from 'next/font/google'
import url from '@/utils/url';
import NavBar from '@/components/polls/NavBar';
import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Bekhauf Polls for Bekhauf Community',
  description: 'Vote now and share your Bekhauf voice! Gain fresh perspectives and dive into thought-provoking discussions today. Express your opinions.',
  images: [
    {
      url: `https://i.ibb.co/TcHVdR1/Linktree.png`,
      width: 500,
      height: 500,
      alt: 'Bekhauf Polls for Bekhauf Community'
    },
  ],
  url: 'https://peepoye.com/bekhauf-awaaz',
  type: 'website',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://peepoye.com/bekhauf-awaaz',
    title: 'Bekhauf Polls for Bekhauf Community',
    description: 'Vote now and share your Bekhauf voice! Gain fresh perspectives and dive into thought-provoking discussions today. Express your opinions.',
    images: [
      {
        url: `https://i.ibb.co/TcHVdR1/Linktree.png`,
        width: 500,
        height: 500,
        alt: 'Bekhauf Polls for Bekhauf Community'
      },
    ],
    site_name: 'Peepoye',
  },
  twitter: {
    cardType: 'summary_large_image',
    title: 'Bekhauf Polls for Bekhauf Community',
    description: 'Vote now and share your Bekhauf voice! Gain fresh perspectives and dive into thought-provoking discussions today. Express your opinions.',
    images: [
      {
        url: `https://i.ibb.co/TcHVdR1/Linktree.png`,
        width: 500,
        height: 500,
        alt: 'Bekhauf Polls for Bekhauf Community'
      },
    ],
    site: '@peepoye',
    creator: '@peepoye',
  },
  alternates: {
    canonical: 'https://peepoye.com/bekhauf-awaaz',
  },
};


export default function RootLayout({ children }) {
  return (
    <div className={`${roboto.className} flex flex-col`}>
      <NavigationBar />
      <div className="mt-24 md:mt-20" />
      {children}
      <Footer />
    </div>
  )
}
