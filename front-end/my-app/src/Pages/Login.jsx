import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../component/Contact_form/signup.css'
export default function Signup() {
    const [formData, setFormData] = useState({});
  const[response,setresponse]=useState('')

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
        fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data); // Response from the backend
            setresponse(data);
            setFormData('')
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };



    return (
        <>
            <div className="form_container">
                <h1 style={{ textAlign: 'center', fontFamily: "initial" }} className='py-5 text-3xl font-bold text-green-600'>#Login </h1>
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
                        <label htmlFor="exampleInputPassword1" className="form-label">Password*</label>
                        <br />
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password"
                            value={formData.password || ''}
                            onChange={handleInputChange} />
                    </div>

                    <Link to="/signup">New User</Link> <br />
                    <button type="submit" className="btn_signup">Login</button>

                </form>
            </div>

        </>
    )
}
