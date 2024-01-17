import React, { Fragment } from 'react'
import { DM_Sans, Lato } from 'next/font/google'
import data from '@/utils/mentoring/expect_sections'
import BoxContainer from '@/components/mentoring/BoxContainer'
import DynamicForm from '@/components/mentoring/DynamicForm'
import testimonials from '@/utils/mentoring/testimonials_section'
import testimonials2 from '@/utils/mentoring/testimonials_2_section'
import Testimonials from '@/components/mentoring/Testimonials'
import FormPopup from '@/components/mentoring/FormPopup'
import { BsCheck } from 'react-icons/bs';
import parse from 'html-react-parser';
import Link from 'next/link'
import ScrollButton from '@/components/mentoring/ScrollButton'
import FunnelFooter from '@/components/funnels/FunnelFooter'
import AreYouSure from '@/components/mentoring/AreYouSure'
import Experience from '@/components/Experience'
import SocialMediaDetails from '@/components/SocialMediaDetails'
import CountDown from '@/components/mentoring/CountDown'
import BottonTag from '@/components/mentoring/BottonTag'

const dmSans = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

const whoIsThisFor = [
  `Tailored for students, career enthusiasts, budding entrepreneurs, influencers, and beginners in the corporate world.`,
  `Designed for individuals seeking success and eager to learn essential principles, tools, skills, and methods.`,
  `Geared towards those hungry for success and aspiring to follow the footsteps of successful leaders.`,
  `A comprehensive program aiming to equip participants with the knowledge needed for success in various fields.`
]

const whatYouWillLearn = [
  [
    'Time Management',
    'Goal Setting',
    'Developing Success Mindset',
    'Mindset Hacks',
    'Wellness',
    'Digital Authority',
  ],
  [
    'Mindset Hacks',
    'Networking',
    'Digital Collaboration',
    'Productivity Hacks',
    'Work Life Balance',
    'Code of Success',
  ]
]

const whoIsThisFor2 = [
  {
    title: 'Students',
    image: 'https://peepoyenetwork.com/wp-content/uploads/2024/01/student1.png',
    paragraph: `<b>Students,</b> seeking to enhance their personality development, acquire effective time management techniques, boost productivity, concentrate on their studies, and cultivate the skills required to excel as future professionals`,
  },
  {
    title: 'Corporate Professionals',
    image: 'https://peepoyenetwork.com/wp-content/uploads/2024/01/corporate-employee.png',
    paragraph: `<b>Corporate Professionals,</b> seeking to acquire methods for boosting productivity, building confidence, and honing effective communication skills to engage customers and stakeholders, thereby promoting continuous career growth`,
  },
  {
    title: 'Entrepreneurs',
    image: 'https://peepoyenetwork.com/wp-content/uploads/2024/01/business-owner.png',
    paragraph: `<b>Small Business Owners,</b> seeking to gain communication and collaboration skills that will enable them to attract new clients and enhance their business management capabilities by implementing the efficient operational methods utilized by larger companies`,
  },
  {
    title: 'Working Professionals',
    image: 'https://peepoyenetwork.com/wp-content/uploads/2024/01/working-professionals.png',
    paragraph: `<b>Working Professionals,</b> seeking to acquire skills in networking, time management, communication, problem-solving, decision-making, emotional intelligence development, and conflict resolution, with the aim of achieving professional success at an expert level`,
  },
]

