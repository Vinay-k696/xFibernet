import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navigation.scss'
import Dropdown from './Dropdown'
import '../Styles/responsive.scss'

export default function Navigation() {
    //navigaction dropdown 
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    //mobile view
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
        {/* mobilenav */}
        <nav className='mb-nav'>
        <div className='mobilenav'>
            <div className='mobilenavlogo'>
                <a href='/'>
                    <img src='../assets/images/mobilelogo.png' alt='mobilelogo'/>
                </a>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}/>
            
            <ul className={clicked ? "menu-list" : "menu-list close"}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                {/* mobiledropdown */}
                <li className='m-dropdown'>
                    <a href="/Leasedline">LeasedLine</a>    
                </li>
                <li>
                    <a href="/Xstream_fibernet">XFiberNet</a>
                </li>
                <li>
                    <a href="/Corporate-line">Corporate Internet</a>
                </li>
                <li>
                    <a href="/AirFiber">AirFiber</a>
                </li>
                <li>
                    <a href="/Plans">Plans</a>
                </li>
                
                <li>
                    <a href="/Support">Support</a>
                </li>
                {/* <li>
                    <a href="/Careers">Careers</a>
                </li> */}
                <li>
                    <a href="/Faqs">Faq's</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <a href="/GetConnection">
                        <button className='mbnv-btn'>Get Connection</button>
                    </a>
                </li>
                <li>
                    <a href="https://live.asvish.net/customer_portal">
                        <button className='mbnv-btn'>LogIn</button>
                    </a>
                </li>
                <ul className='social_ul'>
                    <li>
                        <a href='/home'>
                        <i id='m-social' className="fab fa-whatsapp"/>
                        </a>
                    </li>
                    <li>
                        <a href='/home'>
                        <i id='m-social' className="fab fa-facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href='/home'>
                        <i id='m-social' className="fab fa-instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href='/home'>
                        <i id='m-social' className="fab fa-twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href='/home'>
                        <i id='m-social' className="fab fa-linkedin"/>
                        </a>
                    </li>
                </ul>
                <li className='helpline'>
                    <a href='/Support'>
                    <i id='helpline-icon' className="far fa-user-headset"/>
                        Helpline
                    </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        {/* desktopmenu */}
        <header className='topbar'> {/*Topbarnav*/}
            <div className='container'>
                <div className='top_menu'>
                    <ul id='top_nav'>
                        <li>
                            <Link to="/About"> AboutUs </Link>
                        </li>
                         <li>
                             <Link to="/Faqs">Faq's</Link>
                          </li>
                        <li>
                            <Link to="/Support"> Support </Link>
                        </li>
                        <li>
                            <Link to="/"> Become a Franchise </Link>
                        </li> 
                    </ul>
                </div>
            </div>
        {/* main nav */}
       <nav>
           <div className='container'>
               <div className='main_nav'>
               <div className='logo'>
                    <Link to="/">
                    <img className="logo" src="/assets/images/logo1.png" alt="Logo" />
                    </Link>
                </div>
                <div className='navigaction'>
                    <ul id='main-nav'>
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        {/* Dropdown */}
                        <li className='dropdown_nav'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            >
                            <Link to="/"> Business </Link>
                            { dropdown && <Dropdown/>}
                        </li>
                        {/* Dropdown end */}
                        <li
                        className='nav-links'>
                            <Link to="/Xstream_fibernet"> XFibernet </Link>
                        </li>
                        <li>
                            <Link to="/Airfiber"> XAirFibernet </Link>
                        </li>
                        <li>
                            <Link to="Plans"> Plans </Link>
                        </li>
                        <li>
                            <Link to="/HomeCamera"> Home Cameras </Link>
                        </li>
                        <li>
                            <Link to="/Contact"> Contact </Link>
                        </li>
                        <li>
                        <div className='nav_btns'>
                        <a href="https://live.asvish.net/customer_portal" >
                            <button className='login-btn'> LogIn </button>
                        </a>
                    </div>
                        </li>
                        <li>
                        <div className='nav_btns'>
                        <a href="/GetConnection">
                            <button className='btn-primary'> New Connection </button>
                        </a>
                        </div>
                        </li>
                    </ul>
                </div>
               </div>
           </div>
       </nav>
       </header>
    </>
    )
}


