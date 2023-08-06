import Image from 'next/image'
import { DM_Sans } from 'next/font/google'
import Link from "next/link";
import image from '@/assets/akasshashokgupta.webp'
import image2 from '@/assets/akassh_signature.jpg'
import FeatureSection from '@/components/FeatureSection';
import Experience from '@/components/Experience';

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default function Home() {
  const data = {
    community: {
      h2: 'Our Learning Community',
      p: 'Join our new-age world-class learning platform,"<strong>Skool</strong>", which brings together classroom and community features in one place. It allows you to <strong>collaborate</strong> with other members easily, promoting learning in a community format rather than one-on-one. The platform uses gamification and rewards to keep you engaged and motivated throughout your learning journey.',
      button: {
        text: 'Read More',
        link: '/community'
    },
    image: {
      src: '/assets/images/community.jpg',
      alt: 'Community',
    },
    },
    mentoring: {
      h2: 'Our Learning Community',
      p: 'Join our new-age world-class learning platform,"<strong>Skool</strong>", which brings together classroom and community features in one place. It allows you to <strong>collaborate</strong> with other members easily, promoting learning in a community format rather than one-on-one. The platform uses gamification and rewards to keep you engaged and motivated throughout your learning journey.',
      button: {
        text: 'Read More',
        link: '/community'
    },
    image: {
      src: '/assets/images/community.jpg',
      alt: 'Community',
    },
    },
  }
  return (
    <main className={`relative flex min-h-screen flex-col items-center mt-20 ${dmSans.className}`}>
      <section className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20">
        <div className="flex flex-col justify-center flex-1 md:gap-2">
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left text-neutral-700 md:mb-3">I Breathe Passion</h1>
          <p className="text-md md:text-2xl text-center md:text-left text-neutral-700">Enabling Awareness & Happiness Via</p>
          <p className="text-md md:text-2xl text-center md:text-left text-neutral-700">Content, Courses & Masterminds</p>
          <Image src={image2} alt="Akassh ashok Gupta" width={400} height={400} className="w-8/12 md:w-5/12 mt-3 self-center md:self-start" />
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <Image src={image} alt="Akassh ashok Gupta" width={1000} height={1000} className="w-full"  draggable={false} />
        </div>
      </section>
      <Experience />
      {
        Object.keys(data).map((key, index) => (
          <FeatureSection key={index} data={data[key]} backgroundColor={index%2 === 0 ? 'bg-stone-100' : 'bg-white'} reverse={index%2 === 0 ? false : true} />
        ))
      }
    </main>
  )
}
