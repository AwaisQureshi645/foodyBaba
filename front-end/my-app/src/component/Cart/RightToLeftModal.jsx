// RightToLeftModal.js

import React from 'react';
import './RightToLeftModal.css'; // Import your CSS file
import { GiCancel } from 'react-icons/gi';
import { observer } from 'mobx-react';
import cartStore from '../State_Management/Store';
import da from '../../assets/image/salad.jpg'
import { AiTwotoneDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';
// import {ImCancelCircle} from 'react-icons/ri'
const RightToLeftModal = observer((props) => {
  
  const {isOpen}=props;
  const cartItems = cartStore.items.map(item => ({ ...item }));
  // const data =new Set(cartItems)
  // console.log(cartItems)
  const handleRemoveFromCart = (product) => {
    cartStore.removeFromCart(product);
  };

  const handleIncreaseQuantity = (item) => {
    cartStore.increaseQuantity(item);
  };

  const handleDecreaseQuantity = (item) => {
    cartStore.decreaseQuantity(item);
  };
  const handleCloseModel=()=>{
    closeModal()
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {/* Your modal content */}
        <button className="close-button" onClick={ props.closeModal}>
          <GiCancel className='text-2xl font-bold mt-2 ml-1 text-green-600' />
        </button>
        {/* {isOpen && ( */}
          <div>

         
          <div className="cart_container">
            {
              cartItems.map((item) => {
                return (
                  <div className="flex w-full h-24 bg-slate-200 my-1" key={item._id}>
                    <img src={`http://localhost:3000/upload/${item.image.data}`} alt="" className='w-32 p-1 ' />
                    <div className='w-72'>
                      <div className="flex justify-between">
                        <h1 className='mt-1 text-xl font-semibold ml-4'>{item.name}</h1>
                        <AiTwotoneDelete className='mr-3 mt-3 ' onClick={() => handleRemoveFromCart(item)} />
                      </div>


                      <div className="flex">
                        <button className='w-12 h-6 mt-1 ml-4 bg-green-500 text-white mr-3' onClick={() => handleDecreaseQuantity(item)}>  -</button>
                        <h2 className='mt-1'>{item.quantity}</h2>
                        <button className='w-12 h-6 mt-1 ml-4 bg-green-500 text-white' onClick={() => handleIncreaseQuantity(item)}>+</button>
                      </div>
                      <h2 className='ml-4 mt-1'>Price: {item.price * item.quantity  
                      }.RS</h2>
                    </div>

                  </div>
                )
              })
            }

          </div>

            <h1 className='text-xl font-bold'>Toal Price : {cartStore.total}.00 Rs</h1>
            <Link to="/checkout"> <button className='bg-green-600 text-white text-sm p-1'>Checkout</button></Link> 
          </div>

        {/* )} */}
      </div>
    </div>
  );
})

export default RightToLeftModal;
