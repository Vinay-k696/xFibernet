import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../Styles/main.scss'
import '../Styles/responsive.scss'

export default function Pricelist() {

    const priceSlider = {
        //nav: true,
        //navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
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
        
    return (
        <>
        <section className='price'>
            <div className='container'>
                <div className='htxt'>
                    <h1><b>XFibernet</b> Broadband Plans</h1>
                    <div>
                        <a href="/Plans">
                        <button className="btn-faq">View All Plans</button>
                        </a>
                    </div>
                </div>
                <div className='price_container'>
                    <OwlCarousel {...priceSlider}>
            <div className='price_card'>
                <div className='price_heading'>
                <h1> Student Plan </h1>
            </div>
            <div className='price_details'>
                <div>
                    <img className='svg_icon' src='./assets/images/wifi_icon.png' alt='wifi' />
                </div>
                <div className='price_title'>
                    <h1> Internet </h1>
                    <p>Up to 30 Mbps</p>
                </div>
            </div>
            <div className='plan_details'>
                <div className='plan_detail'>
                    <i className="fal fa-check"></i>
                    <p> Unlimited Data </p>
                </div>
            </div>

            <div className='price_main_container'>
                <div><span>₹</span></div>
                    <h1>399</h1>
                <div className='price_inner'>
                    <p>
                        {/* <b className='price_tag'>.99</b> */}
                        <b className='price_tag'>Per Month</b>
                    </p>
                    <div className='price_gst'>
                        <span className='price_add'> +Gst </span>
                    </div>
                </div>
            </div>
            <div className='price_footer'>
                    <div>
                        <Link to='/'>
                            <button className='btn-pricelist'> Check Availability </button>
                        </Link>
                    </div>
            </div>
        </div> {/*end card1*/}
                {/* start card 2 */}
            <div className='price_card'>
                <div className='price_heading'>
                <h1> Basic Plan </h1>
            </div>
            <div className='price_details'>
                <div>
                    <img className='svg_icon' src='./assets/images/wifi_icon.png' alt='wifi' />
                </div>
                <div className='price_title'>
                    <h1> Internet </h1>
                    <p>Up to 50 Mbps</p>
                </div>
            </div>
            <div className='plan_details'>
                <div className='plan_detail'>
                    <i className="fal fa-check"></i>
                    <p> Unlimited Data </p>
                </div>
                {/* <div>
                    <i className="fal fa-check"></i>
                    <p> 90% Connection Uptime </p>
                </div> */}
            </div>
            <div className='ott_wrapper'>
                    <div className='ott_heading'>Ott Subscriptions</div>
                    <div className='ott_info'>
                        <span className='logo_sub'>
                            <img src='../assets/images/a1.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a2.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a3.jpg' alt='/'/>
                        </span>
                        <span className='more_logo'>+6 More</span>
                    </div>
                </div>
            <div className='price_main_container'>
                <div><span>₹</span></div>
                    <h1>499</h1>
                <div className='price_inner'>
                    <p>
                        {/* <b className='price_tag'>.99</b> */}
                        <b className='price_tag'>Per Month</b>
                    </p>
                    <div className='price_gst'>
                        <span className='price_add'> +Gst </span>
                    </div>
                </div>
            </div>
            <div className='price_footer'>
                    <div>
                        <Link to='/'>
                            <button className='btn-pricelist'> Check Availability </button>
                        </Link>
                    </div>
            </div>
        </div> {/* end card2*/}

        {/* card3 */}
            <div className='price_card'>
                <div className='price_heading'>
                <h1> Work From Home Plan </h1>
            </div>
            <div className='price_details'>
                <div>
                    <img className='svg_icon' src='./assets/images/wifi_icon.png' alt='wifi' />
                </div>
                <div className='price_title'>
                    <h1> Internet </h1>
                    <p>Up to 75 Mbps</p>
                </div>
            </div>
            <div className='plan_details'>
                <div className='plan_detail'>
                    <i className="fal fa-check"></i>
                    <p> Unlimited Data </p>
                </div>
                {/* <div>
                    <i className="fal fa-check"></i>
                    <p> 90% Connection Uptime </p>
                </div> */}
            </div>
            <div className='ott_wrapper'>
                    <div className='ott_heading'>Ott Subscriptions</div>
                    <div className='ott_info'>
                        <span className='logo_sub'>
                            <img src='../assets/images/a1.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a2.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a3.jpg' alt='/'/>
                        </span>
                        <span className='more_logo'>+6 More</span>
                    </div>
                </div>
            <div className='price_main_container'>
                <div><span>₹</span></div>
                    <h1>699</h1>
                <div className='price_inner'>
                    <p>
                        {/* <b className='price_tag'>.99</b> */}
                        <b className='price_tag'>Per Month</b>
                    </p>
                    <div className='price_gst'>
                        <span className='price_add'> +Gst </span>
                    </div>
                </div>
            </div>
            <div className='price_footer'>
                    <div>
                        <Link to='/'>
                            <button className='btn-pricelist'> Check Availability </button>
                        </Link>
                    </div>
            </div>
        </div> {/* end card4*/}

        {/* card 5 */}
            <div className='price_card'>
                <div className='price_heading'>
                <h1> Streaming Plan </h1>
            </div>
            <div className='price_details'>
                <div>
                    <img className='svg_icon' src='./assets/images/wifi_icon.png' alt='wifi' />
                </div>
                <div className='price_title'>
                    <h1> Internet </h1>
                    <p>Up to 100 Mbps</p>
                </div>
            </div>
            <div className='plan_details'>
                <div className='plan_detail'>
                    <i className="fal fa-check"></i>
                    <p> Unlimited Data </p>
                </div>
                {/* <div>
                    <i className="fal fa-check"></i>
                    <p> 90% Connection Uptime </p>
                </div> */}
            </div>
            <div className='ott_wrapper'>
                    <div className='ott_heading'>Ott Subscriptions</div>
                    <div className='ott_info'>
                        <span className='logo_sub'>
                            <img src='../assets/images/a1.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a2.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a3.jpg' alt='/'/>
                        </span>
                        <span className='more_logo'>+6 More</span>
                    </div>
                </div>
            <div className='price_main_container'>
                <div><span>₹</span></div>
                    <h1>799</h1>
                <div className='price_inner'>
                    <p>
                        {/* <b className='price_tag'>.99</b> */}
                        <b className='price_tag'>Per Month</b>
                    </p>
                    <div className='price_gst'>
                        <span className='price_add'> +Gst </span>
                    </div>
                </div>
            </div>
            <div className='price_footer'>
                    <div>
                        <Link to='/'>
                            <button className='btn-pricelist'> Check Availability </button>
                        </Link>
                    </div>
             </div>
        </div> {/* end card 5 */}
        {/* card 5 */}
            <div className='price_card'>
                <div className='price_heading'>
                <h1> Professional Plan </h1>
            </div>
            <div className='price_details'>
                <div>
                    <img className='svg_icon' src='./assets/images/wifi_icon.png' alt='wifi' />
                </div>
                <div className='price_title'>
                    <h1> Internet </h1>
                    <p>Up to 200 Mbps</p>
                </div>
            </div>
            <div className='plan_details'>
                <div className='plan_detail'>
                    <i className="fal fa-check"></i>
                    <p> Unlimited Data </p>
                </div>
                {/* <div>
                    <i className="fal fa-check"></i>
                    <p> 90% Connection Uptime </p>
                </div> */}
            </div>
            <div className='ott_wrapper'>
                    <div className='ott_heading'>Ott Subscriptions</div>
                    <div className='ott_info'>
                        <span className='logo_sub'>
                            <img src='../assets/images/a1.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a2.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a3.jpg' alt='/'/>
                        </span>
                        <span className='more_logo'>+6 More</span>
                    </div>
                </div>
            <div className='price_main_container'>
                <div><span>₹</span></div>
                    <h1>999</h1>
                <div className='price_inner'>
                    <p>
                        {/* <b className='price_tag'>.99</b> */}
                        <b className='price_tag'>Per Month</b>
                    </p>
                    <div className='price_gst'>
                        <span className='price_add'> +Gst </span>
                    </div>
                </div>
            </div>
            <div className='price_footer'>
                    <div>
                        <Link to='/'>
                            <button className='btn-pricelist'> Check Availability </button>
                        </Link>
                    </div>
            </div>
        </div> {/* end card 5 */}
        {/* card 6 */}
            <div className='price_card'>
                <div className='price_heading'>
                <h1> Gaming Plan </h1>
            </div>
            <div className='price_details'>
                <div>
                    <img className='svg_icon' src='./assets/images/wifi_icon.png' alt='wifi' />
                </div>
                <div className='price_title'>
                    <h1> Internet </h1>
                    <p>Up to 300 Mbps</p>
                </div>
            </div>
            <div className='plan_details'>
                <div className='plan_detail'>
                    <i className="fal fa-check"></i>
                    <p> Unlimited Data </p>
                </div>
                {/* <div>
                    <i className="fal fa-check"></i>
                    <p> 90% Connection Uptime </p>
                </div> */}
            </div>
            <div className='ott_wrapper'>
                    <div className='ott_heading'>Ott Subscriptions</div>
                    <div className='ott_info'>
                        <span className='logo_sub'>
                            <img src='../assets/images/a1.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a2.jpg' alt='/'/>
                        </span>
                        <span className='logo_sub'>
                            <img src='../assets/images/a3.jpg' alt='/'/>
                        </span>
                        <span className='more_logo'>+6 More</span>
                    </div>
                </div>
            <div className='price_main_container'>
                <div><span>₹</span></div>
                    <h1>1399</h1>
                <div className='price_inner'>
                    <p>
                        {/* <b className='price_tag'>.99</b> */}
                        <b className='price_tag'>Per Month</b>
                    </p>
                    <div className='price_gst'>
                        <span className='price_add'> +Gst </span>
                    </div>
                </div>
            </div>
            <div className='price_footer'>
                    <div>
                        <Link to='/'>
                            <button className='btn-pricelist'> Check Availability </button>
                        </Link>
                    </div>
            </div>
        </div> {/* end card 6 */}    
        </OwlCarousel>    
        </div>
        <div className='section_end'>
                <h6>*Prices indicated above are the effective prices for long-term plans. T&C Apply. </h6>
            {/* <div className='section_end_btn'>
            <Link to="/">
            <button className='btn-planlist'> More Plans</button>   
            </Link>
            </div> */}
        </div> 
        </div>
    </section>
    </>
    )
}
