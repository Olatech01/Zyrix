import Image from 'next/image'
import React from 'react'

const Power = ({image, header, text}) => {
  return (
    <div>
        <Image src={image} alt="Power Image" width={326} height={344} />
        <h3 className='text-[24px] font-semibold text-[#F5F5F5] mt-4'>
            {header}
        </h3>
        <p className='text-[#BDBDBD] font-normal text-[18px] mt-2 w-[280px]'>
            {text}
        </p>
    </div>
  )
}

export default Power