const whatYouWillGain = [
  {
    title: 'New Features Rolled out this Month in our Premium Blue Tier',
    section: [
      {
        title: `Gamification Leaderboard`,
        paragraph: `"Say Hello to the Gamified Leaderboard in the Blue Mentorship Tier! Now, earn points by completing tasks from the Daily Success Dose and Weekly Challenges, unlocking exciting rewards and the chance to be featured on our website based on your leaderboard ranking.`,
        image: `https://peepoyenetwork.com/wp-content/uploads/2024/01/gamification-leaderboard.jpg`,
      },
      {
        title: `Success Mentorship Archive`,
        paragraph: `This archive guarantees that no member of the blue tier misses out on any information, Akash. With secure online storage and lifetime access, you can simply log in and explore the complete 365-day content tailored to your access and tier-level`,
        image: `https://peepoyenetwork.com/wp-content/uploads/2024/01/Success-Mentorship-Archive.jpg`,
      }
    ]
  },
  {
    title: 'Key Features of our Premium Blue Mentorship Tier',
    section: [
      {
        title: `Blue Card`,
        paragraph: `"As a benefit for Blue Members, this card grants you complimentary entry to our monthly LIVE Success Workshops, covering a diverse range of topics and concepts. That's a total of 12 workshops throughout the year, all included in your membership at no extra charge."`,
        image: `https://peepoyenetwork.com/wp-content/uploads/2024/01/Blue-Card.jpg`,
      },
      {
        title: `Private Community`,
        paragraph: `"As a valued Blue Member, you gain privileged entry to our private Telegram community, where you'll receive instant updates via both text and audio messages. Be the first to stay informed about tasks and updates, and enjoy priority access to feedback & change requests."`,
        image: `https://peepoyenetwork.com/wp-content/uploads/2024/01/Private-Community.jpg`,
      },
      {
        title: `Permanent Access`,
        paragraph: `"Blue Tier members enjoy continuous program access for a full year, whereas Grey memberships may be deactivated if left inactive. Our dedication is to those who demonstrate commitment to their success and actively engage in the program."`,
        image: `https://peepoyenetwork.com/wp-content/uploads/2024/01/Permanent-Access.jpg`,
      },
    ]
  }
]

