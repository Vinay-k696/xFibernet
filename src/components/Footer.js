import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.scss';
import '../Styles/responsive.scss'


export default function Footer() {
    return (
        <>
        <footer>
            <div className='container'>
                <div className='footer_wrapper'>
                <div className='footer_about'>
                    <img className='footer_img' src='/assets/images/logo1.png' alt='footer_Logo'/>
                        <div className='footer_info'>
                            <p className='footer_adrss'>
                                #4nd Floor, Megha Residency, MG Circle, Opp SP Office Haveri 581110
                            </p> 
                            <p>ceo.asvish@gmail.com</p>    
                            <p>+91-9739343574</p>    
                            <p>+91-6361747719</p>    
                        </div>
                </div>
                    <div className='footer_list'>
                        <h4 className='footer_heading'>Home</h4>
                            <ul>
                                <li><Link to='/Plans'> Check Availability</Link></li>
                                <li><Link to='https://live.asvish.net/customer_portal'> Change My Plans </Link></li>
                                <li><Link to='https://live.asvish.net/customer_portal'> Customer Portal </Link></li>
                                <li><Link to='https://live.asvish.net/customer_portal'> PayBills </Link></li>
                                <li><a href='http://asvishxfibernet.speedtestcustom.com' target="blank"> Run Internet Speed Test</a></li>
                                <li><a href='http://asvishxfibernet.speedtestcustom.com' target="blank"> About Us</a></li>
                                <li><a href='http://asvishxfibernet.speedtestcustom.com' target="blank"> Careers</a></li>
                            </ul>
                    </div>
                    <div className='footer_list'>
                        <h4 className='footer_heading'>Quick Links</h4>
                            <ul>
                                <li><Link to=''> Referal a Friend </Link></li>
                                <li><Link to='/Plans'> Plans </Link></li>
                                <li><Link to=''> Service in my Area </Link></li>
                                <li><Link to='https://live.asvish.net/customer_portal'> Submit Feedback </Link></li>
                                <li><Link to='https://live.asvish.net/customer_portal'> Customer Support </Link></li>  
                                <li><Link to='/GetConnection'> Leased Line </Link></li>
                                <li><Link to='/GetConnection'> Corporate Internet Plans </Link></li>
                            </ul>
                    </div>
                    
                    <div className='footer_list'>
                        <h4 className='footer_heading'>Support</h4>
                            <ul>
                                <li><Link to='/XstreamFibernet'>Need Help</Link></li>
                                <li><a href='/Ott'>FAQs</a></li>
                                <li><a href='/AirFiber'>Wireless Broadband</a></li>
                                <li><Link to='/XstreamFibernet'>Fiber Broadband</Link></li>
                                <li><a href='http://asvishxfibernet.speedtestcustom.com' target="blank"> Check Internet Speed</a></li>
                                {/* <li><Link to=''>Cloud Storage</Link></li> */}
                                <li><a href='/Ott'>OTT IPTV</a></li>
                                <li><Link to='/Voip'>Voip</Link></li>
                                
                            </ul>
                    </div>
                    <div className='footer_list'> 
                        <h4 className='footer_heading'>About</h4>
                            <ul>
                                <li><Link to=''>Who we are</Link></li>
                                <li><Link to=''>Careers</Link></li>
                            </ul>
                    </div>
                </div> 
            </div>
            <div className='footer_end'>
                <div className='container'>
                    <div className='x-end'>
                    <img className='footer-end' src='/assets/images/logo1.png' alt='Footer-Logo' />
                    <h4 className='copyright'> &copy; 2022 AsvishXFibernet</h4>
                    <div className='social-media'>
                        <ul className='flex'>
                            <li><Link to='#'>
                            <i className="fab fa-facebook"></i>
                            </Link></li>
                            <li><a href='https://www.instagram.com/asvishxfibernet/'>
                            <i className="fab fa-instagram"></i>
                            </a></li>
                            <li><a href='https://in.linkedin.com/in/vishal-sp-ba773621a/es?trk=people-guest_people_search-card'>
                            <i className="fab fa-linkedin"></i>
                            </a></li>
                            <li><a href='https://twitter.com/AsvishXFiberNet'>
                            <i className="fab fa-twitter-square"></i>
                            </a></li>
                            </ul>
                        </div>
                    </div>
                </div>     
            </div>
        </footer>
    </>
    )
}
