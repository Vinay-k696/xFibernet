import React from 'react'
//import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../Styles/main.scss'
import '../Styles/responsive.scss'

const Ott_slider = {
    items:4,
    loop:true,
    margin:15,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1.5,
        },
        600: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
}


export default function IpTv() {
    return (
        <>
        <section className='Ott_section'>
            <div className='container'>
                    <div className='ott_heading_section'>
                    <h1>Enjoy all your favorite streaming apps </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                </div>
                <div className='ott_wrap'>
                    <div className='Ott_tvslider'>
                        <OwlCarousel {...Ott_slider}>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott1.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott2.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott3.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott4.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott5.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott6.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott7.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott8.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott9.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott10.jpg' alt='/'/>
                        </div>
                        <div className='ott_slider_cards'>
                            <img src='../assets/images/ott11.jpg' alt='/'/>
                        </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

