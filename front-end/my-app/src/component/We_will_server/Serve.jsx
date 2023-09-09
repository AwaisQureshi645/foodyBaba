import React from 'react';
import HealthyMeals from '../../assets/image/Healthy Meals.jpg'
import './serve_style.css';
import slient from '../../assets/image/slient.jpg'
import HealthyLifestyle from '../../assets/image/Healthy Lifestyle.jpg'
export default function Serve() {
  return (
    <>
      <div className="serve_container">
        <p className="text-center font-medium text-orange-400">What We Serve</p>
        <h1 className="text-center font-bold text-4xl" style={{fontFamily:"-moz-initial"}} > Our Best Programs</h1>
        <div class="flex flex-wrap justify-center md:justify-start" >
          <div class="  serve_box1 sm:w-full md:w-1/2 lg:w-1/3">
            <img src={slient} alt="slient image " className="w-50 " />
            <h1 className='text-center font-bold text-4xl  ' style={{fontFamily:"initial"}}>Healthy Recipes</h1>
            <p className='p-4'>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Commodi, minus sint id
              fugiat sunt magnam quo non nulla. Architecto, aspernatur.</p>
          </div>
          <div class="  serve_box1">
            <img src={HealthyLifestyle} alt="slient image " className="w-50" />
            <h1 className='text-center font-bold text-4xl  ' style={{fontFamily:"initial"}}> Healthy Lifestyle</h1>
            <p className='p-4'>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Commodi, minus sint id
              fugiat sunt magnam quo non nulla. Architecto, aspernatur.</p>
          </div>
          <div class="  serve_box1">
            <img src={HealthyMeals} alt="slient image " className="w-50" />
            <h1 className='text-center font-bold text-4xl   ' style={{fontFamily:"initial"}}> Healthy Meals</h1>
            <p className='p-4'>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Commodi, minus sint id
              fugiat sunt magnam quo non nulla. Architecto, aspernatur.</p>
          </div>
        </div>




      </div>

    </>
  )
}
