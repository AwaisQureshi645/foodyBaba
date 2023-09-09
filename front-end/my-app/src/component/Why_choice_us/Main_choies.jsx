import React from 'react'
import spon from '../../assets/image/spon.png'
import './Main_choies.css'
import young_main from '../../assets/image/yound_man.png';
import fresh_icon from '../../assets/image/fresh_icon.png';
import delivery from '../../assets/image/delivery.png'
export default function Main_choies() {
  return (
    <>
      <div className="Why_choose_us">
        <div className="choose_container flex flex-wrap">
          <div className="left_about_us_content  sm:w-full md:w-1/2 mt-20 p-12 ">

            <h3 className="font-lg text-yellow-700 overflow-y-hidden font-normal">Why Choose Us</h3>
            <h1 className="text-4xl font-bold ">Our Value To Help You</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione nam modi ut
              laboriosam nesciunt doloribus dolores eligendi tenetur. Expedita,
              harum optio quae eligendi corrupti adipisci. Incidunt, aliquam voluptates? Iure.</p>

            <div className="box_col1 flex bg-white  shadow-xl rounded-xl my-6 p-2 md:h-20 lg:h-16">
              <img src={spon} alt="" className="w-14 h-54" />
              <h2 className="pt-3 ml-2 ">
                All menu recipe made by specialists</h2>
            </div>
            {/* second box  */}
            <div className="box_col1 flex bg-white   rounded-xl my-6 p-2 md:h-20 lg:h-16">
              <img src={fresh_icon } alt="" className="w-14 h-54" />
              <h2 className="pt-3 ml-2">

                Fresh and locally grown products</h2>
            </div>
            {/* third box */}
            <div className="box_col1 flex bg-white  shadow-xl rounded-xl my-6 p-2 md:h-20 lg:h-16">
              <img src={delivery} alt="" className="w-14 h-54" />
              <h2 className="pt-3 ml-2">

                Fast delivery and easy returns</h2>
            </div>
          </div>
          <div className="right_about_us_content sm:w-full md:w-1/2 md:mt-10">
        <div className="img_box mt-6 ">
        <img src={young_main} alt="" style={{zIndex:"5"}} />
        </div>


          </div>
        </div>
      </div>

    </>
  )
}
