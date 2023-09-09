import React from 'react'
import './substriptionStyle.css'
import newLetter from '../../assets/image/newLetter.png'
export default function Subscribe() {
    return (
        <>
            <div className="subscription_container">
                <div className="subscription_main_concept ">
                    <div className="flex gep-3 flex-wrap  ">

                        <div className="w-full lg:w-1/2 lg:mt-44 ">
                            <div className="flex  ">
                                <div className=" p-4">
                                    <h1 className='text-4xl ml-10 font-bold'>Subscribed to Our Newsletter & Get Benefits</h1>
                                    <p className='ml-10 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="flex  ml-10 flex-wrap">
                                    <input type="email" placeholder='e-mail'  className='w-72 border-none outline-none h-14 mt-4 pl-4'/>
                                    <button type='button' className='sub_btn text-white h-14  mt-4' > Subscribe</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            {/* <h3></h3> */}
                            {/* import newLetter from '../../assets/image/newLetter.png' */}
                            <img src={newLetter} alt="" className='newLetter_img' />
                        </div>

                    </div>

                </div>
            </div>

        


        </>
    )
}
