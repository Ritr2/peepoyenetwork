import React, { Fragment } from 'react'
import { DM_Sans } from 'next/font/google'
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
import SocialMediaDetails from '@/components/SocialMediaDetails'
import Experience from '@/components/Experience'
import { weeklyScores, monthlyScores, allTimeScores } from '@/utils/leaderboard/scores'
import Badge from '@/components/leaderboard/Badge'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

const whoIsThisFor = [
  `Tailored for students, career enthusiasts, budding entrepreneurs, influencers, and beginners in the corporate world.`,
  `Designed for individuals seeking success and eager to learn essential principles, tools, skills, and methods.`,
  `Geared towards those hungry for success and aspiring to follow the footsteps of successful leaders.`,
  `A comprehensive program aiming to equip participants with the knowledge needed for success in various fields.`
]

const whatYouWillLearn = [
  'Time Management',
  'Goal Setting',
  'Developing Success Mindset',
  'Mindset Hacks',
  'Wellness',
  'Digital Authority',
  'Mindset Hacks',
  'Networking',
  'Digital Collaboration',
  'Productivity Hacks',
  'Work Life Balance',
  'Code of Success',
]

const whoIsThisFor2 = [
  {
    title: 'Students',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2024/01/student1.png',
    paragraph: `<b>Students,</b> seeking to enhance their personality, acquire effective time management techniques, boost productivity and focus, and cultivate the skills required to grab the desired opportunities to take their career to the next level and excel as future professionals`,
  },
  {
    title: 'Corporate Professionals',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2024/01/corporate-employee.png',
    paragraph: `<b>Corporate Professionals,</b> seeking to acquire methods for boosting productivity, building confidence, and honing effective communication skills to engage customers and stakeholders, thereby promoting continuous career growth`,
  },
  {
    title: 'Entrepreneurs',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2024/01/business-owner.png',
    paragraph: `<b>Small Business Owners,</b> seeking to gain communication and collaboration skills that will enable them to attract new clients and enhance their business management capabilities by implementing the efficient operational methods utilized by larger companies`,
  },
  {
    title: 'Working Professionals',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2024/01/working-professionals.png',
    paragraph: `<b>Working Professionals,</b> seeking to acquire skills in networking, time management, communication, problem-solving, decision-making, emotional intelligence development, and conflict resolution, with the aim of achieving professional success at an expert level`,
  },
]
const plans = [
  {
    title: 'Grey Membership',
    subtitle: '(Free)',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2023/12/grey.png',
    items: [
      'Daily Success Dose',
      'Weekly Success Gamification-based Challenge with a New Concept every week.',
      'Monthly Success Letter flashing Gamification results and Highlighting Success Stories',
      'Early access to register for Success workshops (paid basis)'
    ]
  },
  {
    title: 'Blue Membership',
    subtitle: '(₹1/Day)',
    image: 'http://peepoyenetwork.com/wp-content/uploads/2023/12/blue.png',
    items: [
      `All benefits of Grey Membership+`,
      `<b className="text-blue-500">Access to Blue Card</b> that provides a Free Pass x 12 to Join Success Workshops that will be held once a Month in the calendar year`,
      `Private Access to the Telegram Community to Stay Connected for Frequent Updates, Alerts, etc.`,
      `24/7 email support`,
    ]
  }
]

const whatYouWillGain = [
  {
    title: 'Key Features of our Mentorship Program',
    section: [
      {
        title: `Daily Success Dose for 365 Days`,
        paragraph: `Unlock daily emails brimming with invaluable wisdom to empower your journey to success through reflection, visualization, thought-provoking tasks, and transformative techniques that bring absolute clarity toward your success`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Daily-Success-Dose-for-365-Days.png`,
      },
      {
        title: `Weekly Success Challenges`,
        paragraph: `Engage in a weekly success challenge that encourages you to apply the concepts and methods you've learned during the week. This practical approach will enable you to integrate your newfound knowledge into your daily personal life, job, or business, providing you with the opportunity to witness and experience tangible transformation while benefiting from mentorship.`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Weekly-Success-Challenges.png`,
      },
      {
        title: `Monthly Success Newsletter`,
        paragraph: `Experience a monthly success newsletter that encapsulates the month's cumulative learning journey. This includes a compilation of daily insights, weekly challenges, and the shared experiences of diverse mentees. These stories serve as a source of motivation, allowing everyone to draw inspiration from the experiences of others and gain valuable insights into various applications of the methods, concepts, and tools learned.`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Monthly-Success-Newsletter.png`,
      },
      {
        title: `Early Access to Monthly Success Workshops`,
        paragraph: `Unlock an enticing advantage by gaining VIP early access and exclusive invitations to our premium virtual monthly success workshops, held at the end of each month. These workshops are dedicated to dynamic live discussions, delving deep into vital concepts and methods from our esteemed success mentorship program. Plus, as a VIP participant, you'll have the unique opportunity to pose questions and participate in an engaging interactive Q&A session.`,
        image: `http://peepoyenetwork.com/wp-content/uploads/2024/01/Early-Access-to-Monthly-Success-Workshops.png`,
      }
    ]
  },
]

