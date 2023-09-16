'use client'
import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import makePayment from '@/utils/payments/makePayment'
import { IoClose } from 'react-icons/io5'
import ls from 'localstorage-slim';

export default function PaymentForm({ setDataFormVisible, currentPlan, successUrl }) {
    const [name, setName] = React.useState(ls.get('name') ? ls.get('name') : '')
    const [email, setEmail] = React.useState(ls.get('email') ? ls.get('email') : '')
    const [phone, setPhone] = React.useState(ls.get('phone') ? ls.get('phone') : '')
    const [loading, setLoading] = React.useState(false)
    const [showForm, setShowForm] = React.useState(true)

    const variants = {
        hidden: {
            opacity: 0,
            y: '-100%'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                duration: 1
            }
        }
    }

    const formHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        setShowForm(false)
        const details = {
            name,
            email,
            phone,
        }
        ls.set('name', name)
        ls.set('email', email)
        ls.set('phone', phone)
        if (currentPlan === 'lifetime') {
            makePayment(details, setLoading, setDataFormVisible, successUrl, "accelerator")
        }
    }

    return (
        <>
            {
                loading && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col gap-6 justify-center items-center z-50 backdrop-filter backdrop-blur-sm">
                        <h2 className="text-xl md:text-3xl font-bold text-center text-white">Please wait while we redirect you to the payment Gateway...</h2>
                        <div className="loader" />
                    </div>
                )
            }
            <AnimatePresence>
                {
                    showForm &&
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex flex-col items-center justify-center backdrop-filter backdrop-blur-sm overflow-hidden'>
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className='relative flex flex-col items-center justify-center gap-5 max-w-3xl bg-white p-6 md:px-14 md:py-10 rounded-lg shadow-lg'>
                            <IoClose className='absolute top-1 right-1 md:top-2 md:right-2 text-3xl text-neutral-700 cursor-pointer hover:text-red-600' onClick={() => setDataFormVisible(false)} />
                            <div className='flex flex-col items-center justify-center gap-5'>
                                <h1 className='text-xl md:text-3xl font-bold text-center text-neutral-700'>Fill the details for the payment</h1>
                                <p className='text-base md:text-lg font-normal text-center text-neutral-700'>Take the first step towards your success...</p>
                                <form className="flex flex-col w-full gap-5" onSubmit={formHandler}>
                                    <input type="text" placeholder="Name" className="flex-1 rounded-lg p-2 text-base md:text-xl font-normal text-center md:text-left text-neutral-700 bg-neutral-100 border-2 border-neutral-200 border-dashed focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent" value={name} onChange={(e) => setName(e.target.value)} required />
                                    <input type="email" placeholder="Email" className="flex-1 rounded-lg p-2 text-base md:text-xl font-normal text-center md:text-left text-neutral-700 bg-neutral-100 border-2 border-neutral-200 border-dashed focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <input type="tel" placeholder="Phone" className="flex-1 rounded-lg p-2 text-base md:text-xl font-normal text-center md:text-left text-neutral-700 bg-neutral-100 border-2 border-neutral-200 border-dashed focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                    <button type="submit" className={`flex rounded-lg p-2 text-white bg-red-500 text-base md:text-xl font-bold flex-row items-center justify-center gap-2 w-full  hover:shadow-lg hover:drop-shadow-lg hover:scale-105 active:shadow-none active:drop-shadow-none active:scale-95`}>Make Payment</button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>

        </>
    )
}
