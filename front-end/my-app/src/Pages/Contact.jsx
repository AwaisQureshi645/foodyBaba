import React from 'react'
// import {Product_header} from '../component/product_component/Product_header'
import Product_header from '../component/product_component/Product_header';
import Contact_form from '../component/Contact_form/Contact_form';
import Subscribe from '../component/Subscription/Subscribe';
import Footer from '../component/Footer/Footer';

export default function Contact() {
  return (
   <>
 <Product_header title="Contact us " />
<Contact_form/>
<Subscribe/>
<Footer/>
   </>
  )
}
