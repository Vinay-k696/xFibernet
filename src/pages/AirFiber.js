import React from 'react'
import Footer from '../components/Footer'
//import { Link } from 'react-router-dom'
import '../Styles/main.scss'
import '../Styles/responsive.scss'
//import AirFiberFaq from './AirFiberFaq'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const AirFiberSlider = {
    items:3,
    //loop: true,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 16,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items:1,
        },
        768:{
            items: 2,
        },
        1000: {
            items: 3,
        },
    }

}

export default function AirFiber() {
    return (
        <>
        <section className='airfiber_section'>
            <div className='container'>
                <div className='airfiber_headingbox'>
                    <h6>XAirFibernet</h6>
                    <h1> Asvish XAirFiber Wireless Broadband</h1>
                    <p>Wireless Internet Service Provider <br/>
                    Offering Solutions for Business, <br/>
                    Residential and Education</p>
                    <div className='airfiber_btns'>
                    <a href='/'>
                        <button className='get_airfiber'>Get Connection</button>
                    </a>
                </div>
                </div>
            </div> 
        </section>
        {/* how it works */}
        <section className='how-it-works'>
            <div className='container'>
                <div className='h-w-containerbox'>
                    <div className='h-w-imgbox'>
                        <img src='../assets/images/airfiberbenfit.png' alt='/' draggable="false"/>
                    </div>
                    <div className='h-w-contentbox'>
                        <h1>What Is Wireless Broadband.?</h1>
                        <p>Wireless broadband internet service provides robust connectivity via sophisticated microwave technology, eliminating the need for cable circuits, 
                        Wireless broadband solutions utilize radio signals transmitted from a central location - usually a tower or other elevated location - to a connecting directly to a customer site.
                        This Wireless Connectivity provides high-speed stable  Internet services.
                        This wireless connectivity provides high-speed, stable Internet WAN or internet services that can be used for a business's primary connection or other internet connections for the ultimate contingency backup plan.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='hw-secondsection'>
            <div className='container'>
            <div className='h-w-secondbox'>
                    <div className='h-cntbox'>
                        <h1>Our Wireless Broadband Advantages</h1>
                        <p>Wireless broadband internet service provides robust connectivity via sophisticated microwave technology, eliminating the need for cable circuits, 
                        Wireless broadband solutions utilize radio signals transmitted from a central location - usually a tower or other elevated location - to a connecting directly to a customer site.
                        This Wireless Connectivity provides high-speed stable  Internet services.
                        This wireless connectivity provides high-speed, stable Internet WAN or internet services that can be used for a business's primary connection or other internet connections for the ultimate contingency backup plan.</p>
                    </div>
                    <div className='h-w-imgbox'>
                        <img src='../assets/images/Advantages.png' alt='/' draggable="false"/>
                    </div>
                </div>
            </div>
        </section>
        
        {/* airfiber benfits */}
        <section className='airfiber-benfits'>
            <div className='container'>
                <div className='features_heading'>
                    <h1>Benefits and Features</h1>
                    <p></p>
                </div>
                <div className='airfeature'>
                    <div className='features-cards'>
                        <img src='../assets/images/Installation.png' alt='/' draggable="false"/>
                        <h2>Quick Installation</h2>
                        <p>We can quickly, professionally install your service within just a few days.</p>
                    </div>
                    <div className='features-cards'>
                        <img src='../assets/images/High-Speed.png' alt='/' draggable="false"/>
                        <h2>High-Speed</h2>
                        <p>The bandwidth flexibility you need and demand, with connections up to 40Mbps and Unlimited internet available to scale as your business grows.</p>
                    </div>
                    <div className='features-cards'>
                        <img src='../assets/images/Affordability.png' alt='/' draggable="false"/>
                        <h2>Affordability</h2>
                        <p>A competitive pricing structure allows you to focus resources on your core business.</p>
                    </div>
                    <div className='features-cards'>
                        <img src='../assets/images/Flexibility.png' alt='/' draggable="false"/>
                        <h2>Flexibility</h2>
                        <p>Bandwidth speeds can be easily upgraded based on your changing needs. The perfect solution to grow with you</p>
                    </div>
                </div>
            </div>
        </section>

        {/* wireless plans  */}
        <section className='wirelessplans'>
            <div className='container'>
                <div className='airfiber-headingbox'>
                    <h1>Wireless Broadband Plans</h1>
                    <p></p>
                </div>
                <div className='airfiber_plancontainer'>
                    <OwlCarousel {...AirFiberSlider}>
                    <div className='airfiber-pricecard'>
                        <div className='airplan-header'>
                            <span className='airspan'>Basic Plan</span>
                        </div>
                        <div className='airfiber-center'>
                            <div className='airinternet'>
                                <h5>Unlimited</h5>
                                <p>Internet</p>
                            </div>
                            <div className='airspeeds'>
                                <h5>UpTo 10Mbps</h5>
                                <p>Speed</p>
                            </div>
                            <div className='airspeeds airfiberspeed'>
                                <h5>Validity</h5>
                                <p>30 days</p>
                            </div>
                        </div>
                        <div className='airfiber-footer'>
                            <div className='airfiber-monthypay'>
                                <h5>Monthly Rental</h5>
                                <h1>₹499 (+ Gst Ext)</h1>
                            </div>
                            <div className='airbtn'>
                                <a href='/GetConnection'>
                                    <button className='getairfiber'>Buy</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='airfiber-pricecard'>
                        <div className='airplan-header'>
                            <span className='airspan'>Standard Plan</span>
                        </div>
                        <div className='airfiber-center'>
                            <div className='airinternet'>
                                <h5>Unlimited</h5>
                                <p>Internet</p>
                            </div>
                            <div className='airspeeds'>
                                <h5>UpTo 15Mbps</h5>
                                <p>Speed</p>
                            </div>
                            <div className='airspeeds airfiberspeed'>
                                <h5>Validity</h5>
                                <p>30 days</p>
                            </div>
                        </div>
                        <div className='airfiber-footer'>
                            <div className='airfiber-monthypay'>
                                <h5>Monthly Rental</h5>
                                <h1>₹749 (+ Gst Ext)</h1>
                            </div>
                            <div className='airbtn'>
                                <a href='/GetConnection'>
                                    <button className='getairfiber'>Buy</button>
                                </a>
                            </div>
                        </div>  
                    </div>
                    <div className='airfiber-pricecard'>
                        <div className='airplan-header'>
                            <span className='airspan'>Performance Plan</span>
                        </div>
                        <div className='airfiber-center'>
                            <div className='airinternet'>
                                <h5>Unlimited</h5>
                                <p>Internet</p>
                            </div>
                            <div className='airspeeds'>
                                <h5>UpTo 20Mbps</h5>
                                <p>Speed</p>
                            </div>
                            <div className='airspeeds airfiberspeed'>
                                <h5>Validity</h5>
                                <p>30 days</p>
                            </div>
                        </div>
                        <div className='airfiber-footer'>
                            <div className='airfiber-monthypay'>
                                <h5>Monthly Rental</h5>
                                <h1>₹999 (+ Gst Ext)</h1>
                            </div>
                            <div className='airbtn'>
                                <a href='/GetConnection'>
                                    <button className='getairfiber'>Buy</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='airfiber-pricecard'>
                        <div className='airplan-header'>
                            <span className='airspan'>Performance Pro Plan</span>
                        </div>
                        <div className='airfiber-center'>
                            <div className='airinternet'>
                                <h5>Unlimited</h5>
                                <p>Internet</p>
                            </div>
                            <div className='airspeeds'>
                                <h5>UpTo 25Mbps</h5>
                                <p>Speed</p>
                            </div>
                            <div className='airspeeds airfiberspeed'>
                                <h5>Validity</h5>
                                <p>30 days</p>
                            </div>
                        </div>
                        <div className='airfiber-footer'>
                            <div className='airfiber-monthypay'>
                                <h5>Monthly Rental</h5>
                                <h1>₹1199 (+ Gst Ext)</h1>
                            </div>
                            <div className='airbtn'>
                                <a href='/GetConnection'>
                                    <button className='getairfiber'>Buy</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='airfiber-pricecard'>
                        <div className='airplan-header'>
                            <span className='airspan'>Performance Premium Plan</span>
                        </div>
                        <div className='airfiber-center'>
                            <div className='airinternet'>
                                <h5>Unlimited</h5>
                                <p>Internet</p>
                            </div>
                            <div className='airspeeds'>
                                <h5>UpTo 30Mbps</h5>
                                <p>Speed</p>
                            </div>
                            <div className='airspeeds airfiberspeed'>
                                <h5>Validity</h5>
                                <p>30 days</p>
                            </div>
                        </div>
                        <div className='airfiber-footer'>
                            <div className='airfiber-monthypay'>
                                <h5>Monthly Rental</h5>
                                <h1>₹1299 (+ Gst Ext)</h1>
                            </div>
                            <div className='airbtn'>
                                <a href='/GetConnection'>
                                    <button className='getairfiber'>Buy</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </OwlCarousel>
                </div>
                <div className='airfiber_terms'>
                </div>
            </div>
        </section>

            {/* get asvish XFibernet */}
        <section className='getbroadband'>
            <div className='container'>
                <div className='getbroadband_wrapper'>
                    <div className='get-connection'>
                        <h1>Get a New Connection</h1>
                    </div>
                    <div className='gets'>
                        <a href="/GetConnection">
                        <button className='get_newconnection'>Check Availability</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* <AirFiberFaq/> */}
        <Footer />
    </>
    )
}
