'use client'
import React from 'react'
import Link from 'next/link'
import DropDown from './DropDown'
import NavBar from './polls/NavBar'
import { usePathname } from 'next/navigation'

export default function NavItems({setIsOpen = false}) {
  const [navVisible, setNavVisible] = React.useState(false)
  const path = usePathname()
  React.useEffect(() => {
    if (path.includes('/bekhauf-awaaz')) {
      setNavVisible(true)
    }
    else {
      setNavVisible(false)
    }
  }, [path])

  return (
    <>
      <Link href="/about" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>ABOUT</Link>
      <DropDown name="SOCIAL AWARENESS" links={{ "HOME": "/social-awareness", "BEKHAUF OPINION": "/bekhauf-awaaz", "BEKHAUF BLOG": "/social-awareness/blogs" }} setIsOpen2={setIsOpen} />
      <DropDown name="LEARNING HUB" links={{ "SUCCESS MENTORING": "/mentoring", COURSES: "/courses", "SUCCESS BLOG":'/blogs', COMMUNITY: "https://www.skool.com/youtubeneur", "RESOURCES": "/resources" }} setIsOpen2={setIsOpen} />
      <Link href="https://akassh.co/dfy" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>SERVICES</Link>
      <Link href="/collaborate-with-us" className="font-medium px-2" onClick={() => setIsOpen ? setIsOpen(false) : null}>COLLABORATE</Link>
      {
        navVisible &&
        <NavBar />
      }
    </>
  )
}
