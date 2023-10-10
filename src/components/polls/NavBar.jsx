'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsSearch } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import ls from 'localstorage-slim'
import { useRouter, useSearchParams } from 'next/navigation'
import Notification from './Notification'

export default function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [search, setSearch] = React.useState(searchParams.get('q') || '')
  const [loginStatus, setLoginStatus] = React.useState(false)
  const [showPopup, setShowPopup] = React.useState(false)
  const [notificationStatus, setNotificationStatus] = React.useState(false)
  const [notification, setNotification] = React.useState(null)

  useEffect(() => {
    const authStatus = ls.get('authStatus') || false
    setLoginStatus(authStatus)
    setShowPopup(false)
  }, [pathname])

  useEffect(() => {
    if (searchParams.get('nm')) {
      setNotification({ msg: searchParams.get('nm'), color: searchParams.get('nc') || 'red' })
      setNotificationStatus(true)
    }
  }, [searchParams, pathname])

  return (
    <div className="fixed flex w-full box-border flex-col md:flex-row bg-stone-800 justify-between px-2 md:px-6 h-24 md:h-20 gap-y-2 z-40">
      <div className="flex flex-row items-center justify-center gap-2">
        <Link href="/bekhauf-awaaz" className='text-white text-2xl md:text-left font-bold md:text-3xl'>
          <h1>Peepoye</h1>
        </Link>
        <h1 className='hidden md:block text-white text-2xl md:text-left font-bold md:text-3xl'>|</h1>
        <h2 className="hidden text-2xl md:block text-gray-100 mt-1"> Bekhauf Opinion Platform</h2>
      </div>
      <div className="flex flex-row gap-4 flex-1 items-center box-border justify-center md:justify-end">
        <div className="flex flex-col gap-1 relative flex-1 max-w-lg">
          <input type="text" placeholder="Search The Poll you want to vote for" className="flex-1 box-border bg-stone-950 text-white border-2 placeholder:text-gray-300 border-white rounded-full px-3 py-2" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && router.push(`/bekhauf-awaaz/search?q=${search}`)} />
          <div className='flex flex-col justify-center box-border items-center m-auto bg-gray-500 h-8 w-8 absolute top-0 bottom-0 right-1 rounded-full p-2 hover:scale-110 active:scale-90'><BsSearch className="text-white text-2xl w-full h-full " onClick={() => router.push(`/bekhauf-awaaz/search?q=${search}`)} /></div>
        </div>
        <div className="relative flex flex-col gap-1 w-10 h-10">
          <CgProfile className={`w-full bg-white rounded-full h-full cursor-pointer hover:scale-110`} onClick={() => setShowPopup(!showPopup)} />
          <div className={`absolute top-0 right-0 w-3 h-3 ${loginStatus ? 'bg-green-500' : 'bg-red-500'} rounded-full`} />
          {
            showPopup &&
            <div className="absolute top-12 right-0 bg-stone-950 rounded-lg shadow-lg p-2">
              {
                loginStatus ?
                  <button
                    className="text-white"
                    onClick={() => {
                      ls.remove('authStatus')
                      setLoginStatus(false)
                      setShowPopup(false)
                    }}>Logout</button> :
                  <>
                    <Link href="/bekhauf-awaaz/login">
                      <h3 className="text-white">Login</h3>
                    </Link>
                    <Link href="/bekhauf-awaaz/signup">
                      <h3 className="text-white">Signup</h3>
                    </Link>
                  </>
              }
            </div>
          }
          {
            notificationStatus &&
            <Notification
              notification={notification}
              setNotificationStatus={setNotificationStatus}
            />
          }
        </div>
      </div>
    </div>
  );
}
