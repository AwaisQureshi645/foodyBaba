import React from 'react'
import './HeroStyle.css'
import hero_image from '../../assets/image/hero_image.png';
import tomatoleave from '../../assets/image/tomat-leaf.png'
export default function Hero() {
  return (
    <>

      <div className="heroSection">
        <div className="hero_container flex flex-wrap">
          <div className="left_heroSection sm:w-full">

            <h3 className='profession_heading text-3xl'>
              Professional Nutritionist
            </h3>
            <h1 className='font-bold'><span>Make Healthy Life</span> With Naturfood</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus quas distinctio quibusdam alias aut cupiditate. Aperiam, enim optio eveniet deleniti suscipit labore, fugit quisquam accusantium, tempore quod nesciunt vitae?</p>
            <button type='button' className='get_started_btn' > Get Started</button>

          </div>
          <div className="rightHeroSection sm:w-96">

            <div className="right_container">
              <img src={hero_image} alt="" />
              <img id='tomatoleave' src={tomatoleave} alt="" />
            </div>

          </div>
        </div>
      </div>
      <p></p>
    </>
  )
}
