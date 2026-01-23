import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col'>
        <Header />
        <div className='flex pt-24'>
          <Sidebar />
          <main className='flex-1 ml-[270px] h-[calc(100vh-96px)] overflow-y-auto min-w-0'>
                {children}
            </main>
        </div>
    </div>
  )
}

export default Layout