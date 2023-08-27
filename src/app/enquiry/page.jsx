import React from 'react'
import { DM_Sans } from 'next/font/google'
import EnquiryForm from '@/components/EnquiryForm'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function page() {
  const data = {
    title: 'Enquiry',
    questions: {
      reason: {
        question: 'What is your reason to join?',
        options: {
          1: {
            value: 'Just Exploring',
            next: false,
            transferLink: {
              name: 'Blogs',
              link: '/blogs',
              text: `You should check out our blog section. You'll find some great content there.`,
              send: false,
            }
          },
          2: {
            value: 'To grow my YouTube channel',
            next: 'prefer',
            transferLink: false,
          },
          3: {
            value: 'To Start a youtube Channel',
            next: 'data',
            transferLink: {
              name: 'Youtubeneur Community',
              link: 'https://www.skool.com/youtubeneur',
              text: `You are eligible for the Youtubeneur Membership Program where you'll how to grow your youtube channel and get access to all the tools and resources you need to grow your youtube channel.`,
              send: true,
            }
          },
          4: {
            value: 'To generate business lead using youtube organically',
            next: 'youtube',
            transferLink: false,
          },
          5: {
            value: 'To Learn for my personal and career growth',
            next: false,
            transferLink: {
              name: 'Mentoring Program',
              link: '/mentoring',
              text: `You should join our mentoring program to learn and grow in your career.`,
              send: false,
            }
          },
        },
      },
      youtube: {
        question: 'Do you have a YouTube channel?',
        options: {
          1: {
            value: 'yes',
            next: 'prefer',
            transferLink: false,
          },
          2: {
            value: 'no',
            next: 'data',
            transferLink: {
              name: 'Youtubeneur Community',
              link: 'https://www.skool.com/youtubeneur',
              text: `You are eligible for the Youtubeneur Membership Program where you'll how to grow your youtube channel and get access to all the tools and resources you need to grow your youtube channel.`,
              send: true,
            }
          },
        },
      },
      prefer: {
        question: 'What do you prefer?',
        options: {
          1: {
            value: 'Want to learn how to do youtube on my own',
            next: 'data',
            transferLink: {
              name: 'Youtubeneur Community',
              link: 'https://www.skool.com/youtubeneur',
              text: `You are eligible for the Youtubeneur Membership Program where you'll how to grow your youtube channel and get access to all the tools and resources you need to grow your youtube channel.`,
              send: true,
            }
          },
          2: {
            value: 'Want help regarding youtube growth services',
            next: 'data',
            transferLink: {
              name: 'DFY- Content Service',
              link: 'https://akassh.co/dfy-yt',
              text: `You are eligible for the DFY Youtube Growth Service where you'll get all the help you need to grow your youtube channel.`,
              send: true,
            }
          },
        },
      },
      data: {
        question: 'Please fill the form below',
        inputs: {
          name: {
            type: 'text',
            name: 'first_name',
            placeholder: 'First Name',
            required: true,
          },
          email: {
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            required: true,
          },
        },
      },
    }
  }

  return (
    <main className={`relative flex bg-neutral-300 min-h-screen flex-col items-center mt-16 ${dmSans.className} md:px-40 px-2 py-20 overflow-x-hidden`}>
      <div className='flex flex-col w-full'>
      <EnquiryForm data = {data} />
      </div>
    </main>
  )
}
