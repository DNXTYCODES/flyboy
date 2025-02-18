import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import FeaturedSection from '../components/Featured'
import FlyboyBanner from '../components/FlyboyBanner'

const Home = () => {
  return (
    <div className='bg-[#0B0B0B]'>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      {/* <FeaturedSection /> */}
      <FlyboyBanner />
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
