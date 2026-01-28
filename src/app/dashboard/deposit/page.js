import Deposit from '@/components/Dashboard/Deposit/Deposit'
import Hero from '@/components/Dashboard/Deposit/Hero'
import Transaction from '@/components/Dashboard/Deposit/Transaction'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Hero />
      <Deposit />
      <Transaction />
    </div>
  )
}

export default page