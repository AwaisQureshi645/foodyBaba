import React, { useState, useEffect } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import main from '../../assets/image/breed1.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai'
import "./Product_detail_style.css"
export default function Product_detail_page() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/shop/${id}`) // Update URL to match your backend endpoint
      .then(response => {
        const topThreeProducts = response.data;
        setItem(topThreeProducts);
      })
      .catch(error => {
        console.error('Error:', error);
      });


  }, [id]);
  const itemArray = Object.values(item);
  console.log(item)
  return (
    <>
      {
        itemArray.map((item) => (
          <div className="detail_pages flex flex-wrap" key={item._id}>

            <div className="img_detail_page  ">
              <img src={`http://localhost:3000/upload/${item.image.data}`} alt="" className='' />
            </div>
            <div className="content_detail_page pt-6 pl-3">
              <h1 className='text-4xl mt-5 font-bold ml-5 mb-5' >
                {item.name}
              </h1>
              <p className='ml-5 mt-3'>
                {item.description}
              </p>
              <div className="flex ml-6 mt-4 mb-5">
                <button className='w-10 h-8 bg-slate-300 mr-5'>-</button>
                <p>1</p>
                <button className='w-10 h-8 bg-slate-300 ml-5'>+</button>
              </div>

              <h2 className='ml-5 mt-5 mb-5 text-xl font-semibold'>Price: {item.price}.00 RS</h2>

              <div className="sm:flex flex-wrap">
                <button type='button' className='check_out_btn text-white flex bg-yellow-500 w-40 text-center  pt-5  justify-center mt-4 h-16 ml-4  ' onClick={() => {
                  console.log("btn is click")
                }}> Add To Cart <FaCartPlus className='ml-4' /></button>
                <button type='button' className='check_out_btn text-white flex bg-red-600 w-40 text-center  pt-5  justify-center mt-4 h-16 ml-4  ' > Checkout <AiOutlineArrowRight className='ml-4 mt-1' /> </button>

              </div>

            </div>
          </div>
        )
        )
      }



    </>
  )
}
