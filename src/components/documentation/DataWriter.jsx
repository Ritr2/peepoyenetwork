import React from 'react'
import parse from 'html-react-parser'

export default function DataWriter({ data }) {
  return (
    <div className="flex flex-col gap-3 md:gap-7 w-full">
      {
        data.map((item, index) => (
          <div key={index} className="flex flex-col w-full gap-2">
            {
              item.h1 && (
                <h2 className="text-base md:text-lg font-bold text-left text-neutral-700">{parse(item.h1)}</h2>
              )
            }
            {
              item.p && (
                <p className="text-xs md:text-sm font-medium text-left text-neutral-700">{parse(item.p)}</p>
              )
            }
            <div>
              {
                item.bulletPoints && (
                  <>
                    <ul className="list-disc list-inside">
                      {
                        item.bulletPoints.map((bullet, index2) => (
                          <li key={index2} className="text-xs md:text-sm font-normal text-left text-neutral-700">{parse(bullet)}</li>
                        ))
                      }
                    </ul>
                  </>
                )
              }
            </div>
            {
              item.subsections &&
              (
                <>
                  {
                    item.subsections.map((sub, index2) => (
                      <div key={index2} className="flex flex-col gap-1 w-full">
                        {
                          sub.h1 && (
                            <h2 className="text-sm md:text-base font-bold text-left text-neutral-600">{index2 + 1}. {parse(sub.h1)}</h2>
                          )
                        }
                        {
                          sub.p && (
                            <p className="text-xs md:text-sm font-medium text-left text-neutral-700">{parse(sub.p)}</p>
                          )
                        }
                        <div>
                          {
                            sub.bulletPoints && (
                              <>
                                <ul className="list-disc list-inside">
                                  {
                                    sub.bulletPoints.map((bullet, index3) => (
                                      <li key={index3} className="text-xs md:text-sm font-normal text-left text-neutral-700">{parse(bullet)}</li>
                                    ))
                                  }
                                </ul>
                              </>
                            )
                          }
                        </div>
                      </div>
                    )
                    )
                  }
                </>
              )
            }
          </div>
        )
        )
      }
    </div>
  )
}
