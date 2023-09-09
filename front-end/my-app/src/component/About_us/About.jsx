import healthly_food from './../../assets/image/healthyfood.jpg'
import React from 'react'
import './aboutStyle.css'
export default function About() {
    return (
        <>
            <div className="aboutSection">
                <div className="about_container">
                    <div className="about_left">
                        <img src={healthly_food} alt="" />
                    </div>
                    <div className="about_right">
                        <h4>About Us</h4>
                        <h1>Healthy & Tasty Foods With Natural Ingredients</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices purus.
                            <br />
                            <br />
                            In maximus interdum finibus. Praesent vestibulum justo ipsum, quis porttitor nibh porttitor tincidunt. </p>

                        <div className="number_container">
                            <div className="first">
                                <h1>2K+</h1>
                                <p>Active Member</p>
                            </div>
                            <div className="first">
                                <h1>4K+</h1>
                                <p>Happy Client</p>
                            </div>
                            <div className="first">
                                <h1>35+</h1>
                                <p>

                                    Award Winning</p>
                            </div>
                        </div>
                        <button type='button' className='get_started_btn' > Get Started</button>

                    </div>
                </div>
            </div>

        </>
    )
}
