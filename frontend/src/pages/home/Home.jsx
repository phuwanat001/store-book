import React from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import Recommened from './Recommened'
import News from './News'

function Home() {
  return (
    <div>
      <Banner/>
      <TopSeller/>
      <Recommened/>
      <News/>

    </div>
  )
}

export default Home
