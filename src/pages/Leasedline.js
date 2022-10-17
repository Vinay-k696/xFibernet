import React from 'react'
import '../Styles/main.scss'
//import BlogCarousel from '../components/BlogCarousel'
import Footer from '../components/Footer'
import LeasedlineFaq from './LeasedlineFaq'
import '../Styles/responsive.scss'


export default function Leasedline() {
    return (
        <>
        <section className='enterprise'>
            <div className='container'>
                <div className='enterprise_heading'>
                    <h5> XfiberNet Leasedline </h5>
                    <h1> XFiberNet Leased-Line </h1>
                    <p>Strong and Secured Dedicated Leased-Line Connectivity for your Business</p>
                    <div className='buy_btn'>
                        <a href="/Enquiry_form">
                            <button className='btn-leasedline'> Get Connection </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    
        <section className='leasedline_content'>
            <div className='container'>
                <div className='l-wrap'>
                    <div className='l-imagebox'>
                        <img src='../assets/images/leasedline.png' alt='leasedline banner'/>
                    </div>
                    <div className='l-content'>
                        <h1>Get AsvishXFiberNet Leased-Line Connection for your Business</h1>
                        <p> Slow and Interrupted Internet Connectivity is detrimental for any business. organizations ought to have a more reliable, quick, continuous, and stable Internet connection which will help in the smooth working, development, and revenue generation for the business. Because of certain conditions, numerous organizations pick slow and unreliable Internet connections over a reliable one which leads them to compromise in the performance and the experience of the client.
                            AsvishXFibernet Enterprise Leased Line Services is intended for the business which has more than 20 employees and ensures that organizations get access to their own higher speed internet, Faster uploads and downloads, Good Reliability, and Better Support. </p>
                    </div>
                </div>
            </div>
        </section>
        {/* end section 1 */}
        {/* start section 2 */}
        <section className='network_section'>
            <div className='container'>
                <div className='network_wrap'>
                    <div className='network_txtbox'>
                        <h1>Accelerate your business growth with a High-speed AsvishXfiberNet LeasedLine connection</h1>
                        <p>AsvishXFibernet Broadband provides High-speed Leased-Line Internet services. The solution uses cost-effective, reliable, direct internet connections to help you seamlessly access the High-BrandWidth applications and deliver a contention-free network. You can experience Highspeed connectivity, End-to-End SLA commitment, and improved productivity help you maintain consistent performance, security, and reliability across your sites.</p>
                    </div>
                    <div className='network_imagebox'>
                        <img src='../assets/images/leasedline1.png' alt='leasedline banner'/>
                    </div>
                </div>
            </div>
        </section>

        
        

        {/* advantages of leasedline */}
        <section className='ll-benfits'>
            <div className='container'>
                <div className='benfits_contentbox'>
                    <h1><b>XFiberNet Leasedline</b> Internet Advantages for your business</h1>
                </div>
                <div className='benfits_main-wrap'>
                    <div className='blocks'>
                        <span><i class="fas fa-globe-americas"></i></span>
                        <h2>Fastest and Consistent Internet Speed</h2>
                    </div>
                    <div className='blocks'>
                        <span><i class="fas fa-tachometer-fastest"></i></span>
                        <h2>Lowest Latency</h2>
                    </div>
                    <div className='blocks'>
                        <span><i class="fas fa-user-shield"></i></span>
                        <h2>24x7 Uninterrupted Network Connectivity</h2>
                    </div>
                    <div className='blocks'>
                        <span><i class="fas fa-server"></i></span>
                        <h2>Committed Uptime and Latency</h2>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className='ll-benfits'>
            <div className='container'>
                <div className='benfits_contentbox'>
                    <h1><b>XFiberNet Leasedline</b> Internet Advantages for your business</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                </div>
                <div className='benfits_main-wrap'>
                    <div className='blocks'>
                        <span><i class="fas fa-globe-americas"></i></span>
                        <h2>Reliable high-speed Internet</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className='blocks'>
                        <span><i class="fas fa-tachometer-fastest"></i></span>
                        <h2>Super-fast access</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className='blocks'>
                        <span><i class="fas fa-user-shield"></i></span>
                        <h2>Secure connectivity</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    {/* <div className='blocks'>
                    <span></span>
                        <h2>Maximise Connectivity Reach</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div> 
                </div>
            </div>
        </section> */}

        {/* get Leasedlineform */}

        {/* <section className='get_connection'>
            <div className='container'>

            </div>
        </section> */}

        {/* questions leasedlines faq */}
        {/* <section className='leasedline_faqs'>
            <div className='container'>
                <div className='l-faq-heading'>
                    <h1></h1>
                </div>
            </div>
            </section> */}
        {/* <BlogCarousel /> */}

        {/* features */}
        <section className='leasedline_benfits'>
            <div className='container'>
                <div className='l-benfit-heading'>
                    <h5> XFibernet Leasedline </h5>
                    <h1>Business advantages with AsvishXFiberNet</h1>
                </div>
                <div className='business_adv'>
                    <div className='business_advcard'>
                        <h1>Dedicated BrandWidth</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </section> 

        <LeasedlineFaq />

        <Footer />
    </>
    )
}