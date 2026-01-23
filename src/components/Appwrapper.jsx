"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Navbar from '@/app/Navbar'

const Appwrapper = ({ children }) => {
  const pathname = usePathname()
  const hideNav = pathname.startsWith('/auth') || pathname.startsWith("/dashboard")
  return (
    <div>
      {!hideNav && <Navbar />}
      {children}
    </div>
  )
}

export default Appwrapper