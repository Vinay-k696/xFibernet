import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './owl.scss'
import { Link } from 'react-router-dom';

export default function Carousel() {

    const BannarSlider = {
        //autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause:true,
        items:1,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };

    return (
        <>
        <OwlCarousel  {...BannarSlider}>
            <div className="item" id="nav_banner">
                    <div className="carousel_main">
                        <div className="carousel_content">
                        <span className="sm-title">XFiberNet</span>
                        <h2>Uninterrupted Internet Connectivity
                            with XFiberNet Corporate Broadband </h2>
                        <p>Corporate Internet and LeasedLine Internet </p>
                        <div>
                        <Link to="/Corporate-line">
                            <button className="banner_button">
                            Connect Now
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <img src='./assets/images/asvishc.png' id="banner_slider" alt="slider-1"/>
            </div>
            {/* switch to XFIberNet */}
            <div className="item" id="nav_banner">
                    <div className="carousel_main">
                        <div className="carousel_content">
                        <span className="sm-title">XFiberNet</span>
                        <h2>Switch To AsvishXFiberNet Fastest and Secure BroadBand</h2>
                        <p>Enjoy Up To 200Mbps and Unlimited Data, Starting@ <b> ₹999</b>  </p>
                        <div>
                        <Link to="/Xstream_Fibernet">
                            <button className="banner_button">
                            Check Availability
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <img src='./assets/images/switchto.png' id="banner_slider" alt="slider-1"/>
            </div>
            {/* plans starting  */}
            <div className="item" id="nav_banner">
                    <div className="carousel_main">
                        <div className="carousel_content">
                        <span className="sm-title">XFiberNet</span>
                        <h2>Truly Unlimited Broadband Plans Starting 30 Mbps @ ₹399-/</h2>
                        <p>Enjoy Up To 200Mbps and Unlimited Data, Starting @<b>₹999</b>  </p>
                        <div>
                        <Link to="/">
                            <button className="banner_button">
                            Know More
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <img src='./assets/images/slider-3.png' id="banner_slider" alt="slider-1"/>
            </div>
            {/* slider-2 work from home */}
            <div className="item" id="nav_banner">
                    <div className="carousel_main">
                        <div className="carousel_content">
                        <span className="sm-title">Xstream Work From Home</span>
                        <h2> Work From Home with Gigabyte Xfibernet brodband </h2>
                        <p> 200 MBPS and Unlimited-Data @ 999/Month  <br/> Experience AsvishXFiberNet Services. <br/>Fast and Stable internet Connection.</p>
                        <div className="banner_content">
                            <div className="banner_title">
                                <h3>200 MBPS And 4000GB</h3>
                                <div className="banner_benfit">
                               <h5>@ ₹999/Per Month</h5>
                            </div>
                            </div>
                        </div>
                        <div>
                        <Link to="/GetConnection">
                            <button className="banner_button">
                            Get New Connection
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <img src='./assets/images/slider-3.jpg'  id="banner_slider" alt="slider-2"/>
            </div>
            
            {/* <Link to="work-for-work"> </Link> */}
            <div className="item" id="nav_banner">
                    <div className="carousel_main">
                        <div className="carousel_content">
                        <span className="sm-title">AsvishXFiberNet</span>
                        <h2> Unlimited Streaming, Gaming and Binge Watching & More </h2>
                        <p> 200 MBPS and Unlimited-Data data @ 1000/month experience Xfibernet services. fast and stable internet connection.</p>
                        <div>
                        <Link to="/new-connection">
                            <button className="banner_button">
                            Subscribe Now
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <img src='./assets/images/slider-3.png'  id="banner_slider" alt="slider-2"/>
            </div>
            {/* refer a friend */}
            <div className="item" id="nav_banner">
                    <div className="carousel_main">
                        <div className="carousel_content">
                        <span className="sm-title">Refer and Earn</span>
                        <h2> Get a Discount for every successful Referral </h2>
                        <p> Refer AsvishXFiberNet Broadband to Your Friends or Family and Get The Discount of ₹250 on your next bill</p>
                        <div className="banner_content">
                        </div>
                        <div>
                        <a href="/Refer">
                            <button className="banner_button">
                            Refer Now
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
                <img src='./assets/images/Refer.png'  id="banner_slider" alt="Refer A Friend"/>
            </div>
        </OwlCarousel>
    </>
    )
}
