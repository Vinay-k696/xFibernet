import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../Styles/main.scss'
import '../Styles/responsive.scss'
import CorporatelineFaq from './CorporatelineFaq'
import Footer from '../components/Footer'

const CorpPricelist = {
    //loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
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

export default function corporate_line() {
    return (
        <>
        <section className='corporate_banner'>
            <div className='container'>
                <div className='c-text-box'>
                    <h6>XFibernet</h6>
                    <h1><b>XFibernet</b> Corporate Internet</h1>
                    {/* <p>Power your business with broadband that comes with everything you need</p> */}
                    <p>To work proficiently and viably, Small and Medium Enterprises require a safer and reliable network than retail broadband, which helps Enterprises to enjoy consistent Internet availability. </p>
                    <div className='corporate_btn'>
                        <a href='/Enquiry_form'>
                        <button className='c-connection'>Get Connection</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className='corporate'>
            <div className='container'>
                <div className='first_wrap'>
                    <div className='c-img'>
                        <img src='../assets/images/corporateline.jpg' alt='reload the page'/>
                    </div>
                    <div className='c-content'>
                        <h1>Are you using a broadband to business purpose and office</h1>
                        <p> Are you using the same broadband for your office work that you probably also have at your home to suceed what all you need today's work and all business environment, you need internet service that's ment to center to your all work & business needs and requirements. and also we have grade security,
                            our Asvish XFiberNet Technology gives toyou powerfull and superior broadband connectivity along with all customer required tools for better & fast work and business management  </p>
                    </div>
                </div>
                <div className='second_wrap'>
                    <div className='c-img'>
                        <img src='../assets/images/corporateline2.png' alt='reload the page'/>
                    </div>
                    <div className='c-content'>
                        <h1>Step into for the future of Unlimited Internet broadband plans</h1>
                        <p> Asvish XFiberNet broadband internet is support al you all in one solution, support today's designed it all give remote and mobile workforce our XFibernet broadband gives you a secure and highSpeed Connection to your day to day work and XFibernet broadband licensed tools for salesmans communication 24/7 and also we have superior collaboration. </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='offers'>
            <div className='container'>
                <div className='offers_bg'>
                    <div className='offers_main'>
                        <div className='first_row'>
                            <div className='first_row_main'>
                                <div className='first_row_heading'>
                                    <h1>A broadband solution with everything your business needs to grow</h1> 
                                </div>
                            </div>
                        </div>
                        <div className='second_row'>
                            <div className='flip_card'>
                                <div className='flip_card_inner'>
                                    <div className='flip_card_front'>
                                        <div className='flip_card_text'>
                                            <i id='icon' className="far fa-tachometer-fastest"/>
                                            <h5>HighSpeed Internet</h5>
                                        </div>
                                    </div>
                                    <div className='flip_card_back'>
                                        <h1>HighSpeed FiberNet</h1>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flip_card'>
                                <div className='flip_card_inner'>
                                    <div className='flip_card_front'>
                                        <div className='flip_card_text'>
                                            <i id='icon' className="fad fa-server"/>
                                            <h5>Secure DNS Server</h5>
                                        </div>
                                    </div>
                                    <div className='flip_card_back'>
                                        <h1>Secure DNS Server</h1>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flip_card'>
                                <div className='flip_card_inner'>
                                    <div className='flip_card_front'>
                                        <div className='flip_card_text'>
                                            <i id='icon' className="fad fa-chart-network"/>
                                            <h5>Bundled Static IP</h5>
                                        </div>
                                    </div>
                                    <div className='flip_card_back'>
                                        <h1>Bundled Static IP</h1>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flip_card'>
                                <div className='flip_card_inner'>
                                    <div className='flip_card_front'>
                                        <div className='flip_card_text'>
                                            <i id='icon' className="far fa-phone-plus"/>
                                            <h5>Unlimited Voice</h5>
                                        </div>
                                    </div>
                                    <div className='flip_card_back'>
                                        <h1>Unlimited Voice</h1>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flip_card'>
                                <div className='flip_card_inner'>
                                    <div className='flip_card_front'>
                                        <div className='flip_card_text'>
                                            <i id='icon' className="fal fa-infinity"/>
                                            <h5>Huge FUP</h5>
                                        </div>
                                    </div>
                                    <div className='flip_card_back'>
                                        <h1>Huge FUP</h1>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flip_card'>
                                <div className='flip_card_inner'>
                                    <div className='flip_card_front'>
                                        <div className='flip_card_text'>
                                            <i id='icon' className="fal fa-shield-alt"/>
                                            <h5>Integrated Device Security</h5>
                                        </div>
                                    </div>
                                    <div className='flip_card_back'>
                                        <h1>Integrated Device Security</h1>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* CorporateLine PriceList */}
        <section className='c-corporate'>
            <div className='container'>
                <div className='corp_price_heading'>
                    <h1>XFiberNet Corporate Internet Plans</h1>
                </div>
                <div className='corp_container'>
                    <OwlCarousel {...CorpPricelist}>
                    <div className='corp_pricecard'>
                        <div className='corp_img'>
                            <img src='../assets/images/pricebann/pricebann1.jpg' alt='/'/>
                        </div>
                        <div className='corp_plan_heading'>     
                            <span> AXF_40MBPS_ULD (Basic)</span>
                        </div>
                        <div className='corp_plan_details'>
                            <div className='corp_detail'>
                                <i id='c_icon' className="far fa-tachometer-fastest"/>
                                {/* <h6>Internet</h6> */}
                                <h5>UpTo 40MBPS</h5>
                            </div>
                            {/* <div className='corp_detail'>
                                <i id='c_icon' className="fad fa-wifi"/>
                                <h6>Internet</h6>
                            </div> */}
                            <div className='corp_limit'>
                                <i id='c_icon' className="fal fa-infinity"/>
                                {/* <h6>Unlimited Internet</h6> */}
                                <h5>Unlimited Internet</h5>
                            </div>
                        </div>
                        {/* <div className='corp_plan_info'>
                        </div> */}
                        <div className='corp_plan_price'>
                            <div className='corp_info'>
                                <h5>₹ <strong> 600 </strong></h5>
                                <p>/ Per month</p>
                            </div>
                            <div className='corp_title'>
                                <h6>+ Onetime charges ₹2000 (ex.Gst)</h6>
                            </div>
                        </div>
                        <div className='corp_buy_btn'>
                            <Link to='/'>
                                <button className='c_buy_btn'>Check Availability</button>
                            </Link>
                        </div>
                    </div>
                        {/* card2 */}
                    <div className='corp_pricecard'>
                        <div className='corp_img'>
                            <img src='../assets/images/pricebann/pricebann2.jpg' alt='/'/>
                        </div>
                        <div className='corp_plan_heading'>     
                            <span> AXF_60MBPS_ULD (Standard)</span>
                        </div>
                        <div className='corp_plan_details'>
                            <div className='corp_detail'>
                                <i id='c_icon' className="far fa-tachometer-fastest"/>
                                {/* <h6>Internet</h6> */}
                                <h5>UpTo 60MBPS</h5>
                            </div>
                            {/* <div className='corp_detail'>
                                <i id='c_icon' className="fad fa-wifi"/>
                                <h6>Internet</h6>
                            </div> */}
                            <div className='corp_limit'>
                                <i id='c_icon' className="fal fa-infinity"/>
                                {/* <h6>Unlimited Internet</h6> */}
                                <h5>Unlimited Internet</h5>
                            </div>
                        </div>
                        {/* <div className='corp_plan_info'>
                        </div> */}
                        <div className='corp_plan_price'>
                            <div className='corp_info'>
                                <h5>₹ <strong> 600 </strong></h5>
                                <p>/ Per month</p>
                            </div>
                            <div className='corp_title'>
                                <h6>+ Onetime charges ₹2000 (ex.Gst)</h6>
                            </div>
                        </div>
                        <div className='corp_buy_btn'>
                            <Link to='/'>
                                <button className='c_buy_btn'>Check Availability</button>
                            </Link>
                        </div>
                    </div>
                        {/* card3 */}
                        <div className='corp_pricecard'>
                        <div className='corp_img'>
                            <img src='../assets/images/pricebann/pricebann3.jpg' alt='/'/>
                        </div>
                        <div className='corp_plan_heading'>     
                            <span> AXF_100MBPS_ULD (Advanced)</span>
                        </div>
                        <div className='corp_plan_details'>
                            <div className='corp_detail'>
                                <i id='c_icon' className="far fa-tachometer-fastest"/>
                                {/* <h6>Internet</h6> */}
                                <h5>UpTo 100MBPS</h5>
                            </div>
                            {/* <div className='corp_detail'>
                                <i id='c_icon' className="fad fa-wifi"/>
                                <h6>Internet</h6>
                            </div> */}
                            <div className='corp_limit'>
                                <i id='c_icon' className="fal fa-infinity"/>
                                {/* <h6>Unlimited Internet</h6> */}
                                <h5>Unlimited Internet</h5>
                            </div>
                        </div>
                        {/* <div className='corp_plan_info'>
                        </div> */}
                        <div className='corp_plan_price'>
                            <div className='corp_info'>
                                <h5>₹ <strong> 600 </strong></h5>
                                <p>/ Per month</p>
                            </div>
                            <div className='corp_title'>
                                <h6>+ Onetime charges ₹2000 (ex.Gst)</h6>
                            </div>
                        </div>
                        <div className='corp_buy_btn'>
                            <Link to='/'>
                                <button className='c_buy_btn'>Check Availability</button>
                            </Link>
                        </div>
                    </div>
                    {/* card4 */}
                    <div className='corp_pricecard'>
                        <div className='corp_img'>
                            <img src='../assets/images/pricebann/pricebann4.jpg' alt='/'/>
                        </div>
                        <div className='corp_plan_heading'>     
                            <span> AXF_130MBPS_ULD (Premium)</span>
                        </div>
                        <div className='corp_plan_details'>
                            <div className='corp_detail'>
                                <i id='c_icon' className="far fa-tachometer-fastest"/>
                                {/* <h6>Internet</h6> */}
                                <h5>UpTo 130MBPS</h5>
                            </div>
                            {/* <div className='corp_detail'>
                                <i id='c_icon' className="fad fa-wifi"/>
                                <h6>Internet</h6>
                            </div> */}
                            <div className='corp_limit'>
                                <i id='c_icon' className="fal fa-infinity"/>
                                {/* <h6>Unlimited Internet</h6> */}
                                <h5>Unlimited Internet</h5>
                            </div>
                        </div>
                        {/* <div className='corp_plan_info'>
                        </div> */}
                        <div className='corp_plan_price'>
                            <div className='corp_info'>
                                <h5>₹ <strong> 600 </strong></h5>
                                <p>/ Per month</p>
                            </div>
                            <div className='corp_title'>
                                <h6>+ Onetime charges ₹2000 (ex.Gst)</h6>
                            </div>
                        </div>
                        <div className='corp_buy_btn'>
                            <Link to='/'>
                                <button className='c_buy_btn'>Check Availability</button>
                            </Link>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className='corp_pricecard'>
                        <div className='corp_img'>
                            <img src='../assets/images/pricebann/pricebann5.jpg' alt='/'/>
                        </div>
                        <div className='corp_plan_heading'>     
                            <span> AXF_150MBPS_ULD (Premium Plus)</span>
                        </div>
                        <div className='corp_plan_details'>
                            <div className='corp_detail'>
                                <i id='c_icon' className="far fa-tachometer-fastest"/>
                                {/* <h6>Internet</h6> */}
                                <h5>UpTo 150MBPS</h5>
                            </div>
                            {/* <div className='corp_detail'>
                                <i id='c_icon' className="fad fa-wifi"/>
                                <h6>Internet</h6>
                            </div> */}
                            <div className='corp_limit'>
                                <i id='c_icon' className="fal fa-infinity"/>
                                {/* <h6>Unlimited Internet</h6> */}
                                <h5>Unlimited Internet</h5>
                            </div>
                        </div>
                        {/* <div className='corp_plan_info'>
                        </div> */}
                        <div className='corp_plan_price'>
                            <div className='corp_info'>
                                <h5>₹ <strong> 600 </strong></h5>
                                <p>/ Per month</p>
                            </div>
                            <div className='corp_title'>
                                <h6>+ Onetime charges ₹2000 (ex.Gst)</h6>
                            </div>
                        </div>
                        <div className='corp_buy_btn'>
                            <Link to='/'>
                                <button className='c_buy_btn'>Check Availability</button>
                            </Link>
                        </div>
                    </div>
                    {/* card 6 */}
                    <div className='corp_pricecard'>
                        <div className='corp_img'>
                            <img src='../assets/images/pricebann/pricebann6.jpg' alt='/'/>
                        </div>
                        <div className='corp_plan_heading'>     
                            <span> AXF_200MBPS_ULD (Gigabit)</span>
                        </div>
                        <div className='corp_plan_details'>
                            <div className='corp_detail'>
                                <i id='c_icon' className="far fa-tachometer-fastest"/>
                                {/* <h6>Internet</h6> */}
                                <h5>UpTo 200MBPS</h5>
                            </div>
                            {/* <div className='corp_detail'>
                                <i id='c_icon' className="fad fa-wifi"/>
                                <h6>Internet</h6>
                            </div> */}
                            <div className='corp_limit'>
                                <i id='c_icon' className="fal fa-infinity"/>
                                {/* <h6>Unlimited Internet</h6> */}
                                <h5>Unlimited Internet</h5>
                            </div>
                        </div>
                        {/* <div className='corp_plan_info'>
                        </div> */}
                        <div className='corp_plan_price'>
                            <div className='corp_info'>
                                <h5>₹ <strong> 600 </strong></h5>
                                <p>/ Per month</p>
                            </div>
                            <div className='corp_title'>
                                <h6>+ Onetime charges ₹2000 (ex.Gst)</h6>
                            </div>
                        </div>
                        <div className='corp_buy_btn'>
                            <Link to='/'>
                                <button className='c_buy_btn'>Check Availability</button>
                            </Link>
                        </div>
                    </div>
                    <div className='corp_pricecard'>
                        <div className='corp_img'>
                            <img src='../assets/images/pricebann/pricebann7.jpg' alt='/'/>
                        </div>
                        <div className='corp_plan_heading'>     
                            <span> AXF_200MBPS_ULD (Gigabit Pro)</span>
                        </div>
                        <div className='corp_plan_details'>
                            <div className='corp_detail'>
                                <i id='c_icon' className="far fa-tachometer-fastest"/>
                                {/* <h6>Internet</h6> */}
                                <h5>UpTo 200MBPS</h5>
                            </div>
                            {/* <div className='corp_detail'>
                                <i id='c_icon' className="fad fa-wifi"/>
                                <h6>Internet</h6>
                            </div> */}
                            <div className='corp_limit'>
                                <i id='c_icon' className="fal fa-infinity"/>
                                {/* <h6>Unlimited Internet</h6> */}
                                <h5>Unlimited Internet</h5>
                            </div>
                        </div>
                        {/* <div className='corp_plan_info'>
                        </div> */}
                        <div className='corp_plan_price'>
                            <div className='corp_info'>
                                <h5>₹ <strong> 600 </strong></h5>
                                <p>/ Per month</p>
                            </div>
                            <div className='corp_title'>
                                <h6>+ Onetime charges ₹2000 (ex.Gst)</h6>
                            </div>
                        </div>
                        <div className='corp_buy_btn'>
                            <Link to='/'>
                                <button className='c_buy_btn'>Check Availability</button>
                            </Link>
                        </div>
                    </div>
                    
                    </OwlCarousel>
                </div>
            </div>
        </section>

        {/* Features */}
        <section className='features'>
            <div className='container'>
                <div className='features_heading'>
                    {/* <h6>XFiberNet</h6> */}
                    <h1> Corporate Internet Features and Benefits </h1>
                </div>
                <div className='features_main'>
                    <div className='features_card'>
                    <img draggable="false" src='../assets/images/ip.png' alt='/'/>
                        <h2>Static IP</h2>
                        <p>Stay assured of a stable network and access devices remotely, effectively with Static IP Pool.</p>
                    </div>
                    <div className='features_card'>
                        <img draggable="false" src='../assets/images/gigaspeed.png' alt='/'/>
                        <h2>Gigabit Speeds</h2>
                        <p>Our All plans comes with no data Caping. Enjoy unlimited internet at the fastest speeds</p>
                    </div>
                    <div className='features_card'>
                        <img draggable="false" src='../assets/images/plan_upgrade.png' alt='/'/>
                        <h2>One-step plan upgradation facilities</h2>
                        {/* <p>Get 24X7 support through Airtel Enterprise Hub-a digital self-serve portal that lets you manage all your services at one place.</p> */}
                    </div>
                    <div className='features_card'>
                        <img draggable="false" src='../assets/images/constant_network.png' alt='/'/>
                        <h2>Constant Network Connectivity</h2>
                        <p>Jitter-free High-Speed internet with 247 Omni-Channel support.</p>
                    </div>
                </div>
            </div>
        </section>
        <CorporatelineFaq/>
        <Footer/>

    </>
    )
}
