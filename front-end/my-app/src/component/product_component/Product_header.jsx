import React from 'react'
import top_heading_img from '../../assets/image/top-heading.png'

export default function Product_header(props) {
  return (
  <>
  
  <div className="w-full flex p-12 justify-between" style={{backgroundColor:"#eef7f8"}}>
    <div className="heading_products">
    <h1 className='text-4xl font-bold ml-10 text-green-500'>{props.title}</h1>
    <p className='ml-10 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, voluptate?</p>
    </div>
  <div>
    <img src={top_heading_img} alt="" className='w-60 hidden md:block float-right' />
  </div>

  </div>
  
  </>
  )
}