export default function Mentoring() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center ${dmSans.className}  overflow-x-hidden navy-blue-bg`}>
      <BottonTag ptext='⏰ THIS OFFER IS ONLY AVAILABLE FOR THE NEXT' time= {86400000} btext='Upgrade to Blue now' blink='https://pages.razorpay.com/successblue' />
      <div className="flex flex-col w-full justify-center py-3 items-center golden-bg">
        <span className="text-base md:text-xl font-normal md:font-bold text-center md:text-left text-white uppercase">
          ⌛ Wait! The Higher Tier Blue Mentorship with premium perks is now available for you!
        </span>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-5 pt-5 px-5 md:px-52 pb-5 md:pb-10 mt-5">
        <div className="flex flex-col justify-center gap-5 order-3 md:order-1 w-full md:w-6/12">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-white">Premium Blue Tier Unlocked! Designed for ambitious go-getters aiming for 10x faster success</h1>
          <p className="text-base md:text-xl font-normal text-center md:text-left text-white">Our Premium Blue Tier of Mentorship combines all the Grey Tier features with exciting new benefits that ensure your membership guarantees success. Enjoy perks such as a Gamified Reward Program, complete access to the Mentorship Archive, a Blue Card granting free entry to Live Success Workshops held on Zoom throughout the year, VIP discounts for Success Workshops, exclusive access to a private community, and much more.</p>
          <div className="flex flex-col w-full md:w-9/12 mt-2 md:mt-3">
            <ScrollButton text='Explore the Key Features of Premium Blue' bgColor={{ normal: 'golden-bg-button', hover: '', active: '' }} />
          </div>
        </div>
        <div className="flex flex-col items-end flex-1 order-2">
          <img src='https://peepoyenetwork.com/wp-content/uploads/2024/01/premium-blue-tier-unlocked.png' alt="Akassh ashok Gupta" className="w-full md:w-11/12 rounded-xl" draggable={false} />
        </div>
      </section>
      <section id="plan" className="flex flex-col items-center w-full justify-center gap-8 bg-white/5 px-5 pt-16 pb-0 md:py-16 md:px-52 overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-10 bg-white/5 shadow-lg rounded-lg w-full">
          {
            whatYouWillGain.map((item, index) => (
              <Fragment key={index}>
                <div className={`flex flex-col items-center justify-center gap-5 md:gap-24 w-full p-5`}>
                  <h2 className="text-2xl md:text-4xl font-bold text-center text-white">{item.title}</h2>
                  <div className="flex flex-col justify-center gap-16 w-full">
                    {
                      item.section.map((section, index2) => (
                        <div key={index2} className={`flex flex-col md:flex-row justify-between w-full gap-16 px-5`}>
                          <div className={`flex flex-col items-start justify-start gap-5 w-full md:w-6/12 ${index2 % 2 === 0 ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
                            <h3 className="text-xl md:text-3xl font-bold text-center md:text-left text-white">{section.title}</h3>
                            <p className="text-base md:text-xl font-normal text-center md:text-left text-white">{parse(section.paragraph)}</p>
                            <div className="flex flex-col justify-center gap-1 w-full md:w-auto md:min-w-[300px]">
                              <Link href="https://pages.razorpay.com/successblue" className='flex flex-row w-full golden-bg-button md:max-w-[400px] text-white font-bold md:py-2 py-1 px-1 text-sm md:px-4 md:text-base rounded-lg justify-center items-center gap-2 uppercase'>
                                Upgrade to Blue Tier at ₹ 1/day only
                              </Link>
                              <AreYouSure />
                            </div>
                          </div>
                          <div className="flex flex-col justify-center items-center gap-5 flex-1 order-2 md:order-1">
                            <img src={section.image} alt={section.title} className="w-full rounded-xl" draggable={false} />
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                {
                  index === 0 && (
                    <div className="border-b-[6px] border-white border-double w-full"></div>
                  )
                }
              </Fragment>
            ))
          }
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-10 px-5 py-16 md:px-52 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left text-white">Who is This For?</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-24 w-full shadow-lg rounded-lg bg-white/5 p-5 md:p-10">
          {
            whoIsThisFor2.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 w-full md:w-[40%]">
                <img src={item.image} alt={item.title} className="w-full rounded-xl" draggable={false} />
                <p className="text-base md:text-lg font-normal text-center md:text-left text-white">{parse(item.paragraph)}</p>
              </div>
            ))
          }
          {/* <div className="flex flex-col flex-1 gap-2 md:gap-5 self-stretch border-[4px] border-neutral-200 rounded-lg shadow-inner">
            <img src='https://peepoyenetwork.com/wp-content/uploads/2023/12/who-is-this-for.png' alt="Who is this for?" className="w-full object-contain object-bottom h-full" draggable={false} />
          </div>
          <div className="flex flex-col justify-center w-full md:w-7/12 gap-2 md:gap-5">

            <div className="flex flex-col justify-center gap-1">
              {
                whoIsThisFor.map((item, index) => (
                  <div key={index} className="flex flex-row">
                    <BsCheck className="text-4xl w-12 text-white" />
                    <p className="text-base md:text-lg font-normal text-white">{item}</p>
                  </div>
                ))
              }
            </div>
          </div> */}
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-8 bg-stone-100 px-5 py-16 md:px-52 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-5 w-full">
          <div className="flex flex-col items-center justify-center gap-2 w-full md:w-7/12">
            <h2 className="text-lg md:text-2xl font-bold text-neutral-700">
            Our Program Structure
            </h2>
            <div className="flex flex-row gap-1 w-full">
              {
                whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex flex-col bg-neutral-300 rounded-lg shadow-lg p-5 flex-1">
                      {
                        item.map((section, index2) => (
                          <div key={index2} className="flex flex-row items-center gap-2">
                            <span key={index} className="text-base md:text-lg text-neutral-700 w-3 h-3 bg-neutral-700 rounded-full"></span>
                            <span className="text-base md:text-lg text-neutral-700">{section}</span>
                          </div>
                        ))
                      }
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 md:gap-10 flex-1 p-5">
            <img src="https://i.ibb.co/GdRJ5sw/akasshashokgupta.webp" alt="Akassh ashok Gupta" className="w-full" draggable={false} />
          </div>
        </div>
      </section>
      <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-40 gap-5 md:gap-14 bg-white/5">
        <div className={`flex flex-col items-center gap-2`}>
          <h2 className={`text-xl md:text-4xl text-center text-white font-bold`}>
            Meet Your Coach, Guide, and Mentor - <span className={`text-white`}> Akassh Ashok Gupta </span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
            <img src="https://i.ibb.co/pdXR2sN/1.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
          </div>
          <div className="flex flex-col flex-1">
            <p className={`text-base md:text-xl text-white font-normal`}>
              Hey there, I'm Akassh Ashok Gupta! Thanks for stopping by to learn more about me. With over <span className={``}>19 years of experience</span> in the corporate world and more than <span className={``}>5 years dedicated</span> to mastering the art of YouTube, I bring a unique blend of skills to the table. My background as a business consultant, coupled with my status as an influencer, sets me apart as the ideal mentor for this journey.<br /><br /><span className={``}>Imagine this:</span> in less than a year after leaving a high-profile leadership position, I managed to build an impressive online presence with over 1 million followers across various social media platforms. This success is a result of my distinctive approach to consulting and influence, all fueled by the vast experience I gained from mentoring some of the world's biggest brands.
            </p>
          </div>
        </div>
        <div className="flex flex-col h-32">
          <SocialMediaDetails />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl order-1 md:order-2`}>
            <img src="https://i.ibb.co/RT3XGxt/2.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
          </div>
          <div className="flex flex-col flex-1 order-2 md:order-1">
            <p className={`text-base md:text-xl text-white font-normal`}>
              Even when I was at a leadership position at my job, earning really well, I decided to quit my job and do YouTube full-time. The reason was simple- I realised my Passion. Today, <span className={``}>I breathe passion</span> by doing what I love. Quitting the job was not an easy call but still I took that step because I knew what I was truly meant for and what my passion was. Now, I am on a mission to <span className={``}>enable 1 lac people</span> like me breathe their passion and create multiple revenue streams by doing what they love the most.<br /><br />What sets me apart further are my incredible collaborations with legends like Sonu Nigam and Shruti Haasan. Additionally, I've gained the admiration of top YouTube influencers including Ashish Chanchlani, Harsh Beniwal, MythPat, Sourav Joshi, and many more.
            </p>
          </div>
        </div>
        <Experience theme='dark' />
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
            <img src="https://i.ibb.co/LrvNWBp/3.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
          </div>
          <div className="flex flex-col flex-1">
            <p className={`text-base md:text-xl text-white font-normal`}>
              I believe in the power of YouTube not just as a platform for entertainment but as a strategic tool for business growth.<br /><br />Let's embark on this exciting journey together, and I'll guide you every step of the way in leveraging YouTube to its fullest potential.<br /><br />Whether you're looking to diversify your <span className={``}>revenue streams or attract valuable business leads</span>, I've got the expertise to make it happen. Let's make your YouTube venture a resounding success!<br /><br />I'm really looking forward to you completing this course and make this about passion, fullfillment and enjoy every bit of the journey it entails.<br /><br />
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 self-center items-center w-full md:w-8/12">
          <Link href="https://pages.razorpay.com/successblue" className='flex flex-row w-full golden-bg-button md:max-w-[400px] text-white font-bold md:py-2 py-1 px-1 text-sm md:px-4 md:text-base rounded-lg justify-center items-center gap-2 uppercase'>
            Upgrade to Blue Tier at ₹ 1/day only
          </Link>
          <AreYouSure />
          {/* <Link to='dfyPricingSection' smooth={true} duration={500} className='flex-1 flex flex-row items-center justify-center gap-2 md:gap-5 bg-emerald-700 cursor-pointer text-white text-lg md:text-xl font-bold rounded-xl py-2 md:py-3 px-5 md:px-8 hover:bg-emerald-600'>
            Book Now
          </Link> */}
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-8 px-5 py-16 md:px-52 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white">A sneak peek at the enthusiasm in 2024 surrounding our Revamped Success Mentorship Program 2.0</h2>
        <div className='flex flex-col items-center w-full justify-center gap-8'>
          {
            testimonials2.map((testimonial, index) => (
              <div key={index} className='flex flex-col items-center w-full justify-center gap-5'>
                <Testimonials data={testimonial} index={index} />
                {
                  ((index + 1) % 3 === 0 && index > 0) && (
                    <div className="flex flex-col w-full items-center">
                      <Link href="https://pages.razorpay.com/successblue" className='flex flex-row w-full golden-bg-button md:max-w-[400px] text-white font-bold md:py-2 py-1 px-1 text-sm md:px-4 md:text-base rounded-lg justify-center items-center gap-2 uppercase'>
                        Upgrade to Blue Tier at ₹ 1/day only
                      </Link>
                      <AreYouSure />
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center gap-8 px-5 py-16 md:px-52 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white">Hear What Our Mentees said about this Program in 2023</h2>
        <div className='flex flex-col items-center w-full justify-center gap-8'>
          {
            testimonials.map((testimonial, index) => (
              <div key={index} className='flex flex-col items-center w-full justify-center gap-5'>
                <Testimonials data={testimonial} index={index} />
                {
                  ((index + 1) % 3 === 0 && index > 0) && (
                    <div className="flex flex-col w-full items-center md:w-1/2">
                      <Link href="https://pages.razorpay.com/successblue" className='flex flex-row w-full golden-bg-button md:max-w-[400px] text-white font-bold md:py-2 py-1 px-1 text-sm md:px-4 md:text-base rounded-lg justify-center items-center gap-2 uppercase'>
                        Upgrade to Blue Tier at ₹ 1/day only
                      </Link>
                      <AreYouSure />
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </section>
      <FunnelFooter />
    </main>
  )
}
