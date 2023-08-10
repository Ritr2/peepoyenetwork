'use client'
import { usePathname } from "next/navigation"
import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'

export const LayoutProvider = ({ children }) => {
  const pathname = usePathname();
  const LandingPage = [
    "/guide-brb",
    "/donot",
  ]
  return (
      <>
          {LandingPage.includes(pathname) ? null : <NavigationBar />}
          {children}
          {LandingPage.includes(pathname) ? null : <Footer />}
      </>
  )
};
