'use client'
import { usePathname } from "next/navigation"
import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import EnquiryBot from "@/components/Enquiry/EnquiryBot";

export const LayoutProvider = ({ children }) => {
  const pathname = usePathname();
  const LandingPage = [
    "/guide-brb",
    "/donot",
    '/guide-x',
    '/foundation-accelerator-pre-book-ind',
  ]
  return (
      <>
          {LandingPage.includes(pathname) ? null : <NavigationBar />}
          {children}
          {LandingPage.includes(pathname) ? null : <Footer />}
          {LandingPage.includes(pathname) ? null : <EnquiryBot />}
      </>
  )
};
