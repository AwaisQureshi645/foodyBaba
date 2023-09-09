import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaCartPlus } from 'react-icons/fa'
import { BsFillStarFill } from 'react-icons/bs'
import Footer from '../component/Footer/Footer';
import Product_header from '../component/product_component/Product_header';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cartStore from '../component/State_Management/Store';
import Cart_data from '../component/Cart/Cart_data';
import '../index.css'
export default function Products() {
  const [item, setItem] = useState([]);
  // console.log(item)
  const [selectedCategory, setSelectedCategory] = useState([]);
  const handleCategoryChange = (categoryItem) => {
    if (categoryItem === 'All') {
      setSelectedCategory(item); // Show all products
    }
else{

  const update = item.filter((current) => {
    return current.category=== categoryItem;
  })
  setSelectedCategory(update);
}
  };

  const handleAddToCart = (product) => {
    cartStore.addToCart(product);
    console.log('cart btn is click ')
  };

  useEffect(() => {
    axios.get('http://localhost:3000/shop') // Update URL to match your backend endpoint
      .then(response => {
        setItem(response.data);
        setSelectedCategory(response.data)
     
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  // console.log(item)


  // 



  return (
    <>


      <Product_header title="Products" />
{/* select category */}
<div className="projectButton_box flex justify-center my-6">
          <button  className='w-20 h-10 mx-2  text-white'  onClick={  ()=> handleCategoryChange('All')}>All </button>
          <button className='w-20 h-10 mx-2 bg-gray-600 text-white' onClick={() => handleCategoryChange('salad')}>Salad </button>
          <button className='w-20 h-10 mx-2 bg-gray-600 text-white' onClick={() => handleCategoryChange('burger')}>Burger  </button>
          <button  className='w-20 h-10 mx-2 bg-gray-600 text-white' onClick={() => handleCategoryChange('tea')}>Tea </button>
          {/* <button onClick={() => handleCategoryChange('web-Design')}>web-Design </button> */}

          {/* #6f34fe */}

        </div>

      <div className="product_box_container pb-10"   style={{ width: '85%', margin: 'auto' }}>
        <div className="flex gap-10 flex-wrap  ">
          {
            selectedCategory.map((item) => {
              return (

                <div className="special_dish_box  mb-5" key={item._id} >
                  <Link to={`/products/${item._id}`}>
                    {item.image && (
                      <img src={`http://localhost:3000/upload/${item.image.data}`} alt="" className='h-72 w-full' />
                    )}


                    <div className="flex gap-1 ml-4 mt-3">
                      <BsFillStarFill className='text-yellow-400' />
                      <BsFillStarFill className='text-yellow-400' />
                      <BsFillStarFill className='text-yellow-400' />
                      <BsFillStarFill className='text-yellow-400' />
                      <BsFillStarFill className='text-yellow-400' />
                      <p className='ml-1'></p>
                    </div>

                    <h1 className='font-bold text-2xl mt-4 ml-4'>{item.name}</h1>
                    </Link>
                    <div className="flex">
                      <button type='button' className='add_to_cart_btn text-white flex '  onClick={() => handleAddToCart(item)}> Add To Cart <FaCartPlus className='ml-4' /></button>

                      <h2 className='mt-6 ml-4 text-xl font-bold'> {item.price}.00 RS </h2>
                    </div>
                 
                </div>


              )
            })
          }



        </div>
      </div>


      {/* <Cart_data/> */}

      <Footer  />

    </>
  )
}
