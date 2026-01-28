import AssetCard from '@/components/Dashboard/Asset/AssetCard'
import Charts from '@/components/Dashboard/Asset/Charts'
import TradeHistory from '@/components/Dashboard/Asset/TradeHistory'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-8'>
      <AssetCard />
      <Charts />
      <TradeHistory />
    </div>
  )
}

export default page