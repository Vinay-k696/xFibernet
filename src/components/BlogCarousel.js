import React from "react"
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../Styles/blog.scss'
import '../Styles/responsive.scss'


const Settings = {
    dots: false,
    items: 3,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
};

export default function blog_carousel () {
    
    return (
        <>
        <section className="blog">
            <div className="container">
                <div className="blog_header">
                    <h1> Latest News </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <div>
                        <Link to="/">
                        <button className="btn-post">READ ALL POSTS</button>
                        </Link>
                    </div>
                </div>
                <div className="card_main">
                    <OwlCarousel {...Settings}>
                    <div className="card_box">
                        <div className="cardimg">
                            <a href="/">
                            <img className="blog_img" src='./assets/images/blog1.png' alt="/" /></a>
                        </div>
                        <div className="cardtxt">
                            <div className="flex sp-between">
                            <span className="date_element">Monday January 2022 </span>
                                <span className="date_element">1 hour ago</span>
                            </div>
                            <div className="blog_heading">
                                <h3> The first has to do with being pleased and satisfied. </h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley
                                </p>
                            </div>
                            <div>
                                <Link to="/">
                                    <button className="blog_btn"> Continue Reading</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card_box">
                        <div className="cardimg">
                            <a href="/">
                            <img src='./assets/images/blog2.png' alt="/"/></a>
                        </div>
                        <div className="cardtxt">
                            <div className="flex sp-between">
                                <span className="date_element">Monday January 2022 </span>
                                <span className="date_element">1 hour ago</span>
                            </div>
                            <div className="blog_heading">
                                <a href="/">
                                <h3> The first has to do with being pleased and satisfied.</h3></a>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley
                                </p>
                            </div>
                            <div>
                                <Link to="/">
                                    <button className="blog_btn"> Continue Reading</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card_box">
                        <div className="cardimg">
                            <a href="/">
                            <img src='./assets/images/blog3.jpg' alt="/" /></a>
                        </div>
                        <div className="cardtxt">
                            <div className="flex sp-between">
                                <span className="date_element">Monday January 2022 </span>
                                <span className="date_element">1 hour ago</span>
                            </div>
                            <div className="blog_heading">
                                <h3> The first has to do with being pleased and satisfied. </h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley
                                </p>
                            </div>
                            <div>
                                <Link to="/">
                                    <button className="blog_btn"> Continue Reading</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card_box">
                        <div className="cardimg">
                            <a href="/">
                            <img src='./assets/images/blog4.png' alt="/" /></a>
                        </div>
                        <div className="cardtxt">
                            <div className="flex sp-between">
                                <span className="date_element">Monday January 2022 </span>
                                <span className="date_element">1 hour ago</span>
                            </div>
                            <div className="blog_heading">
                                <h3 className="blog_heading"> The first has to do with being pleased and satisfied. </h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley
                                </p>
                            </div>
                            <div>
                                <Link to="/">
                                    <button className="blog_btn"> Continue Reading</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card_box">
                        <div className="cardimg">
                            <a href="/">
                            <img className="blog_img" src='./assets/images/blog1.png' alt="/" /></a>
                        </div>
                        <div className="cardtxt">
                            <div className="flex sp-between">
                                <span className="date_element">Monday January 2022 </span>
                                <span className="date_element">1 hour ago</span>
                            </div>
                            <div className="blog_heading">
                                <h3> The first has to do with being pleased and satisfied. </h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley
                                </p>
                            </div>
                            <div>
                                <Link to="/">
                                    <button className="blog_btn"> Continue Reading</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card_box">
                        <div className="cardimg">
                            <a href="/">
                            <img className="blog_img" src='./assets/images/blog2.png' alt="/" /></a>
                        </div>
                        <div className="cardtxt">
                            <div className="flex sp-between">
                                <span className="date_element">Monday January 2022 </span>
                                <span className="date_element">1 hour ago</span>
                            </div>
                            <div className="blog_heading">
                                <h3> The first has to do with being pleased and satisfied. </h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley
                                </p>
                            </div>
                            <div>
                                <Link to="/">
                                    <button className="blog_btn"> Continue Reading</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card_box">
                        <div className="cardimg">
                            <a href="/">
                            <img className="blog_img" src='./assets/images/blog3.jpg' alt="/" /></a>
                        </div>
                        <div className="cardtxt">
                            <div className="flex sp-between">
                                <span className="date_element">Monday January 2022 </span>
                                <span className="date_element">1 hour ago</span>
                            </div>
                            <div className="blog_heading">
                                <h3> The first has to do with being pleased and satisfied. </h3>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley
                                </p>
                            </div>
                            <div>
                                <Link to="/">
                                    <button className="blog_btn"> Continue Reading</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>  
    </>
    )
}