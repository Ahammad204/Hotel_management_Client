import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import SectionBanner from '../../Shared/SectionBanner/SectionBanner'
import PopularMenu from '../PopularMenu/PopularMenu'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <SectionBanner></SectionBanner>
      <PopularMenu></PopularMenu>
    </div>
  )
}

export default Home
