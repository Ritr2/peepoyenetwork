'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


export default function BlogsList({data}) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };


  return (
    <div className="flex flex-col w-full gap-10">
      {
            currentItems.map((blog, index) => (
              <div key={index} className='flex flex-col md:flex-row w-full gap-8'>
                <div className='flex flex-col gap-2 w-full md:w-7/12 order-2 md:order-1'>
                  <h1 className='text-xl md:text-2xl font-bold text-neutral-700'>{blog.title}</h1>
                  <p className='text-base md:text-lg text-neutral-600 line-clamp-3'>{blog.summary}</p>
                  <Link href={`/social-awareness/blogs/${blog.slug}`} className='text-base md:text-lg text-primary-500 font-semibold'>Read More</Link>
                </div>
                <div className='flex flex-col w-full flex-1 order-1 md:order-2'>
                  <Link href={`/social-awareness/blogs/${blog.slug}`} className='hover:scale-105 '>
                    <img src={blog.image.src} alt={blog.image.alt} className='w-full h-full rounded-xl' />
                  </Link>
                </div>
              </div>
            ))
          }
          <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'flex flex-row w-full justify-center items-center gap-2'}
          pageClassName={'flex flex-row w-8 h-8 rounded-full justify-center items-center bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300'}
          pageLinkClassName={'flex flex-row w-full h-full justify-center items-center'}
          activeClassName={'bg-neutral-300'}
          previousClassName={'flex flex-row w-8 h-8 rounded-full justify-center items-center bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300'}
          nextClassName={'flex flex-row w-8 h-8 rounded-full justify-center items-center bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300'}
          previousLinkClassName={'flex flex-row w-full h-full justify-center items-center'}
          nextLinkClassName={'flex flex-row w-full h-full justify-center items-center'}
          disabledClassName={'opacity-50 cursor-not-allowed'}
        />
    </div>
  )
}
