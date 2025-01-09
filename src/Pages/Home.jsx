import React, { useEffect } from 'react'
import Hero from '../Components/Home/hero'
import '../Styles/Style.css'
import Process from '../Components/Home/process'
import Services from '../Components/Home/Services'
import Mart from '../Components/Home/mart'
import Blog from '../Components/Home/blog'
import Newsletter from '../Components/Home/newsletter'


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    {/* <Projectss/> */}
      <Hero />
      <Services/>
      <Mart/>
      <Process/>
      <Blog/>
      <Newsletter />

    </div>
  )
}

export default Home
