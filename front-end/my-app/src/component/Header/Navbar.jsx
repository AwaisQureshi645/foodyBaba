import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa'
import RightToLeftModal from '../Cart/RightToLeftModal';
import './Header.css'
export default function Navbar() {

  const closeModal = () => {
    console.log('Before:', modalOpen); // Log before state change
    setModalOpen(false);
    // setModalOpen(current => !current)

    // console.log('After:', modalOpen);  // Log after state change
    console.log('Modal closing...');
  };
  // console.log(itemData)




  const openModal = () => {
    console.log('awais')
    setModalOpen(true);
    // setModalOpen(prevState => !prevState);

  };
  const [modalOpen, setModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log("first")
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='navbar'>
        <div id="logo"><h1 className='text-2xl font-bold ml-12 pt-2'>Foody<span>Baba</span></h1></div>
        <div className={`menu ${isOpen ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact </Link>
          <Link to="/signup" className='signup_btnss text-white'>Signup</Link>
          <FaCartPlus onClick={openModal} className='ml-7 mt-4 text-green-600 text-2xl' />

        </div>
        <div className="menu_icon" onClick={toggleMenu}>
          {isOpen ? <RxCross2 style={{ color: 'black' }} /> : <AiOutlineMenu style={{ color: 'black' }} />}


        </div>
        {
          modalOpen && <RightToLeftModal isOpen={modalOpen} closeModal={closeModal} />
        }

      </div>

    </>
  )
}
