import FeaturedAndTrending from '@/components/polls/FeaturedAndTrending'
import Link from 'next/link'
import { apiUrl } from '@/utils/url'

const getCategory = async () => {
  const response = await fetch(`${apiUrl}/categories`, { next: { revalidate: 10000 } })
  const data = await response.json()
  return data;
}

export default async function page() {
  const data = await getCategory();
  return (
    <main className="flex flex-col">
      <div className="flex flex-col">
        <img src="https://i.ibb.co/CnX9Zkx/image.png" alt="T-shirt" className="w-full" />
      </div>
      <div className="flex flex-col">
        <FeaturedAndTrending />
      </div>
      <div className='border-neutral-950 w-full border-dashed border-b-2 my-10 border-10 h-1' />
      <Link href='https://akassh.co/ifgu' target='_blank' rel='noreferrer'>
        <img src='https://i.ibb.co/VTtTdpX/guide-if.webp' alt='Influencer guide' className='w-full' />
      </Link>
      <div className='border-neutral-950 w-full border-dashed border-b-2 my-10 border-10 h-1' />
      <div className="flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl mb-5 font-bold text-neutral-800">Category of Polls</h3>
        <div className="flex flex-col md:flex-row flex-wrap md:w-4/5 m-auto items-center justify-center gap-10 p-3 pb-10">
          {data.map((item, index) => (
            <Link href={`bekhauf-awaaz/${item.slug}`} key={index} className="flex flex-col items-center justify-center w-full md:w-2/5 hover:scale-105">
              <img src={item.image} alt="img" className="object-cover w-full rounded-t-lg" />
              <button className="bg-neutral-900 text-white font-bold p-3 w-full rounded-b-lg hover:text-neutral-800 hover:bg-neutral-400 transition-all duration-300">Click to see the Polls on {item.name}</button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
