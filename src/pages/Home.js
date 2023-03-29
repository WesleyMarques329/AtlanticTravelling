import React from 'react'
import Navbar from '../components/Navbar'
import PopularDestinations from '../components/PopularDestinations'
import SearchContainer from '../components/SearchContainer'
import Slider from '../components/Slider'
import HotelSection from '../components/HotelSection'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <SearchContainer />
        <PopularDestinations />
        <HotelSection />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home