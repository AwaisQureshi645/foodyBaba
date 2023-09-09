import React from 'react'
import Hero from '../component/HeroSection/Hero'
import About from '../component/About_us/About'
import Main_choies from '../component/Why_choice_us/Main_choies'
import Serve from '../component/We_will_server/Serve'
import Special from '../component/Special Dish/Special'
import Subscribe from '../component/Subscription/Subscribe'
import Footer from '../component/Footer/Footer'

export default function Home() {
  return (
 <>
 
<Hero/>
<About/>
 <Main_choies/>
 <Serve/>
 <Special/>
 <Subscribe/>
 <Footer/>
 </>
  )
}
