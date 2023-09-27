import React, { Fragment } from 'react'
import JourneyScrollElements from './JourneyScrollElements'
import style from '@/styles/JourneyScroll.module.css'

export default function JourneyScroll() {
    let data = [
        {
            title: 'The 3-Days Challenge',
            description: `Complete the 3-Days Foundational Accelerator course on YouTube and do all the tasks which will lay down the foundation of your YouTube journey.`,
            image: {
                src: 'https://i.ibb.co/QYMnCmc/accelerator.webp',
                alt: 'accelerator',
            },
        },
        {
            title: '35 days Implementation Challenge',
            description: `Set up every system, tool, and process with step-by-step instructions as part of becoming a YouTubeneur.`,
            image: {
                src: 'https://i.ibb.co/GnmVzF8/35-days-Implementation-Challenge.webp',
                alt: 'jump',
            },
        },
        {
            title: `The 100 Videos Challenge`,
            description: `Create 100 videos for your YouTube channel and implement all the strategies you learned and grow in the process. `,
            image: {
                src: 'https://i.ibb.co/TB8cBHn/video-challenge.webp',
                alt: 'videos',
            },
        },
        {
            title: `Community Building Challenge`,
            description: `Build your own loyal community of like-minded individuals. Collaborate and build your personal brand. `,
            image: {
                src: 'https://i.ibb.co/8PtTDky/community.webp',
                alt: 'community',
            },
        },
        {
            title: `Product Roll-Out Challenge`,
            description: `Launch your product in the market and start generating sales out of it by using strategies taught in the youtubeneur journey.`,
            image: {
                src: 'https://i.ibb.co/yfRqGJq/product.webp',
                alt: 'product',
            },
        },
        {
            title: `Collaborate with Akassh`,
            description: `Once you have 100 members in your community and have generated 10 sales of your first product, you get an opportunity to collaborate with Akassh- The first "YouTubeneur" himself!`,
            image: {
                src: 'https://i.ibb.co/QpW4s0y/coffee-chat.png',
                alt: 'collaborate',
            },
        }
    ]

    return (
        <div className={`flex flex-col relative items-center justify-center w-full h-full gap-8 md:gap-32 ${style.bgImage}`}>
            {
                data.map((item, index) => (
                    <Fragment key={index}>
                        <JourneyScrollElements details={item} index={index} />
                    </Fragment>
                ))
            }
        </div>
    )
}
