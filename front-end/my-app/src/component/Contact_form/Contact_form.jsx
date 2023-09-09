import React from 'react'
import "./form_content.css"
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
export default function Contact_form() {
    return (
        <>

            <div className="form_box_container flex  flex-wrap">
                <div className="left_contact_data w-full lg:w-1/2 pr-16 my-12">
                    <h3 className='text-2xl text-yellow-500'>Have Questions?</h3>
                    <h1 className='text-5xl font-bold '>Lets Get In Touch</h1>
                    <p className='my-3'>If you have any questions simply use the following contact details.</p>

                    <div className="flex my-3 py-8 border-b-2 border-gray-200 ">
                        <AiOutlineMail className=' mr-3 text-4xl mt-2 text-green-600' />
                        <div>
                            <h2 className='text-gray-700 overflow-y-hidden'>Email-Address</h2>
                            <h2 className='font-bold overflow-y-hidden'>awaisqureshi@gmail.com</h2>

                        </div>
                        {/* <div className="border-b-4 border-green-500 h-1 w-36 "></div> */}
                    </div>
                    <div className="flex my-3 py-8  border-b-2 border-gray-200 ">
                        < BiPhoneCall className=' mr-3 text-4xl mt-2 text-green-600' />
                        <div>
                            <h2 className='text-gray-700'>Phone Number</h2>
                            <h2 className='font-bold'>+92 3145807825</h2>

                        </div>
                        {/* <div className="border-b-4 border-green-500 h-1 w-36 "></div> */}
                    </div>
                    {/* HiOutlineLocationMarker */}
                    <div className="flex my-3 py-8 border-b-2 border-gray-200 ">
                        <HiOutlineLocationMarker className=' mr-3 text-4xl mt-2 text-green-600' />
                        <div>
                            <h2 className='text-gray-700'>Store Address</h2>
                            <h2 className='font-bold'>GIGA Mall , Islamabad.</h2>

                        </div>
                        {/* <div className="border-b-4 border-green-500 h-1 w-36 "></div> */}
                    </div>
                </div>
                <div className="right_contact_data  w-full lg:w-1/2 mt-12">
                    <div className="sm:flex my-4">
                        <div className='w-full form_data '>
                            <label htmlFor="first_name" className='text-lg font-bold'>First Name</label><br />
                            <input type="text" id='first_name' className='h-12  w-24 sm:w-16 lg:w-40 border-2 border-gray-300' />
                        </div>
                        <div className='w-full form_data'><label htmlFor="last_name" className='text-lg font-bold'>Last Name</label>
                            <br />
                            <input type="text" id='last_name' className='h-12  border-2 border-gray-300' />
                        </div>
                    </div>
                    <div className="sm:flex my-4">
                        <div className='w-full form_data'><label htmlFor="email" className='text-lg font-bold'>Email Address</label><br />
                            <input type="text" id='email' className='h-12 w-40 border-2 border-gray-300' />
                        </div>
                        <div className='w-full form_data'><label htmlFor="phone" className='text-lg font-bold'>Phone Number</label>
                            <br />
                            <input type="text" id='phone' className='h-12  border-2 border-gray-300' />
                        </div>
                    </div>

                    <div className="flex my-3">
                        <div className='w-full form_data'><label htmlFor="messge" className='text-lg font-bold'>Message</label><br />
                            <textarea type="text" id='messge' className=' border-2 border-gray-300 pt-4 pl-6' />
                        </div>

                    </div>

                    <button className='send_message'>Send Message</button>
                </div>
            </div>

        </>
    )
}
