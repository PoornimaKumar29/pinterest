// HOME PAGE 
import NewsFeed from '@/components/home/NewsFeed'
import Sidebar from '@/components/shared/header'
import React from 'react'

const Home = () => {
  return (
    <div>

      {/* Wrapper - Flex Container (Sidebar & Main Content) */}
      <div className=''>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div>
          <NewsFeed />
        </div>
      </div>

    </div>
  )
}

export default Home