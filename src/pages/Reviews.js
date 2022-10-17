import React from 'react'
// import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../Styles/Reviews.scss'
import '../Styles/responsive.scss'

export default function Reviews() {

    const carouselSetting = {
        items: 1,
        margin: 30,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        loop:true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            798: {
                items: 1.1,
            },
            1000: {
                items: 1,
            },
        },
    };

    return (
        <>
        <section className="testimonials">
            <div className="container">
                <div className="section_heading">
                    <h1> Our Happy Customer</h1>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                </div>
                <div className="testimonials_container">
                    <OwlCarousel {...carouselSetting}>
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p> Experienced best qality service, quick response high speed quality <br/>
                                 lovely consistent previous provide was just stealing money from us.Knowledgeable and proffessional team great commited service</p>
                            </div>
                            <div className='test-box'>
                                <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6> Nagaraj H </h6>
                            </div>
                        </div>
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p> A great service which covers in remote area as well and speed is awesome with no interruptions. Thanks for your service which made my work easy, reduce cost in this pandamic situations and work from home is not been so easy without your service.</p>
                            </div>
                            <div className='test-box'>
                                <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6> Sahadev waddar </h6>
                            </div>
                        </div>
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p> Good internet connectivity, good response, uninterrupted services! what else do we need! i would like to thank each and every person from asvish broadband team for providing best response and reverbacks on time, when required.</p>
                            </div>
                            <div className='test-box'>
                                <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6> Shreya tandur </h6>
                            </div>
                        </div>
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p>XFibernet broadband has always given me a good and uninterrupted service.Even now, during heavy rains, my internet connection has been good and i've faced no issues. Really happy that i went with asvish team!</p>
                            </div>
                            <div className='test-box'>
                                <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6>Moin akhtar </h6>
                            </div>
                        </div>
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p> It's very good! internet service we are having in town as well nearby villages the service and the response from the team is very good. its much better than cable connection as well. </p>
                            </div>
                            <div className='test-box'>
                            <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6>Arun gaji </h6>
                            </div>
                        </div>   
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p> Once of the best broadband experience i had in this area good at service and responsive towards customer. Options of wireless and wired service was very fesible to me. </p>
                            </div>
                            <div className='test-box'>
                                <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6> Omkar ashok dhumal </h6>
                            </div>
                        </div>
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p> Awesome and consistent speed 94mbps throughout day. Downloded 57.5 GB in less than hour. best service experienced till now and all the best fpr future. </p>
                            </div>
                            <div className='test-box' >
                                <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6> Burhan chudigar </h6>
                            </div>
                        </div>                  
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p>Exellent service.proffessional and responsive.customer friendly overall good broadband service provider at this place.Design engineering tools are working efficintly. </p>
                            </div>
                            <div className='test-box'>
                                <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6>Akhandayyaswamy Hiremath</h6>
                            </div>
                        </div> 
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p>Best service, Quick response, Great </p>
                            </div>
                            <div className='test-box'>
                            <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6>Kishor kulkarni</h6>
                            </div>
                        </div>                  
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p>Quick service Faster internet one of the best fastest network </p>
                            </div>
                            <div className='test-box'>
                                <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6>Darshan patel </h6>
                            </div>
                        </div>               
                        <div id="single_content">
                            <div className='rating'>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            <i className="fas fa-star"/>
                            </div>
                            <div className="textbox">
                                <p>One of the best broadband service in the city and also best service provider </p>
                            </div>
                            <div className='test-box'>
                                <img className="u_img" src="../assets/images/user.png" alt="user"/>
                                <h6> Naveen gouda</h6>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                {/* <div className=''>
                    
                </div> */}
            </div>
        </section>
    </>
    )
}


