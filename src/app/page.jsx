import { DM_Sans } from 'next/font/google'
import FeatureSection from '@/components/FeatureSection';
import Experience from '@/components/Experience';
import data from '@/utils/home_sections';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Form from '@/components/webinar/Form';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { getPopularSocialBlogsData, getVideoLink } from '@/utils/GlobalApiCall/apiCalls';
import parse from 'html-react-parser';
import VideoPlay from '@/components/mentoring/VideoPlay';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false });
const bg_image = 'https://peepoyenetwork.com/wp-content/uploads/2024/01/banner-1-1.png'

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
  const { config_value: videoUrl } = await getVideoLink('blog_sidebar_video');
  let { config_value: popular_shorts } = await getVideoLink('popular_shorts');
  let { config_value: popular_blogs } = await getVideoLink('popular_blogs');
  let blog_details = await getPopularSocialBlogsData(popular_blogs);
  popular_shorts = popular_shorts.split(',');
  
  const bgImageStyle = {
    backgroundImage: `url(${bg_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  const mentoring = {
    h2: `Join our new 'Mentorship for Success Program' for 2024`,
    p: 'Discover a thrilling journey with our upcoming <b>"Mentorship for Success Program."</b> Building on our past success, This new program is designed to take your professional and personal growth to unprecedented heights by enabling your success journey daily. As we expand our mentorship program, we want you to be among the first to embark on this transformative journey.',
    button: {
      text: 'Read More',
      link: '/mentoring'
    },
    image: {
      src: 'https://peepoyenetwork.com/wp-content/uploads/2023/12/mentoring-logo.png',
      alt: 'Mentorship',
      size: 'w-full'
    },
  }

  return (
    <>
      <NavigationBar />
      <main className={`flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-5 pt-10 px-5 md:px-52 pb-5 md:py-40" style={bgImageStyle}>
        <div className="flex flex-col justify-center gap-5 order-1 w-full md:w-6/12">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-white">Unlock Your Success Potential with Our Innovative Mentorship</h1>
          <p className="text-base md:text-lg font-normal text-center md:text-left text-white">"Our groundbreaking Success Mentorship Program is meticulously crafted to provide you with the tools, methods, and concepts that ensure not just learning but practical implementation, enabling a transformation of your ingrained patterns over time. Through a gamified and enjoyable setting, you'll receive daily success boosts, tackle weekly challenges, and engage in monthly workshops, igniting a relentless pursuit of success within you."</p>
          <div className="flex flex-col w-full md:w-9/12 mt-2 md:mt-3">
          <Link href="/mentoring" className={`text-lg md:text-xl text-center bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800 text-white p-3 rounded-lg drop-shadow-lg shadow-lg hover:shadow-xl hover:drop-shadow-xl active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95 cursor-pointer`}>
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1 order-2">
          <VideoPlay img = {bg_image} />
        </div>
      </section>
        {/* <section className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20">
          <div className="flex flex-col justify-center flex-1 md:gap-2">
            <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left text-neutral-700 md:mb-3">I Breathe Passion</h1>
            <p className="text-md md:text-2xl text-center md:text-left text-neutral-700">Enabling Awareness & Happiness Via</p>
            <p className="text-md md:text-2xl text-center md:text-left text-neutral-700">Content, Courses & Masterminds</p>
            <img src="https://i.ibb.co/L0LvZhh/akassh-signature.png" alt="Akassh ashok Gupta" className="w-8/12 md:w-5/12 mt-3 self-center md:self-start" />
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-6/12">
            <img src="https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp" alt="Akassh ashok Gupta" className="w-full" draggable={false} />
          </div>
        </section> */}
        <Experience />
        {/* <section className={`flex flex-col md:flex-row px-5 md:px-40 items-center justify-center py-6 md:py-12 gap-4 md:gap-14 bg-neutral-300`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 bg-white shadow-lg rounded-lg p-2 md:p-8 drop-shadow-xl">
          <div className={`flex flex-col md:w-7/12 gap-2 md:gap-5 order-2 items-center`}>
            <h2 className="text-xl md:text-4xl md:tracking-wide font-bold text-center md:text-left text-neutral-600">{mentoring.h2}</h2>
            <p className="text-base md:text-xl text-center md:text-left text-neutral-700">{parse(mentoring.p)}</p>
            {
              mentoring.hasOwnProperty('button') &&
              <Link href={mentoring.button.link} className="text-lg md:text-xl text-left md:self-start bg-neutral-600 text-white p-2 md:p-4 px-8 rounded-lg drop-shadow-lg shadow-lg hover:bg-neutral-700 hover:shadow-xl hover:drop-shadow-xl active:bg-neutral-800 active:shadow-2xl active:drop-shadow-2xl active:translate-x-1 active:scale-95">
                {mentoring.button.text}</Link>
            }
          </div>
          <div
            className={`flex flex-col items-center justify-center flex-1 md:order-3`}>
            <img src={mentoring.image.src} alt={mentoring.image.alt} width={1000} height={1000} className={`${mentoring.image.size ? mentoring.image.size : 'w-full drop-shadow-lg shadow-lg rounded-lg'}`} />
          </div>
          </div>
        </section> */}
        {/* <section className="flex flex-col md:flex-row items-center justify-center md:gap-20 py-10 px-2 md:px-40 w-full bg-neutral-100">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 bg-white shadow-lg rounded-lg p-2 md:p-8 drop-shadow-xl">
            <div className="flex flex-col items-center justify-center flex-1">
              <img src="https://peepoyenetwork.com/wp-content/uploads/2023/12/banner.png" alt="Akassh ashok Gupta" className="w-full object-contain rounded-lg" draggable={false} />
            </div>
            <div className="flex flex-col justify-center gap-3 md:gap-8 w-full md:w-5/12">
              <span className="text-lg md:text-3xl text-center text-neutral-700 uppercase">Join our FREE Webinar</span>
              <h2 className="text-xl md:text-4xl font-bold text-center text-neutral-900">How to Engineer Multiple Revenue Streams Using YouTube in 3 Days</h2>
              <Link href="/mewebinar1" className=" self-center md:w-10/12 flex rounded-lg py-4 text-base md:text-2xl font-bold flex-row items-center justify-center gap-2 w-full text-white red-bg hover:bg-red-400 hover:shadow-lg hover:drop-shadow-lg hover:scale-105 active:bg-red-900 active:shadow-none active:drop-shadow-none active:scale-95 uppercase">
                Register Now
              </Link>
            </div>
          </div>
        </section> */}
        <section className="flex flex-col items-center justify-center py-10 px-2 md:px-10 w-full bg-neutral-300">
          <div className="flex flex-col items-center justify-center gap-5 md:gap-10 bg-white shadow-lg rounded-lg p-5 drop-shadow-xl w-full md:w-10/12">
            <h2 className="text-xl md:text-4xl md:tracking-wide font-bold text-center text-neutral-600">Featured Social Awareness Blogs</h2>
            <div className="flex flex-col md:flex-row justify-between flex-wrap w-full gap-6 md:gap-2">
              {
                blog_details.map((blog, index) => (
                  <div className="flex flex-col items-center justify-between w-full md:w-[30.5%] gap-5" key={index}>
                    <div className="flex flex-col items-center gap-2">
                      <Link href={`/social-awareness/blogs${blog.slug}`}><img src={blog.image.src} alt={blog.title} className="w-full rounded-lg" /></Link>
                      <Link href={`/social-awareness/blogs${blog.slug}`}><h2 className="text-lg md:text-xl font-normal text-center text-neutral-900">{blog.title}</h2></Link>
                    </div>
                    <Link className='w-11/12' href={`/social-awareness/blogs${blog.slug}`}><button className="flex rounded-lg py-2 px-4 text-base md:text-xl font-bold flex-row items-center justify-center gap-2 w-full text-white bg-neutral-600 hover:bg-neutral-400 hover:shadow-lg hover:drop-shadow-lg hover:scale-105 active:bg-neutral-900 active:shadow-none active:drop-shadow-none active:scale-95">Read More</button></Link>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        <section className="flex gap-5 flex-col items-center justify-center py-10 px-2 md:px-10 w-full bg-neutral-100">
          <div className="flex flex-col items-center justify-center gap-5 md:gap-10 bg-white shadow-lg rounded-lg p-5 drop-shadow-xl w-full md:w-8/12">
            <h2 className="text-xl md:text-4xl md:tracking-wide font-bold text-center text-neutral-600">Featured Social Awareness Video</h2>
            <VideoPlayer url={videoUrl} height="h-[200px] md:h-[600px]" />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center py-10 px-2 md:px-10 w-full bg-neutral-300">
          <div className="flex flex-col items-center justify-center gap-5 md:gap-10 bg-white shadow-lg rounded-lg p-5 drop-shadow-xl w-full md:w-10/12">
            <h2 className="text-xl md:text-4xl md:tracking-wide font-bold text-center text-neutral-600">Our Trending Short Videos</h2>
            <div className="flex flex-col md:flex-row justify-between flex-wrap items-center w-full gap-10 md:gap-0">
              {
                popular_shorts.map((video, index) => (
                  <div className="flex flex-col items-center justify-center w-full md:w-[30.5%]" key={index}>
                    <VideoPlayer url={video} height="h-[600px] md:h-[600px]" />
                  </div>
                ))
              }
            </div>
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
