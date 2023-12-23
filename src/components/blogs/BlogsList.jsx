'use client'
import Link from 'next/link'
import React, { Fragment } from 'react';
import url from '@/utils/url';
import parse from 'html-react-parser';


export default function BlogsList({ data, totalPage, page, search, afterurl }) {
  return (
    <section className="flex flex-col w-full bg-white items-center justify-center gap-10">
      <div className="flex flex-col flex-wrap md:flex-row flex-1 gap-5 md:gap-6 justify-center">
        {
          data.map((blog, index) => (
            <div key={index} className="flex flex-col w-full md:w-3/12 gap-3 rounded-lg items-center justify-between shadow-lg drop-shadow-lg bg-stone-100">
              <div className="flex flex-col w-full justify-center items-center">
                <img src={blog.image.src} alt={blog.image.alt} className="w-full rounded-t-lg h-auto" draggable={false} />
              </div>
              <h1 className="text-base md:text-base text-center text-neutral-700 px-3">{blog.title}</h1>
              <Link href={`/blogs/${blog.slug}`} className="flex rounded-b-lg p-2 text-base md:text-lg text-white flex-row items-center justify-center gap-2 w-full bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800">
                Read More
              </Link>
            </div>
          ))
        }
      </div>
      {
        totalPage > 1 && (
          <div className="flex flex-row items-center justify-center gap-2">
            {
              (page > 1) && (
                <Link href={`${url}/${afterurl}?page=${page - 1}${search ? `&search=${search}` : ''}`} className='flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md drop-shadow-md bg-neutral-100 text-neutral-800 hover:bg-neutral-200'>
                  <span className="text-sm font-medium">Prev</span>
                </Link>
              )
            }
            {
              new Array(totalPage).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {
                    (index < 2 || index > totalPage - 3 || index === page - 1) && (
                      <Link href={`${url}/${afterurl}?page=${index + 1}${search ? `&search=${search}` : ''}`} className={`flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md drop-shadow-md ${index === page - 1 ? 'bg-primary-100 text-primary-800' : 'bg-neutral-100 text-neutral-800'} hover:bg-neutral-200`}>
                        <span className="text-sm font-medium">{index + 1}</span>
                      </Link>
                    )

                  }
                  {
                    (index === 2 && index !== page - 1 && totalPage > 4) && (
                      <span className="text-sm font-medium">...</span>
                    )
                  }
                  {
                    (index === totalPage - 3 && index !== page - 1 && totalPage > 4) && (
                      <span className="text-sm font-medium">...</span>
                    )
                  }
                </Fragment>
              ))
            }
            {
              (page < totalPage) && (
                <Link href={`${url}/${afterurl}?page=${page + 1}${search ? `&search=${search}` : ''}`} className='flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md drop-shadow-md bg-neutral-100 text-neutral-800 hover:bg-neutral-200'>
                  <span className="text-sm font-medium">Next</span>
                </Link>
              )
            }
          </div>
        )
      }
    </section>
  )
}





// 'use client'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';


// export default function BlogsList({data}) {
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage = 9;

//   const endOffset = itemOffset + itemsPerPage;

//   const currentItems = data.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(data.length / itemsPerPage);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % data.length;
//     setItemOffset(newOffset);
//     window.scrollTo(0, 0);
//   };


//   return (
//     <section className="flex flex-col w-full bg-white items-center justify-center gap-10">
//       <div className="flex flex-col flex-wrap md:flex-row flex-1 gap-5 md:gap-6 justify-center">
//         {
//           currentItems.map((blog, index2) => (
//             <div key={index2} className="flex flex-col w-full md:w-3/12 gap-3 rounded-lg items-center justify-between shadow-lg drop-shadow-lg bg-stone-100">
//               <div className="flex flex-col w-full justify-center items-center">
//                 <img src={blog.image.src} alt={blog.image.alt} className="w-full rounded-t-lg h-auto" draggable={false} />
//               </div>
//               <h1 className="text-base md:text-base text-center text-neutral-700 px-3">{blog.title}</h1>
//               <Link href={`/blogs/${blog.slug}`} className="flex rounded-b-lg p-2 text-base md:text-lg text-white flex-row items-center justify-center gap-2 w-full bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800">
//                 Read More
//               </Link>
//             </div>
//           ))
//         }
//       </div>
//       <div className="flex flex-row w-full justify-center items-center">
//         <ReactPaginate
//           previousLabel={'<'}
//           nextLabel={'>'}
//           breakLabel={'...'}
//           breakClassName={'break-me'}
//           pageCount={pageCount}
//           marginPagesDisplayed={1}
//           pageRangeDisplayed={3}
//           onPageChange={handlePageClick}
//           containerClassName={'flex flex-row w-full justify-center items-center gap-2'}
//           pageClassName={'flex flex-row w-8 h-8 rounded-full justify-center items-center bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300'}
//           pageLinkClassName={'flex flex-row w-full h-full justify-center items-center'}
//           activeClassName={'bg-neutral-300'}
//           previousClassName={'flex flex-row w-8 h-8 rounded-full justify-center items-center bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300'}
//           nextClassName={'flex flex-row w-8 h-8 rounded-full justify-center items-center bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300'}
//           previousLinkClassName={'flex flex-row w-full h-full justify-center items-center'}
//           nextLinkClassName={'flex flex-row w-full h-full justify-center items-center'}
//           disabledClassName={'opacity-50 cursor-not-allowed'}
//         />
//       </div>
//     </section>
//   )
// }
