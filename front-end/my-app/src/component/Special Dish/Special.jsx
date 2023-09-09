import React, { useState, useEffect } from 'react'
import './SpecialStyle.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import slient from '../../assets/image/slient1.jpg'
import dish1 from '../../assets/image/breed2.png'
import { FaCartPlus } from 'react-icons/fa'
import black from '../../assets/image/The Deli Taco Soft.webp'
import { BsFillStarFill } from 'react-icons/bs'
export default function Special() {


    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/shop') // Update URL to match your backend endpoint
            .then(response => {
                const topThreeProducts = response.data.slice(0, 3);
                setItem(topThreeProducts);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    console.log(item)

    return (
        <>

            <div className="special_container ">
                <div className="main_box_content ">
                    <h4 className='text-center pt-12 overflow-y-hidden'>Our Top Menu</h4>
                    <h1 className='text-center text-5xl font-bold mb-1 '>Our Special Dish</h1>
                    <p className='text-center py-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel commodo dolor.<br />
                        Vivamus eu nunc convallis, finibus arcu quis, ultrices purus.</p>
                    {/* box special dishs */}

                    <div className="flex gap-10 flex-wrap justify-center  md:justify-start">
                        {
                            item.map((item) => {
                                return (
                                    <div className="special_dish_box   my-5 xl:mb-24 " key={item._id}>
                                        <Link to='/products'>
                                        {item.image && (
                                            <img src={`http://localhost:3000/upload/${item.image.data}`} alt="" className='h-72 w-full' />
                                        )}


                                        <div className="flex gap-1 ml-4 mt-3">
                                            <BsFillStarFill className='text-yellow-400' />
                                            <BsFillStarFill className='text-yellow-400' />
                                            <BsFillStarFill className='text-yellow-400' />
                                            <BsFillStarFill className='text-yellow-400' />
                                            <BsFillStarFill className='text-yellow-400' />
                                            <p className='ml-1'>53</p>
                                        </div>

                                        <h1 className='font-bold text-3xl mt-4 ml-4'>{item.name}</h1>
                                        <div className="flex">
                                            <button type='button' className='add_to_cart_btn text-white flex ' > Get Started <FaCartPlus className='ml-4' /></button>

                                            <h2 className='mt-6 ml-6 text-xl font-bold'> {item.price}.00 RS </h2>
                                        </div>
                                        </Link>
                                    </div>

                                )
                            })
                        }



                    </div>

                </div>
            </div>
        </>
    )
}
