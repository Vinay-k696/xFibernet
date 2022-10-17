import React from 'react';
import { Link } from 'react-router-dom';
//import '../Styles/main.scss';
import '../Styles/cart.scss';
import Footer from '../components/Footer';
//import { useState } from 'react';


export default function Cart() {
    return (
       <>
        <div className='empty_cart'>
            <div className="container">
                <img className='empty-cart-img' src='/assets/images/empty_2.png' alt='empty-cart'/>
                <h1 className='crt_heading'> There's nothing in your cart </h1>
                <Link to="/store">
                    <button className='btn-empty_btn'> Keep Shopping </button>
            </Link>
            </div> 
        </div>
        <Footer />
    </>
    )
}
