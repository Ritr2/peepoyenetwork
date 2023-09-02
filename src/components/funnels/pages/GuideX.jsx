'use client'
import React, { useEffect } from 'react'
import style from '@/styles/GuideX.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Roboto } from 'next/font/google'
import { useInView } from 'react-intersection-observer'
import parse from 'html-react-parser'
import Button from '../Button'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import FAQ from '@/components/FAQ'
import FunnelFooter from '../FunnelFooter'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function GuideX() {
  const { ref: ref1, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const [curImpactIndex, setCurImpactIndex] = React.useState(0);
  const needData = [
    {
      h2: 'First-Mover Advantage',
      p: `X has just launched the monetization program, and it is the best time to grab the opportunity and make some real $$$.`,
      img: 'https://i.postimg.cc/MK0Z8NS2/First-Mover-Advantage.png'
    },
    {
      h2: `Hit & Trial doesn’t work`,
      p: `If you keep experimenting with X to find out the right strategies, you may lose the best time to grow your presence on X`,
      img: 'https://i.postimg.cc/Jz1r7xry/Hit-Trial-doesn-t-work.png',
    }
    ,
    {
      h2: `Passive Income`,
      p: `While you were just wasting your time on social media till now, it is the opportunity for you to generate passive income by just doing what you love.`,
      img: 'https://i.postimg.cc/nzscbLH0/Passive-Income.png',
    }
    ,
    {
      h2: `Copy-Paste Method`,
      p: `You need a copy-paste method to start your X journey as quickly as possible to gain the first mover advantage.`,
      img: 'https://i.postimg.cc/8CcTMCrN/Copy-Paste-Method.png',
    }
  ]

  const impactData = [
    {
      img: 'https://i.postimg.cc/VNKLQCjh/1.png',
      p: '<span className="text-2xl">Say hello to Jack!</span>',
    },
    {
      img: 'https://i.postimg.cc/7LHYWVT7/2.png',
      p: 'He was just an everyday guy caught in the <span>scrolling loop on social media</span>. Hours disappeared as he flipped through random stuff, leaving him feeling empty.',
    },
    {
      img: 'https://i.postimg.cc/QtVNXdmd/3.png',
      p: 'Bills piled up, and he <span>wished for some extra cash</span> without the 9-to-5 grind.',
    },
    {
      img: 'https://i.postimg.cc/2SFSGJ3r/4.png',
      p: 'Ever catch yourself looking at those big-shot influencers and thinking, "I wish that could be me?" Jack sure did. But negativity hit him hard – parents and others nagging him, <span>bad comments online making him doubt himself</span>.',
    },
    {
      img: 'https://i.postimg.cc/d3bVNc8t/5.png',
      p: `Then, boom! Jack got his hands on this <span>X guidebook</span> that flipped his story.<br/>No more pointless scrolling. <span>Jack started creating content.</span>`,
    },
    {
      img: 'https://i.postimg.cc/nhtLvZF3/6.png',
      p: `Guess what? His social media hobby <span>turned into a real income</span>.<br/>Jack felt happier – like he found his thing.`,
    },
    {
      img: false,
      p: `<span className="italic text-3xl">Summary</span><br/><br/><span>Jack felt happier</span> – like he found his thing.<br/>He wasn't just a follower anymore; he became a creator people liked. And those haters? They only fueled his fire. He knew he was onto something <span>when his passion paid off</span>.<br/>With the extra bucks, <span>Jack made his family happy</span>, too. Gifts all around. No more scolding, just big smiles. And all of this, starting from that guidebook.<br/>Now, it's your turn. Wanna turn scrolling into soaring like Jack? The guidebook is waiting to change your game.`,
    }
  ]

  const insideData = [
    {
      p: `<span>6 Secret Nuggets with Practical Methods</span> to create the right strategies for your X account and generate high income from the platform.`,
      img: `https://i.postimg.cc/Rh5zCz4n/1.png`,
    },
    {
      p: `<span>Case studies</span> of some top influencers on X and their approach to leveraging X. `,
      img: `https://i.postimg.cc/vB6sdmFs/2.png`,
    },
    {
      p: `<span>Implementation Tasks</span> at the end of each chapter so that you don’t just learn but apply. `,
      img: `https://i.postimg.cc/90dHrNQg/3.png`,
    },
    {
      p: `<span>Ready to Use Templates</span> to take the printouts or make one for yourself for easy implementation of the tasks.`,
      img: `https://i.postimg.cc/ZqnmVcw0/4.png`,
    }
  ]

  const faq = [
    {
      question: `In which language is the guidebook available?`,
      answer: `The guidebook is available in English language as it is the most widely used and understood language`,
    },
    {
      question: `Will it really change my life?`,
      answer: `If you really apply the method and do the tasks given in the book, then yes, it will definitely change your life to a better one!`,
    }
  ]

  const impactClickHandler = (type) => {
    if (type === 'prev') {
      if (curImpactIndex === 0) {
        return;
      }
      else {
        setCurImpactIndex(curImpactIndex - 1);
      }
    } else {
      if (curImpactIndex === impactData.length - 1) {
        console.log('here');
        setCurImpactIndex(0);
      }
      else {
        setCurImpactIndex(curImpactIndex + 1);
      }
    }
  }

  return (
    <div className='flex w-full flex-col'>
      <section className="flex flex-col w-full justify-center py-3 items-center bg-neutral-800 overflow-hidden">
        <motion.h1 className={`text-lg md:text-2xl text-white text-center md:text-left font-medium ${style.blueTextShadow}`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
        >
          Tired of sleeping with regret after wasting hours on <span className='font-semibold'>Social Media</span>?
        </motion.h1>
      </section>
      <section className="flex flex-col md:flex-row justify-center py-10 px-5 md:px-28 items-center overflow-hidden gap-5 md:gap-14">
        <div className="flex flex-col flex-1 justify-center items-start gap-5 order-2 md:order-1">
          <motion.h2 className={`text-2xl md:text-5xl select-none relative text-white font-medium ${style.blueTextShadow} ${style.lineHeight}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 0.5 }}>
            Convert your<br /> distraction into a<br /><span className='font-semibold'>money-making engine!</span>
            <span className={`absolute top-0 right-5 w-16 h-16 md:right-10 md:w-32 md:h-32 ${style.xlogoBg}`} />
          </motion.h2>
          <motion.p className={`text-xl text-white select-none font-normal ${roboto.className}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}>
            Welcome to a guide that unveils the secrets to turning Twitter, now referred to as X, into a source of real and substantial income. Crafted through meticulous study of prominent influencers who have conquered X and even drawing inspiration from the brilliant mind of Elon Musk, this guidebook is your essential resource for monetizing your presence on this dynamic platform.
          </motion.p>
          <motion.div className="flex flex-col justify-start w-full md:w-7/12 gap-5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1.5 }}
          >
            <div className={`flex flex-col w-full gap-5`}>
              <div className={`flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed`}>
                <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Regular Price: <s>₹999</s>/-</span>
                <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-blue-500">Today’s Offer: ₹199/-</span>
              </div>
              <Button query='thankyou' product='guide-x' amount='guide-x' text='Buy X Guide only for today at an unblelieveable 80% Discount' padding='px-5 py-2' bgcolor={{ normal: 'bg-blue-500', hover: 'bg-blue-700', active: 'bg-blue-800' }} txcolor='text-white' />
            </div>
          </motion.div>
        </div>
        <motion.div className="flex flex-col w-full md:w-5/12 justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 0.5 }}>
          <img src="https://i.postimg.cc/P5T8VS9F/akasshashokgupta.png" alt="Akash Shashok Gupta" />
        </motion.div>
      </section>
      <section className="flex flex-col w-full justify-center py-10 px-5 md:px-28 items-center overflow-hidden gap-10">
        <h2 className={`text-2xl text-center md:text-left md:text-4xl text-white font-medium ${style.blueTextShadow}`}>
          Why Do I Need This <span className='font-semibold'>Guidebook</span> Now?
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5 w-full md:gap-16 md:w-7/12 " ref={ref1}>
          {
            needData.map((item, index) => (
              <motion.div key={index}
                initial={index % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : index % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
                transition={{ duration: 1, type: 'ease' }}
                className={`flex flex-col justify-between rounded-xl gap-5 w-full md:w-5/12 ${style.containerShadow}`}>
                <div className="flex flex-col justify-center items-center w-full">
                  <img src={item.img} alt={item.h2} className='w-full rounded-t-xl' />
                </div>
                <div className="flex flex-col justify-center w-full px-5 pb-5">
                  <h2 className={`text-xl text-white font-medium ${style.blueTextShadow}`}>
                    <span>{item.h2}</span>
                  </h2>
                  <p className={`text-lg text-white font-light ${roboto.className}`}>
                    {item.p}
                  </p>
                </div>
              </motion.div>
            )
            )
          }
        </div>
        <div className="flex flex-col justify-center w-full md:w-4/12 gap-5">
          <Button query='thankyou' product='guide-x' amount='guide-x' text='Buy X Guide only for today at an unblelieveable 80% Discount' padding='px-5 py-2' bgcolor={{ normal: 'bg-blue-500', hover: 'bg-blue-700', active: 'bg-blue-800' }} txcolor='text-white' />
        </div>
      </section>
      <section className="flex flex-col w-full justify-center py-10 px-5 md:px-28 items-center overflow-hidden gap-5">
        <div className="flex flex-col w-full justify-center py-3 items-center overflow-hidden gap-5">
          <h2 className={`text-2xl text-center md:text-left md:text-4xl text-white font-medium ${style.blueTextShadow}`}>
            Before vs After: The <span className='font-semibold'>GuideBook</span> Impact
          </h2>
        </div>
        <div className="flex flex-row w-full md:w-7/12 justify-center py-3 gap-5 md:gap-16">
          <BsArrowLeftCircle className={`text-2xl md:text-5xl text-blue-500 self-center ${curImpactIndex === 0 && 'opacity-0'}`} onClick={() => impactClickHandler('prev')} />
          {
            impactData.map((item, index) => (
              <AnimatePresence key={index}>
                {
                  index === curImpactIndex && (
                    <motion.div key={index}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, type: 'ease' }}
                      className={`flex flex-col rounded-xl p-2 md:p-5 gap-5 flex-1 ${style.containerShadow} md:h-96 cursor-pointer`} onClick={() => impactClickHandler('next')}>
                      {
                        item.img && (
                          <div className="flex flex-col flex-1 justify-center items-center h-10">
                            <img src={item.img} alt={item.h2} className='h-full w-full object-contain rounded-t-xl' />
                          </div>
                        )
                      }
                      <p className={`text-base md:text-lg text-white self-center h-fit font-light ${roboto.className} ${style.normalText}`}>
                        {parse(item.p)}
                      </p>
                    </motion.div>
                  )
                }
              </AnimatePresence>
            )
            )
          }
          <BsArrowRightCircle className={`text-2xl md:text-5xl text-blue-500 self-center`} onClick={() => impactClickHandler('next')} />
        </div>
        {
          curImpactIndex === impactData.length - 1 && (
            <div className={`flex flex-col w-full md:w-4/12 gap-5`}>
              <div className={`flex flex-col items-center w-full p-3 rounded-lg bg-neutral-100 border-2 border-neutral-200 border-dashed`}>
                <span className="flex-1 text-base md:text-xl font-normal text-left text-neutral-700">Regular Price: <s>₹999</s>/-</span>
                <span className="text-base md:text-2xl font-normal md:font-bold text-center md:text-left text-blue-500">Today’s Offer: ₹199/-</span>
              </div>
              <Button query='thankyou' product='guide-x' amount='guide-x' text='Buy X Guide only for today at an unblelieveable 80% Discount' padding='px-5 py-2' bgcolor={{ normal: 'bg-blue-500', hover: 'bg-blue-700', active: 'bg-blue-800' }} txcolor='text-white' />
            </div>
          )
        }
      </section>
      <section className="flex flex-col w-full justify-center py-10 px-5 md:px-28 items-center overflow-hidden gap-10">
        <h2 className={`text-4xl text-white font-medium ${style.blueTextShadow}`}>
          Here&apos;s What You Get Exactly
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-16 w-full md:w-7/12" ref={ref2}>
          {
            insideData.map((item, index) => (
              <motion.div key={index}
                initial={index % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
                animate={inView2 ? { opacity: 1, x: 0 } : index % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
                transition={{ duration: 1, type: 'ease' }}
                className={`flex flex-col justify-between py-5 px-2 rounded-xl gap-10 w-full md:w-5/12 ${style.containerShadow}`}>
                <div className="flex flex-col justify-center items-center">
                  <img src={item.img} alt={item.h2} className='h-24 rounded-t-xl' />
                </div>
                <div className="flex flex-col justify-center w-full px-5 pb-5">
                  <p className={`text-lg text-white font-light ${roboto.className} ${style.normalText}`}>
                    {parse(item.p)}
                  </p>
                </div>
              </motion.div>
            )
            )
          }
        </div>
        <div className="flex flex-col justify-center w-full md:w-4/12 gap-5">
          <Button query='thankyou' product='guide-x' amount='guide-x' text='Buy X Guide only for today at an unblelieveable 80% Discount' padding='px-5 py-2' bgcolor={{ normal: 'bg-blue-500', hover: 'bg-blue-700', active: 'bg-blue-800' }} txcolor='text-white' />
        </div>
      </section>
      <section className="flex flex-col w-full justify-center py-10 px-5 md:px-28 items-center overflow-hidden gap-10">
        <div className='flex flex-col items-center'>
          <h2 className={`text-base md:text-xl text-white font-medium ${style.blueTextShadow}`}>
            <span className='font-semibold'>Meet Your Coach, Guide, and Mentor</span>
          </h2>
          <h3 className={`text-3xl md:text-5xl text-white font-medium ${style.blueTextShadow}`}>
            Akassh Ashok Gupta
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl ${style.containerShadow}`}>
            <img src="https://i.postimg.cc/9Fj1WTfz/akassh-1.png" alt="Akassh Ashok Gupta" className='rounded-xl' />
          </div>
          <div className="flex flex-col flex-1">
            <p className={`text-base md:text-xl text-white font-light ${roboto.className} ${style.normalText}`}>
              Hi! I’m Akassh, and I thank you for taking an interest in reading about me!<br />In my career, I have been fortunate enough to <span>experience 20+ years of corporate life</span> at leadership positions consulting big firms and <span>5 years of YouTube experience</span>, gaining over <span>1 million+ subscribers</span>.<br />I attribute much of these experiences to how I run my day, every day.<br />While most of us feel lost and feel like we are wasting time, I have, over the past 20 years, built a wonderful relationship with time, processes, methods, and systems.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className={`flex flex-col w-full md:w-6/12 rounded-xl order-1 md:order-2 ${style.containerShadow}`}>
            <img src="https://i.postimg.cc/Njs4Xcmc/akassh-2.png" alt="Akassh Ashok Gupta" className='rounded-xl' />
          </div>
          <div className="flex flex-col flex-1 order-2 md:order-1">
            <p className={`text-base md:text-xl text-white font-light ${roboto.className} ${style.normalText}`}>Through those systems and processes, I have been able to create <span>multiple revenue streams</span> for myself by just doing what I love.<br />With the launch of <span>X monetization policy</span>, I dived deeper into it and gained a hefty amount from the platform in the first month itself.<br />I am on a mission to <span>educate 1 lac people</span> on how to leverage social media to create multiple revenue streams.<br />In this <span>guidebook</span>, I share how I managed to earn this amount from X, and at the time, I have also shared some interesting case studies of top X influencers and some <span>practical tasks to implement.</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full md:w-4/12 gap-5">
          <Button query='thankyou' product='guide-x' amount='guide-x' text='Buy X Guide only for today at an unblelieveable 80% Discount' padding='px-5 py-2' bgcolor={{ normal: 'bg-blue-500', hover: 'bg-blue-700', active: 'bg-blue-800' }} txcolor='text-white' />
        </div>
      </section>
      <section className="flex flex-col w-full justify-center py-10 pb-16 px-5 md:px-28 items-center overflow-hidden gap-10">
        <h2 className={`text-4xl text-white font-medium ${style.blueTextShadow}`}>
          Frequently Asked Questions
        </h2>
        <div className={`flex flex-col w-full md:w-8/12 ${roboto.className}`}>
          <FAQ data={faq} bgcolor={{ question: 'bluecontainerShadow', answer: 'bluecontainerShadow' }} textcolor={{ question: 'text-white', answer: 'text-white' }} />
          </div>
      </section>
      <FunnelFooter bgcolor = {'bg-neutral-800'} />
    </div>
  )
}
