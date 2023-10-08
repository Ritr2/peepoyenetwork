'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Notification from '../Notification'
import ls from 'localstorage-slim'
import { apiUrl } from '@/utils/url'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Login({ type = 'login', notificationData = false }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = React.useState(ls.get('email') || '')
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    const authStatus = ls.get('authStatus') || false
    if (authStatus) {
      ls.get('poll')? router.push(`${ls.get('poll')}?nm=You are already logged in&nc=green`): router.push(`/opinion-polls?nm=You are already logged in&nc=green`)
    }
  }, [])


  const handleSubmit = (e) => {
    ls.set('email', email)
    e.preventDefault()
    setLoading(true)
    type === 'login' ? login() : signup()
  }

  const login = async () => {
    const res = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    setLoading(false)
    const data = await res.json()
    const tempColor = data.auth ? 'green' : 'red'
    data.auth ? ls.set('authStatus', data.auth) : null
    data.email ? data.auth ? ls.get('poll')? router.push(`${ls.get('poll')}?nm=${data.result}&nc=green`): router.push(`/opinion-polls?nm=${data.result}&nc=green`) : router.push(`/opinion-polls/login?nm=${data.result}&nc=red`) : router.push(`/opinion-polls/signup?nm=${data.result}&nc=${tempColor}`)
    data.auth ? null : setLoading(false)
  }

  const signup = async () => {
    const res = await fetch(`${apiUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    setLoading(false)
    const data = await res.json()
    data.auth ? ls.set('authStatus', data.auth) : null
    data.auth ? ls.get('poll')? router.push(`${ls.get('poll')}?nm=${data.result}&nc=green`): router.push(`/opinion-polls?nm=${data.result}&nc=green`) : router.push(`/opinion-polls/login?nm=${data.result}&nc=green`)
    data.auth ? null : setLoading(false)
  }

  return (
    <section className="px-32 py-24">
      <div
        className="flex flex-col items-center justify-center h-full">
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form className="bg-neutral-100 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 flex flex-col gap-5" onSubmit={handleSubmit}>
            <img src="https://i.ibb.co/T126158/s2.png" alt="logo" className="w-32 h-32 self-center object-contain opacity-80 rounded-full bg-neutral-300" />
            {
              loading ? <div className="loader self-center" /> :
                <>
                  <div className="flex flex-row self-center">
                    <Link href='/opinion-polls/login' className={`rounded-l-xl ${type === 'login' ? 'bg-neutral-300' : 'bg-white'} px-5 border-r-2 border-black`} >
                      <h2 className={`text-4xl px-2 font-black text-center text-transparent bg-clip-text animate-text bg-gradient-to-r from-green-400 to-blue-500 uppercase`}>Login</h2>
                    </Link>
                    <Link href='/opinion-polls/signup' className={`rounded-r-xl ${type === 'signup' ? 'bg-neutral-300' : 'bg-white'} px-5`} >
                      <h2 className={`text-4xl px-2 font-black text-center text-transparent bg-clip-text animate-text bg-gradient-to-r from-green-400 to-blue-500 uppercase`}>Signup</h2>
                    </Link>
                  </div>
                  <div className="relative mb-6">
                    <h2 className="text-2xl text-neutral-600">Email</h2>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded border-2 border-gray-600 color bg-transparent px-3 py-1 leading-[2.15]"
                      placeholder="Email address" required />
                  </div>
                  <div className="flex flex-col">
                    <button className=" text-xl bg-gradient-to-r animate-text from-green-400 to-blue-500 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">
                      {type === 'login' ? 'Login' : 'Signup'}
                    </button>
                  </div>
                </>
            }
          </form>
        </div>
      </div>
    </section>
  )
}
