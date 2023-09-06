import React from 'react'

export default function Testimonials() {
    const data = [
        {
            name: 'Ashish Chanchalani',
            position: 'YouTuber',
            say: 'Your voice has a command that holds the audience',
            image: 'https://i.ibb.co/ZWX96p0/f74a32136930bd46ef2931829089268a.jpg',
        },
        {
            name: 'Sanjeev Bindal',
            position: 'Partner Ecovis',
            say: 'Akash is a champion of process excellence',
            image: 'https://i.ibb.co/s60C9Lt/a4996c6c96e8a16b48262488238ea240.jpg',
        },
        {
            name: 'Sourav Joshi',
            position: 'Youtuber',
            say: 'Thank you sir, your video made us really positive',
            image: 'https://i.ibb.co/vB7QT7w/547dd6126ef403823480e8ad0aedecea.jpg',
        },
        {
            name: 'Asoke Das Sarma',
            position: 'Vice President - TCS',
            say: 'He contributed significantly to process improvements during his stint in tcs',
            image: 'https://i.ibb.co/NYyD2kr/09b31261e84dbac0190604df739e5eae.jpg',
        },
        {
            name: 'Uday Mahajan',
            position: 'VP, Indus Towers',
            say: 'Fully endorse him as being thorough and extremely passionate about whatever he does',
            image: 'https://i.ibb.co/RTWjPr3/9e49d4ab167d1fe51a94ba7030b2a60f.jpg',
        },
        {
            name: 'Sonu Nigam',
            position: 'Singer and Music director',
            say: 'You have a great eye for detail',
            image: 'https://i.ibb.co/qFgyXf7/6f2fe9c8e493e01c54517ef05fbf6398.png',
        },
        {
            name: 'Triggered Insaan',
            position: 'Youtuber',
            say: 'You are literally slaying it on Youtube',
            image: 'https://i.ibb.co/MCwBsFz/b2e227d20f33ca9767b06bbec16cdbc7.jpg',
        },
        {
            name: 'Carole Mercier',
            position: 'Senior Advisor - CGI',
            say: 'I would work again with Akash anytime',
            image: 'https://i.ibb.co/qgRnL3C/da66da0cba5abac3e7183587660f8e41.jpg',
        }
    ]
    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
            {
                data.map((item, index) => (
                    <div key={index} className="flex flex-row items-center justify-center w-full md:w-5/12 p-4 bg-neutral-200 rounded-lg shadow-lg">
                        <div className="flex flex-col w-8/12 gap-2">
                            <p className=" text-sm md:text-base text-neutral-600">&quot;{item.say}&quot;</p>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-base md:text-lg font-medium">{item.name}</h3>
                                <p className="text-sm md:text-base font-medium">{item.position}</p>
                            </div>
                        </div>
                        <div className="flex flex-col self-center flex-1 justify-center items-center">
                            <img src={item.image} alt={item.name} className="w-8/12 rounded-full" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
