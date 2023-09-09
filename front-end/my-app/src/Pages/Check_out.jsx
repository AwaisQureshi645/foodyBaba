import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../component/Contact_form/signup.css'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cartStore from '../component/State_Management/Store';
import { observer } from 'mobx-react';

const Check_out=observer((props) => {
    const [formData, setFormData] = useState({});
  const[response,setresponse]=useState('')
  const notify = () => toast("Wow so easy!");

  const handleToken = async (token) => {
    try {

      const product = { name: 'All Products', price: cartStore.total }
      const response = await axios.post("http://localhost:3000/checkout", {
        product,
        token,
      });
      const { status } = response.data;
      if (status === "success") {
        dispatch({ type: 'Empty' })
        props.history.push('/');

        toast.success("You have paid successfully and continues shopping  ", { position: toast.POSITION.TOP_RIGHT })
        window.alert("successfully ")
      } else {
        dispatch({ type: 'EMPTY' })

      }
      console.log(response);


    } catch (e) {

    }


  }


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
        // Send data to the backend using the fetch API
        // fetch('http://localhost:3000/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     // console.log(data); // Response from the backend
        //     setresponse(data);
        //     setFormData('')
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
    };



    return (
        <>

{/* http://localhost:5173/ */}


            <div className="form_container">
                <h1 style={{ textAlign: 'center', fontFamily: "initial" }} className='py-5 text-3xl font-bold text-green-600'>#Check out </h1>
                {response && <h1 className='text-center'>{response.message}</h1>
  }
                <form action="http://localhost:3000/login" method="post" onSubmit={handleSubmit} >
                   
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address*</label>
                        <br />
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
                            value={formData.email || ''}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Cradit Cart Number*</label>
                        <br />
                        <input type="number" className="form-control" id="exampleInputPassword1" name="password"
                            value={formData.password || ''}
                            onChange={handleInputChange} />
                    </div>

                    {/* <Link to="/signup">New User</Link> <br /> */}
                    <button type="submit" className="btn_signup">Pay</button>
                    <div className="StripeButton">
              <StripeCheckout target='_self'  onClick={(e)=>{
                e.preventDefault()
              }}
                stripeKey='pk_test_51MFeFBLjMxsRcJtMH6eI9oWOoBP95zrWtoY0jSkgUrPzyfcQvPX8ayPL5ro31SdQ8Rcd3pc7A4mBmVGJ9vKN5BLa00UeXZsjoi'
                token={handleToken}
                billingAddress
                shippingAddress
                amount={cartStore.total * 100}
                name='All Products'
              ></StripeCheckout>

            </div>

                </form>
            </div>

        </>
    )
})
export default Check_out
