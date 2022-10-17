import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import '../Styles/responsive.scss'
import '../Styles/xfibernet.scss'
import Reviews from './Reviews'
import XFiberNetFaq from './XFiberNetFaq'


export default function XstreamFibernet() {
    return (
        <>
        <section className='xfibernet'>
            <div className='container'>
                <div className='fiber_text_box'>
                    <h6>Welcome to AsvishXFiberNet</h6>
                    <h1> Switch to AsvishXFibernet for Powerful, Secured Broadband Connection</h1>
                    <p>Introducing  AsvishXFiberNet Fast and Stable <br/>Internet Connection without restrictions</p>
                    <div className='fibernet_btnbox'>
                        <Link to='/'>
                        <button className='xfiber_btn'> Get XFiberNet </button>
                        </Link>
                    </div>
                    <div className='social_icons flex'>
                    <span>Follow Us:</span>
                    <div>
                        <Link to="/">
                        <i id='social_i' className="fab fa-facebook-square"/>
                        </Link>
                        <Link to="/">
                        <i id='social_i' className="fab fa-whatsapp"></i>
                        </Link>
                        <Link to="/">
                        <i id='social_i' className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
                </div> 
            </div>
        </section>

        <section className='x-advantages'>
            <div className='container'>
                <div className='adv-head'>
                    <h1>AsvishXFiberNet Advantages</h1>
                </div>
                <div className='xadv-main'>
                    <div className='adv-cards'>
                        <div className='adv-icon'>
                            <img src='../assets/images/Performance.png' alt=''/>
                        </div>
                        <div className='adv-content'>
                            <h1>Ultra High-Speed Internet</h1>
                            <p>High-Speed Internet is important to business productivity, especially if your business relies on publishing and exchanging data files.
                            Fiber optic internet is now faster than the highest-speed copper internet connections.
                            Fiber also provides users with faster upload and download speeds than any other alternative.</p>
                        </div>
                    </div>
                    <div className='adv-cards'>
                        <div className='adv-icon'>
                            <img src='../assets/images/End_to_end.png' alt=''/>
                        </div>
                        <div className='adv-content'>
                            <h1>Reliability</h1>
                            <p>Uptime and data transmission are very consistent with fiber lines.  fiber connectivity gives you the most reliable internet service possible. Fiber optic cables are made of glass, which is much more durable than copper.</p>
                        </div>
                    </div>
                    <div className='adv-cards'>
                        <div className='adv-icon'>
                            <img src='../assets/images/FastestWifi.png' alt=''/>
                        </div>
                        <div className='adv-content'>
                            <h1>Security</h1>
                            <p>Fiber networks do not radiate signals, making it impossible to hack into or tap.  Security breaches can be incredibly costly, both financially and personally.  A fiber-optic network will not only keep your classified data secure; it can save you thousands in the long run.</p>
                        </div>
                    </div>
                    <div className='adv-cards'>
                        <div className='adv-icon'>
                            <img src='../assets/images/Performance.png' alt=''/>
                        </div>
                        <div className='adv-content'>
                            <h1>Low Latency</h1>
                            <p>Low latency infrastructure is optimized for high-performance connectivity, providing near real-time access for your sensitive business operations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className='intro'>
            <div className='container'>
                <div className='intro_container'>
                    <div className='intro-imgbox'>
                        <img src='../assets/images/fiber.png' draggable="false" alt='/'/>
                    </div>
                    <div className='intro-headingbox'>
                        <h1>Introducing AsvishXFiberNet (FTTH)</h1>
                        <p>AsvishXFiberNet is not just another Fiber-Optic broadband service. It’s the future of broadband.
                        XFiberNet is a Next-Generation Broadband technology that combines our technical expertise (best-in-class optic fiber and End-to-End Fiber network architecture) with a decade-long understanding of client usage (analytics from millions of users) to provide you with a Truly Unlimited and Fastest Internet experience.
                        So, whether you are Streaming, Playing games, Working from home, or transferring Large files, get a faster and a premium broadband experience with XFiberNet.</p>
                    </div>
                </div>
            </div>
        </section>

       
        
        {/* <XFibernetFaq/> */}
        <XFiberNetFaq/>
        <Reviews/>


        {/* get connection */}
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

        
        <Footer/>
    </>
    )
}
