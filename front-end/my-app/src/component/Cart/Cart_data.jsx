import React, { useState,useEffect } from 'react'
import './cartStyle.css'
import { FaCartPlus } from 'react-icons/fa'
import RightToLeftModal from './RightToLeftModal';
import { observer } from 'mobx-react';
import cartStore from '../State_Management/Store';
export default function Cart_data() {
  const cartItems = cartStore.items.map(item => ({ ...item }));
const [itemData,setItemData]=useState(0)
const closeModal = () => {
  console.log('Before:', modalOpen); // Log before state change
  setModalOpen(false);
  // setModalOpen(current => !current)
 
  // console.log('After:', modalOpen);  // Log after state change
  console.log('Modal closing...');
};
// console.log(itemData)

  
 

  const openModal = () => {
    setModalOpen(true);
    // setModalOpen(prevState => !prevState);

  };
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    console.log('After:', modalOpen);
  }, [modalOpen]);
  useEffect(() => {
   console.log("checking value is update or not",modalOpen)
    setItemData(cartItems.length);
  }, []);
  // const { isOpen, toggleCart } = cartStore;

  return (
    <>
      <div className="float-right  w-20 h-24 bg-slate-200 item_box" onClick={openModal}>
        <div className="flex">
          <FaCartPlus className='ml-7 mt-4 text-green-600' />
          <span className='text-red-600'>{itemData}</span>
        </div>

        <h3 className='text-center mt-2 text-green-700 text-xl'> item</h3>
        {/* <button type='button' className='bg-green-600 ml-3 mt-3 p-2'>Order</button> */}
      {
        modalOpen &&  <RightToLeftModal isOpen={modalOpen} closeModal={ closeModal} />
      } 
      {/* <RightToLeftModal isOpen={modalOpen} closeModal={closeModal} /> */}
      </div>

    </>
  )
}
