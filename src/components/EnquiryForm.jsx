'use client'
import React, { Fragment, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { apiUrl } from '@/utils/url'

export default function EnquiryForm({ data }) {
  const questionList = Object.keys(data.questions)
  const [answerList, setAnswerList] = React.useState({})
  const [nextQuestion, setNextQuestion] = React.useState({ [questionList[0]]: true })
  const router = useRouter();
  const [transferLink, setTransferLink] = React.useState('')
  const [transferMessage, setTransferMessage] = React.useState(false)
  const [count, setCount] = React.useState(5)

  useEffect(() => {
    if (count <= 0) {
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
    <div className='flex flex-col w-full justify-center items-center gap-5'>
      {
        transferMessage ? (<div className='flex flex-col w-full justify-center items-center gap-5 bg-neutral-100 p-5 rounded-md'>
          <h2 className='text-3xl font-bold text-center text-green-700'>Thank you for your response</h2>
          <h3 className='text-2xl text-center text-green-800'>{transferLink.text}</h3>
          <p className='text-xl text-green-900'>Wait!! You will be redirect to in {count} second</p>
        </div>) :
          (<>
            <h1 className='text-3xl font-bold text-center'>Let us Make your experience for this website customize</h1>
            <div>
              <AnimatePresence>
                {questionList.map((question, index) => (
                  <Fragment key={index}>
                    {
                      nextQuestion[question] && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                          className='flex flex-col w-full justify-center items-center gap-5 bg-neutral-100 p-5 rounded-md'
                        >
                          <h2 className='text-2xl text-center'>{data.questions[question].question}</h2>
                          {data.questions[question].options && (
                            <div className='flex flex-col w-full justify-center gap-5'>
                              {Object.keys(data.questions[question].options).map((option, index2) => (
                                <button key={index2} className='bg-neutral-400 px-5 py-2 rounded-md hover:scale-105 hover:bg-neutral-600' onClick={() => handleSelector({ question: question, option: data.questions[question].options[option] })}>
                                  {data.questions[question].options[option].value}
                                </button>
                              ))}
                            </div>
                          )}
                          {data.questions[question].inputs && (
                            <form className='flex flex-col w-full justify-center gap-5' onSubmit={(e) => handleSelector({ question: question, submit: e })}>
                              {Object.keys(data.questions[question].inputs).map((input, index2) => (
                                <input key={index2} className='bg-neutral-400 px-5 py-2 rounded-md placeholder:text-black' type={data.questions[question].inputs[input].type} placeholder={data.questions[question].inputs[input].placeholder} required={data.questions[question].inputs[input].required} name={data.questions[question].inputs[input].name} onChange={(e) => setAnswerList({ ...answerList, [e.target.name]: e.target.value })} />
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
            </div>
          </>)
      }
    </div>
  )
}