const surpriseImage = 'https://media-public.canva.com/D566I/MAFTiDD566I/1/tl.png';
const backgroundImageUrl = 'https://media-private.canva.com/lw3Yc/MAFAxVlw3Yc/1/s2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20240109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240109T185049Z&X-Amz-Expires=102109&X-Amz-Signature=2b40909ba5f79830b02ff0fdf8de7a85b3f87f298097eddd61d0e3af9fbf6bbc&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2010%20Jan%202024%2023%3A12%3A38%20GMT';
const sectionStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: '2rem',
  borderRadius: '0.75rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

export default function Mentoring() {
  return (
    <main className={`flex flex-col items-center mt-16 ${dmSans.className}`}>
      <section className="flex flex-col items-center justify-center md:gap-5 pt-10 px-5 md:px-52 pb-5 md:pb-10">
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-neutral-700">Success Mentorship Program Gamified Leaderboard</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
          <div className="flex flex-col justify-center items-center gap-5 w-full md:w-1/2">
            <div className="flex flex-col justify-center items-center gap-1 w-full">
              <h2 className="text-xl md:text-2xl font-bold text-center text-neutral-700 border-b-[4px] border-neutral-600 border-double">Weekly Leaderboard</h2>
              {
                weeklyScores.map((item, index) => (
                  <Badge item={item} key={index} />
                ))
              }
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-6/12">
            <img src='http://peepoyenetwork.com/wp-content/uploads/2024/01/gamification-leaderboard.jpg' alt="Akassh ashok Gupta" className="w-full rounded-lg" draggable={false} />
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center w-full justify-center gap-8 bg-stone-100 px-5 py-16 md:px-52 overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-5 w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center gap-1 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-center text-neutral-700 border-b-[4px] border-neutral-600 border-double">Monthly Leaderboard</h2>
            {
              monthlyScores.map((item, index) => (
                <Badge item={item} key={index} />
              ))
            }
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center gap-1 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-center text-neutral-700 border-b-[4px] border-neutral-600 border-double">All Time Leaderboard</h2>
            {
              allTimeScores.map((item, index) => (
                <Badge item={item} key={index} />
              ))
            }
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-1 pt-10 px-5 md:px-52 pb-5 md:pb-10 w-full">
        <div style={sectionStyle} className='flex flex-col justify-center items-center w-full'>
          <div className="flex flex-col justify-center items-center w-full md:w-3/12">
            <img src={surpriseImage} alt="Akassh ashok Gupta" className="w-full rounded-lg" draggable={false} />
          </div>
          <p className="text-lg md:text-3xl">
            Monthly Reward Program to be announced shortly for the Top Rankholders on the leaderboard.
          </p>
          <p className="text-sm md:text-2xl text-gray-100 mb-6">(Please note: Only Blue Tier Mentees will be eligible for the Rewards)</p>
          <p className="text-lg md:text-xl">Stay tuned for a delightful surprise! 🌟</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center md:gap-5 pt-10 px-5 md:px-52 pb-5 md:pb-10 bg-stone-100 w-full">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Upgrade to Blue Tier Now!</h2>
          <p className="text-lg md:text-xl mb-4">
            Unlock exclusive benefits and advance your experience for just Rs 1 per day.
          </p>
          <p className="text-sm text-gray-300 mb-6">Don't miss out on premium features and rewards!</p>
          <p className="text-lg md:text-xl mb-4">Elevate your journey today. 🚀</p>
          <Link href='/mentoring-blue' className="bg-yellow-500 text-gray-800 hover:bg-yellow-600 md:text-xl px-4 py-2 rounded-full focus:outline-none">
            Learn More
          </Link>
        </div>
      </section>
    </main>
  )
}
