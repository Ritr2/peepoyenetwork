import { DM_Sans } from 'next/font/google'
import FeatureSection from '@/components/FeatureSection';
import Experience from '@/components/Experience';
import data from '@/utils/home_sections';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Form from '@/components/webinar/Form';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { getVideoLink } from '@/utils/GlobalApiCall/apiCalls';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false });

export const metadata = {
  title: 'Enabling Awareness & Happiness Via Content & Courses - Peepoye',
  description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
  images: [
    {
      url: `https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp`,
      width: 500,
      height: 500,
      alt: 'Akassh Ashok Gupta'
    },
  ],
  url: 'https://peepoye.com',
  type: 'website',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://peepoye.com',
    title: 'Enabling Awareness & Happiness Via Content & Courses - Peepoye',
    description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
    images: [
      {
        url: `https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp`,
        width: 500,
        height: 500,
        alt: 'Akassh Ashok Gupta'
      },
    ],
    site_name: 'Peepoye',
  },
  twitter: {
    cardType: 'summary_large_image',
    title: 'Enabling Awareness & Happiness Via Content & Courses - Peepoye',
    description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
    images: [
      {
        url: `https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp`,
        width: 500,
        height: 500,
        alt: 'Akassh Ashok Gupta'
      },
    ],
    site: '@peepoye',
    creator: '@peepoye',
  },
  alternates: {
    canonical: '/',
  },
};


const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default async function Home() {
  const {config_value: videoUrl} = await getVideoLink();
  return (
    <>
      <NavigationBar />
      <main className={`flex flex-col items-center mt-20 ${dmSans.className} overflow-x-hidden`}>
        <section className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20">
          <div className="flex flex-col justify-center flex-1 md:gap-2">
            <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left text-neutral-700 md:mb-3">I Breathe Passion</h1>
            <p className="text-md md:text-2xl text-center md:text-left text-neutral-700">Enabling Awareness & Happiness Via</p>
            <p className="text-md md:text-2xl text-center md:text-left text-neutral-700">Content, Courses & Masterminds</p>
            <img src="https://i.ibb.co/L0LvZhh/akassh-signature.png" alt="Akassh ashok Gupta" className="w-8/12 md:w-5/12 mt-3 self-center md:self-start" />
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-6/12">
            <img src="https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp" alt="Akassh ashok Gupta" className="w-full" draggable={false} />
          </div>
        </section>
        <Experience />
        <section className="relative flex flex-col mt-5 md:flex-row items-center justify-center md:gap-20 py-10 px-2 md:px-40 w-full bg-neutral-600">
          <img src="http://peepoyenetwork.com/wp-content/uploads/2023/12/pexels-henry-co-2341290-scaled.jpg" alt="Akassh ashok Gupta" className="absolute top-0 left-0 w-full h-full object-cover object-bottom blur-[5px] opacity-80" draggable={false} />
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 bg-white shadow-lg rounded-lg p-5 drop-shadow-xl">
            <div className="flex flex-col items-center justify-center flex-1">
              <img src="http://peepoyenetwork.com/wp-content/uploads/2023/12/webinar.png" alt="Akassh ashok Gupta" className="rounded-full md:h-80 w-full object-contain" draggable={false} />
            </div>
            <div className="flex flex-col justify-center gap-3 md:gap-8 w-full md:w-7/12">
              <span className="text-lg md:text-2xl text-center text-neutral-700 capitalize">Join our FREE Webinar</span>
              <h2 className="text-xl md:text-3xl font-bold text-center text-neutral-900">How to Engineer Multiple Revenue Streams Using YouTube in 3 Days</h2>
              <Link href="/mewebinar1" className=" self-center md:w-10/12 flex rounded-lg py-4 text-base md:text-xl font-bold flex-row items-center justify-center gap-2 w-full text-white bg-neutral-600 hover:bg-neutral-400 hover:shadow-lg hover:drop-shadow-lg hover:scale-105 active:bg-neutral-900 active:shadow-none active:drop-shadow-none active:scale-95">
                <span>Register Now</span>
                </Link>
              </div>
          </div>
        </section>
        {
          Object.keys(data).map((key, index) => (
            <FeatureSection key={index} data={data[key]} backgroundColor={index % 2 === 0 ? 'bg-stone-100' : 'bg-white'} reverse={index % 2 === 0 ? false : true} />
          ))
        }
        <section className="flex flex-col items-center justify-center py-10 px-2 md:px-40 w-full bg-neutral-600">
          <div className="flex flex-col items-center justify-center gap-5 md:gap-10 bg-white shadow-lg rounded-lg p-5 drop-shadow-xl md:min-w-[800px]">
            <h2 className="text-xl md:text-4xl md:tracking-wide font-bold text-center text-neutral-600">Featured Social Awareness Video</h2>
            <VideoPlayer url={videoUrl} height="h-[200px] md:h-[420px]" />
          </div>
        </section>
        {/* <section
      className={`flex flex-col md:flex-row px-5 md:px-20 items-center justify-center py-6 md:py-12 gap-4 md:gap-14 bg-stone-100`}>
        
        </section> */}
      </main>
      <Footer />
    </>
  )
}
