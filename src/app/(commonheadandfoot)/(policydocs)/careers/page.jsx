import React from 'react'
import { DM_Sans } from 'next/font/google'
import FAQ from '@/components/FAQ'


const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function page() {
  const data = [
    {
      question: 'Content Writer',
      answer: 'We are looking for a talented content writer to join our team. The ideal candidate should have a passion for writing, a strong understanding of SEO, and the ability to create engaging content for our website, social media platforms, and YouTube videos. This is an entry-level position, and we welcome freshers to apply.',
      bulletPoints: [
        'For a detailed job description, <a href="https://docs.google.com/document/d/14YzM_x9cQ1V5Y-Aq43VqIjONXssVSsTGorkTnP-SYyg/edit?usp=sharing" className="underline text-blue-700">Click here</a>',
        'To access the application form & apply for the job, <a href="https://forms.gle/7iQjfoF67Gbuk6fm7" className="underline text-blue-700">Click here</a>'
      ]
    },
    {
      question: 'Data Analyst',
      answer: 'We are looking for a skilled data analyst to join our team. The ideal candidate should have experience in analyzing large datasets from various sources to identify trends, insights and to drive business decisions. The data analyst will work closely with the marketing and sales team to provide insights on social media, YouTube, and other online platforms to help drive engagement and growth.',
      bulletPoints: [
        'For a detailed job description, <a href="https://docs.google.com/document/d/1m679eMxTeWrQxxwg-5yvCnDl2wgFcJ9o-fSVqkFIz5k/edit?usp=sharing" className="underline text-blue-700">Click here</a>',
        'To access the application form & apply for the job, <a href="https://forms.gle/7iQjfoF67Gbuk6fm7" className="underline text-blue-700">Click here</a>'
      ]
    },
    {
      question: 'Digital Marketing Analyst',
      answer: 'We are seeking a skilled digital marketer to join our team. The ideal candidate should have experience in creating and executing digital marketing campaigns that drive customer engagement and sales. The digital marketer will work closely with the marketing team to develop and implement strategies that increase brand awareness, website traffic, and lead generation.',
      bulletPoints: [
        'For a detailed job description, <a href="https://docs.google.com/document/d/1KQTfWWlOPLULvE9Pe6VE8HEMl7h8hbWym4u4kExnUVo/edit?usp=sharing" className="underline text-blue-700">Click here</a>',
        'To access the application form & apply for the job, <a href="https://forms.gle/7iQjfoF67Gbuk6fm7" className="underline text-blue-700">Click here</a>'
      ]
    },
    {
      question: 'Graphic Designer',
      answer: 'The Graphic Designer will be responsible for creating visually engaging and attention-grabbing thumbnails for YouTube videos and other designs such as posters, banners, software boxes, and other marketing materials. The designer will work closely with the marketing team to develop creative concepts that accurately represent the brand and communicate the necessary messaging to the target audience.',
      bulletPoints: [
        'For a detailed job description, <a href="https://docs.google.com/document/d/1SBDk0le5quUmzAogaXWVvBd1uR8EWXRepv9rKRomY4A/edit?usp=sharing" className="underline text-blue-700">Click here</a>',
        'To access the application form & apply for the job, <a href="https://forms.gle/7iQjfoF67Gbuk6fm7" className="underline text-blue-700">Click here</a>'
      ]
    },
    {
      question: 'Social Media Analyst',
      answer: "We are looking for a social media analyst who can create and implement social media strategies to help Peepoye Network build and maintain a strong online presence. The Social Media Analyst will oversee all social media platforms and collaborate with other teams to develop campaigns that engage and grow the organization's audience.",
      bulletPoints: [
        'For a detailed job description, <a href="https://docs.google.com/document/d/1VV0SP6KBoGeQTqrNXHewpRSiLT50QlHw_IbTGr0xtNk/edit?usp=sharing" className="underline text-blue-700">Click here</a>',
        'To access the application form & apply for the job, <a href="https://forms.gle/7iQjfoF67Gbuk6fm7" className="underline text-blue-700">Click here</a>'
      ]
    },
    {
      question: 'Video Editor',
      answer: "We are seeking a skilled video editor to join our team. The ideal candidate should have experience in creating compelling video content that tells a story and captures the audience's attention. The video editor will work closely with the creative team to produce high-quality videos for our brand and clients.",
      bulletPoints: [
        'For a detailed job description, <a href="https://docs.google.com/document/d/12LcxYWWL4dw6rYyouta4WiK08ZpJikhp7i4qY6XlnLw/edit?usp=sharing" className="underline text-blue-700">Click here</a>',
        'To access the application form & apply for the job, <a href="https://forms.gle/7iQjfoF67Gbuk6fm7" className="underline text-blue-700">Click here</a>'
      ]
    }
  ]


  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row w-full bg-neutral-200 items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-neutral-700">WORK WITH US</h1>
          <h2 className="text-sm md:text-lg font-thin text-center md:text-left text-neutral-500">IF YOU WISH TO JOIN OUR TEAM, SCROLL DOWN</h2>
        </div>
      </section>
      <section className="flex flex-col w-full py-20 px-2 md:px-52 gap-10 md:gap-20">
        <FAQ data={data} />
      </section>
    </main>
  )
}
