import React from 'react'
//import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Reviews from './Reviews'
import Pricelist from '../components/Pricelist'
import Questions from '../components/Questions'
import '../Styles/responsive.scss'
import '../Styles/main.scss'


export default function Home() {

    return (
        <>
        <Carousel />
        {/* services */}
        <section className='services'>
            <div className='container'>
                <div className='section_heading'>
                    <h1> Experience XFibernet Services</h1>
                </div>
                <div className='service_main'>
                <a href="/Corporate-line">
                    <div className='service_card'>
                        <div className='icon_box'>
                            <img src='../assets/images/corporate.png' alt=''/>
                        </div>
                        <div className='text_area'>
                            <h1> Corporate Internet </h1>
                            <p> In addiction to broadband internet service we help our clients to build,connect,operate and maintain their office network. </p>
                        </div>
                    </div>
                    </a>

                    <a href="/Xstream_Fibernet">
                    <div className='service_card'>
                        <div className='icon_box'>
                            <img src='../assets/images/home.png' alt=''/>
                        </div>
                        <div className='text_area'>
                            <h1> Fiber Internet </h1>
                            <p>We provide easy solutions for (Home users and small offices) with high- quality brodband and unlimited download speeds.</p>
                        </div>
                    </div>
                    </a>

                    <a href="/CloudStorage">
                    <div className='service_card'>
                        <div className='icon_box'>
                            <img src='../assets/images/could.png' alt=''/>
                        </div>
                        <div className='text_area'>
                            <h1> Wireless Internet </h1>
                            <p> we providing cloud storage for business and personal use and small business </p>
                        </div>
                    </div>
                    </a>

                    <a href="/Homesecurity">
                    <div className='service_card'>
                        <div className='icon_box'>
                        <img src='../assets/images/cctv.png' alt=''/>
                        </div>
                        <div className='text_area'>
                            <h1> Home Camera </h1>
                            <p>With or without other security arrangements,today a video surveillance system is seen as a requirement in every business establishment.</p>
                        </div>
                    </div>
                    </a>

                    <a href="/">
                    <div className='service_card'>
                        <div className='icon_box'>
                        <img src='../assets/images/wireless.png' alt=''/>
                        </div>
                        <div className='text_area'>
                            <h1> OTT & IPtv </h1>
                            <p>We are providing IPTV services with our internet packages for free so our subscribers don't need to pay for extra dish bills monthly. </p>
                        </div>
                    </div>
                    </a>

                    <a href="/">
                    <div className='service_card'>
                        <div className='icon_box'>
                        <img src='../assets/images/voip.png' alt=''/>
                        </div>
                        <div className='text_area'>
                            <h1> Voice over Internet Protocol </h1>
                            <p>With our VOIP (Voice Over Internet Protocol) services your corporate agency or office will get proffessional as thenumber is not like a normal cell phone number.</p>
                        </div>
                    </div>
                    </a>
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

        {/* pricelist */}
        <Pricelist/>

        {/* why to choose asvishBroadband */}
        <section className='whytochoose'>
            <div className='container'>
                <div className='choose_heading'>
                    <h6>Why AsvishXFiberNet</h6>
                    <h1>Why Choose AsvishXFiberNet as your Internet Partner</h1>
                    <p>We make it easy for you to enjoy your favorite shows, work and learn online, play online Bills and binge-watch without any interruption with AsvishXFibernet high-speed Broadband.</p>
                </div>
                {/* 1card */}
                <div className='choose-wrapper'>
                    <div className='chooseimg'>
                        <img src='/assets/images/highspeed.svg' draggable="false" alt='high-speed-broadband'/>
                    </div>
                    <div className='choose-contentbox'>
                        <h1>Superior web browsing and Consistent high-speed Internet</h1>
                        <p>We know the importance of high-speed internet in our lives and thus us the best internet service provider near you, we are obsessed to serve you the best internet. Enjoy the gigabyte-speed internet near you at a speed of Up to 300 Mbps</p>
                    </div>
                </div>
                {/* 2 card */}
                <div className='Connectivity'>
                    <div className='connectivity-contentbox'>
                        <h1>Uninterrupted Connectivity</h1>
                        <p>we know that love to experience uninterrupted connectivity while working, learning, Or watching movies. and thus we ensure that every second counts and every second we offer you the best internet connectivity with AsvishXFibernet</p>
                    </div>
                    <div className='connectivity-img'>
                        <img src='/assets/images/connectivity.svg' alt='connectivity' draggable="false"/>
                    </div>  
                </div>
                {/* 3card */}
                <div className='customersupport'>
                    <div className='support img'>
                        <img src='/assets/images/support.svg' draggable="false" alt="Customer Support" />
                    </div>
                    <div className='customer-textbox'>
                        <h1>24/7 Customer Support and Service </h1>
                        <p>We are listening to your queries, and request or complaints, early a day or at night and our team of dedicated professional have got you back if you feel something has wrong with your connection, you can generate a ticket via the XFibernet app or WhatsApp at +91-9739343574</p>
                    </div>
                </div>
            </div>
        </section>

        {/* find best plan for you */}
        <section className='findplan'>
            <div className='container'>
                <div className='find-main'>
                    <div className='findcontentbox'>
                        <h1>Find the Right Broadband internet plan For you.</h1>
                        <p>Get Discount Up to 20% on Quarterly, Half yearly and Annual plans!</p>
                    </div>
                    <div className='findbtn'>
                        <a href="/Plans">
                            <button className='btn-find'>Get Started</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>




         {/* ENTERTAINMENT */}
        {/* <IpTv/> */}
        {/* experience */}
        <Reviews />
    <section className='refer_contentbox'>
        <div className='container'>
            <div className='refer_main'>
                <div className='refer_textbox'>
                    <h6>Refer & Earn</h6>
                    <h2>REFER & GET REWARDED!</h2>
                    <p>Refer AsvishXFibernet Broadband services to your friends or family and get Up-to 20% off on your next bill </p>
                    <div className='refer_btn'>
                        <a href='/Refer'>
                            <button className='refer-btn'>
                                Refer Now
                            </button>
                        </a>
                    </div>
                </div>
                <div className='refer_imgbox'>
                    <img src='./assets/images/reference.png' alt=''/>
                </div>
            </div>
        </div>
    </section>
    {/* <BlogCarousel /> */}
    <Questions />
        <Footer/>
    </>
    )
}
