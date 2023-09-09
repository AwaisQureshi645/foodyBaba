import React from 'react'
import './footerStyle.css'
import { BsFacebook } from 'react-icons/bs'
import { GrTwitter } from 'react-icons/gr';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs'
import CopyRight from './CopyRight';
export default function Footer() {
  return (
    <>
      <div className="footer_conternt mt-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-12 ">
          <div class=" ">
            <h1 className='ml-5 text-2xl font-bold'>Foody<span className='text-green-600'>Baba</span></h1>
            <p className='ml-5 mt-4 text-gray-500'  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            <div className="ml-5 flex mt-5 gap-4">
              <BsFacebook className='text-green-500 w-5 h-5' />
              <GrTwitter className='text-green-500 w-5 h-5' />
              <BsYoutube className='text-green-500 w-5 h-5' />
              <BsInstagram className='text-green-500 w-5 h-5' />
            </div>
          </div>
          <div class="">

            <h1 className='text-2xl font-medium text ml-5 mb-2 text-blacks-500'>About</h1>
            <p className='ml-5 mb-2 text-gray-500'>About us</p>
            <p className='ml-5 mb-2 text-gray-500'>Feature us</p>
            <p className='ml-5 mb-2 text-gray-500'>Menu</p>
            <p className='ml-5 mb-2 text-gray-500'>News</p>
          </div>
          <div class="">

            <h1 className='text-2xl font-medium text  mb-2 text-black-500'>Company</h1>
            <p className=' mb-2 text-gray-500'>Why Naturfood?</p>
            <p className=' mb-2 text-gray-500'>Partner With Us</p>
            <p className=' mb-2 text-gray-500'>FAQ</p>
            <p className=' mb-2 text-gray-500'>Blog</p>

          </div>
          <div class="">

            <h1 className='text-2xl font-medium text  mb-2 text-black-500'>Support</h1>
            <p className=' mb-2 text-gray-500'>Account</p>
            <p className=' mb-2 text-gray-500'>Support Center</p>
            <p className=' mb-2 text-gray-500'>Feedback</p>
            <p className=' mb-2 text-gray-500'>Contact us </p>
          </div>
          <div class="">

            <h1 className='text-2xl font-medium text  mb-2 text-black-500'>Get in Touch</h1>
            <p className=' mb-2 text-gray-500'>Question or feedback?
              We’d love to hear from you</p>
            <button type='button' className='sub_btn text-white ml-[-5px]' > Contact us </button>

          </div>
        </div>
      </div>
      <CopyRight />
    </>
  )
}
