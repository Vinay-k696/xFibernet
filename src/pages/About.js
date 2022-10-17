import React from 'react'
//import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import '../Styles/main.scss'
import '../Styles/responsive.scss'
import Reviews from './Reviews'

export default function About() {
    return (
        <>
        
        <section className='about_us'>
            <div className='container'>
                <div className='content_main'>
                    <div className='text'>
                        <h1>About AsvishXFIbernet</h1>
                        {/* <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h4> */}
                        <p>
                        XFiberNet, A Brand Owned By Asvish Technology Partner, Is A Licensed Internet Service Provider That Delivers High-Speed Gigabyte Internet Services, Voice Telephony, And Other Related Value-Added Services For Both Residential, Corporate, And LeasedLine Users. With A Current User Base Spanning Across Karnataka, We Have Established Ourselves As One Of The Most Trusted ISPs Across The State.
                        XFiberNet Offers A Flexible Blend Of Services To Clients Ranging From Individuals, Professionals, Small And Medium Enterprises, Big Corporate Houses, And Public Sector. We Pride Ourselves On Maintaining Transparency Across Services Delivered To Customers And Provide Unmatched Customer Service Through Our State-Of-The-Art Technology Deployment.
                        XFiberNet Broadband Was Born Out Of A Vision To Become The Most Admired Company To Provide In-The-Home Entertainment, Integrated Telecom, And IT-Related Services To Residential Customer Segments.
                        We Serve Several Cities And Towns In Karnataka And Have Grown To Be Ranked Among The Top 10 ISPs In Terms Of Subscriber Base.
                        </p>
                    </div>
                    <div className='imgbx'>
                        <img src='./assets/images/our-focus-banner.png'alt='about' draggable="false"/>
                    </div>
                </div>
                {/* <div className='abt-content'>
                    <h1>About AsvishXFiberNet</h1>
                    {/* <p>XFiberNet, a brand owned by Asvish Technology Partner, is a Licensed Internet Service Provider that Delivers high-speed Gigabyte internet Services, Voice Telephony, and other related Value-added services for both Residential, Corporate and LeasedLine users. With a current user base spanning across Karnataka, we have established ourselves as one of the most trusted ISPs across the state.</p>
                    <p>XFiberNet offers a flexible blend of services to clients ranging from Individuals, Professionals, Small and Medium Enterprises, Big Corporate houses, and Public Sector. We pride ourselves on maintaining transparency across services delivered to customers and provide unmatched customer service through our state-of-the-art technology deployment.</p>
                    <p>XFiberNet Broadband was born out of a vision to become the most admired company to provide in-the-home entertainment, integrated telecom, and IT-related services to residential customer segments. </p>
                    <p>We serve several cities and towns in Karnataka and have grown to be ranked among the top 10 ISP’s in terms of Subscriber base. </p> 
                </div> */}
            </div>
        </section>
        {/* aboutservice_card */}
        {/* <section className='about_tiles'>
            <div className='container'>
            <div className='services_bann'>
                    <h1>Our Services</h1>
                </div>
                <div className='tiles_wrapper'>
                    <div className='abt_tiles'>
                        <h1>Optical Fiber Broadband</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href='/Xstream_fibernet'>Know More <i className="fal fa-chevron-right"></i></a>
                    </div>
                    <div className='abt_tiles abt_tile'>
                        <h1>Wireless Broadband</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href='/AirFiber'>Know More <i className="fal fa-chevron-right"></i></a>
                    </div>
                    <div className='abt_tiles abt_tile'>
                        <h1>OTT (IPTV)</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href='/Ott'>Know More <i className="fal fa-chevron-right"></i></a>
                    </div>
                    <div className='abt_tiles'>
                        <h1>VOIP (Voice over Internet Protocol)</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href='/Voip'>Know More <i className="fal fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </section> */}
        <Reviews/>
        {/* <Questions /> */}
       <Footer/>
    </>
    )
}

