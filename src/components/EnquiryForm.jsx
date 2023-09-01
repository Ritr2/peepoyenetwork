'use client'
import React, { Fragment, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { apiUrl } from '@/utils/url'

export default function EnquiryForm({ data, closePopup = false }) {
  const questionList = Object.keys(data.questions)
  const [answerList, setAnswerList] = React.useState({})
  const [nextQuestion, setNextQuestion] = React.useState({ [questionList[0]]: true })
  const router = useRouter();
  const [transferLink, setTransferLink] = React.useState('')
  const [transferMessage, setTransferMessage] = React.useState(false)
  const [count, setCount] = React.useState(5)

  useEffect(() => {
    if (count <= 0) {
      closePopup ? closePopup(false) : null
      router.push(transferLink.link)
      return;
    }
    if(transferMessage){
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [count, transferLink.link, router, transferMessage])

  const handleSelector = (inputData) => {
    if (inputData.option) {
      setAnswerList({ ...answerList, [inputData.question]: inputData.option.value })
      inputData.option.transferLink ? setTransferLink({ name:inputData.option.transferLink.name, link: inputData.option.transferLink.link, text: inputData.option.transferLink.text, send:inputData.option.transferLink.send }) : null
      if (inputData.option.next) {
        setNextQuestion({ [inputData.option.next]: true })
      } else {
        setNextQuestion({ [inputData.question]: false })
        setTransferMessage(true)
      }
    }
    if (inputData.submit) {
      inputData.submit.preventDefault();
      setNextQuestion({ [inputData.question]: false })
      fetch(`${apiUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            first_name: answerList.first_name,
            email: answerList.email,
            product_name: transferLink.name,
          }
        )
      })
      setTransferMessage(true)
    }
  }

  return (
    <div className='flex flex-col w-full items-center gap-5 max-h-full'>
      {
        transferMessage ? (<div className='flex flex-col w-full justify-center items-center gap-5 bg-neutral-200 p-5 rounded-md'>
          <h2 className='text-3xl font-bold text-center text-neutral-800'>Thank you for your response</h2>
          {
            transferLink.text && (
              <h3 className='text-2xl text-center text-neutral-800'>{transferLink.text}</h3>
            )
          }
          <p className='text-xl text-neutral-800'>Wait!! You will be redirect in {count} second</p>
        </div>) :
          (<>
            <h1 className='animate-text bg-gradient-to-r h-fit from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl md:text-3xl font-black text-center'>{data.title}</h1>
              <AnimatePresence>
                {questionList.map((question, index) => (
                  <Fragment key={index}>
                    {
                      nextQuestion[question] && (
                        <motion.div
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -100 }}
                          transition={{ duration: 0.5 }}
                          className='flex flex-col flex-1 justify-center items-center gap-5 bg-neutral-400 p-5 py-6 rounded-xl border-l-4 border-blue-500 overflow-hidden'
                        >
                          <h2 className='text-base md:text-2xl text-center font-medium text-neutral-900'>{data.questions[question].question}</h2>
                          {data.questions[question].options && (
                            <div className='flex flex-col h-full flex-1 w-full gap-4 overflow-y-auto overflow-x-hidden'>
                              {Object.keys(data.questions[question].options).map((option, index2) => (
                                <button key={index2} className='text-base md:text-lg bg-neutral-100 font-normal text-neutral-800 px-5 py-2 rounded-md hover:rounded-none hover:bg-neutral-500 hover:text-neutral-100 border-t-4 border-blue-500' onClick={() => handleSelector({ question: question, option: data.questions[question].options[option] })}>
                                  {data.questions[question].options[option].value}
                                </button>
                              ))}
                            </div>
                          )}
                          {data.questions[question].inputs && (
                            <form className='flex flex-col w-full justify-center gap-5' onSubmit={(e) => handleSelector({ question: question, submit: e })}>
                              {Object.keys(data.questions[question].inputs).map((input, index2) => (
                                <input key={index2} className='bg-neutral-400 px-5 py-2 rounded-md placeholder:text-black border-t-4 border-blue-500' type={data.questions[question].inputs[input].type} placeholder={data.questions[question].inputs[input].placeholder} required={data.questions[question].inputs[input].required} name={data.questions[question].inputs[input].name} onChange={(e) => setAnswerList({ ...answerList, [e.target.name]: e.target.value })} />
                              )
                              )}
                              <button type='submit' className='bg-neutral-400 px-5 py-2 rounded-md hover:scale-105'>
                                Submit
                              </button>
                            </form>
                          )}
                        </motion.div>
                      )
                    }
                  </Fragment>
                ))}
              </AnimatePresence>
          </>)
      }
    </div>
  )
}
