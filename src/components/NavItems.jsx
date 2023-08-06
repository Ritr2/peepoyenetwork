import React from 'react'
import Link from 'next/link'
import DropDown from './DropDown'

export default function NavItems() {
  return (
    <>
      <Link href="/about" className="font-medium">ABOUT</Link>
      <Link href="/social-awareness" className="font-medium">SOCIAL AWARENESS</Link>
      <DropDown name="LEARN" links={{ MENTORING: "mentoring", COURSES: "courses", COMMUNITY: "community" }} />
      <Link href="/services" className="font-medium">SERVICES</Link>
      <Link href="/collaborate" className="font-medium">COLLABORATE</Link>
      <Link href="/resources" className="font-medium">RESOURCES</Link>
    </>
  )
}
