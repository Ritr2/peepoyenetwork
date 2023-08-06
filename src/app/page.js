import Image from 'next/image'
import { DM_Sans } from 'next/font/google'
import Link from "next/link";
import image from '@/assets/akasshashokgupta.webp'
import image2 from '@/assets/akassh_signature.jpg'
import FeatureSection from '@/components/FeatureSection';
import Experience from '@/components/Experience';
import data from '@/utils/home_sections';

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default function Home() {
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
