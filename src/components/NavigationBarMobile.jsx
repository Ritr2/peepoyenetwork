'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import NavItems from './NavItems';

export default function NavigationBarMobile() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-col gap-1 cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
        <div className={`w-8 h-1 bg-black rounded-full ${isOpen ? 'transform rotate-45 translate-y-2' : ''} transition-all duration-500`} />
        <div className={`w-8 h-1 bg-black rounded-full ${isOpen ? 'opacity-0' : ''} transition-all duration-300`} />
        <div className={`w-8 h-1 bg-black rounded-full ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''} transition-all duration-500`} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5 items-center justify-center lg:hidden fixed top-0 left-0 w-full h-screen  z-30 backdrop-blur-md">
              <NavItems />
          </ motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
