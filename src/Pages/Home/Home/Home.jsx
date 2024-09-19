import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import SectionBanner from '../../Shared/SectionBanner/SectionBanner'
import PopularMenu from '../PopularMenu/PopularMenu'
import ChefRecommend from '../ChefRecommend/ChefRecommend'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <SectionBanner></SectionBanner>
      <PopularMenu></PopularMenu>
      <ChefRecommend></ChefRecommend>
    </div>
  )
}

export default Home
