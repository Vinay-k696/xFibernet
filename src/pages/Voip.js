import React from 'react'
import '../Styles/main.scss'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Voip() {
    return (
        <>
        <section className='voip'>
           <div className='container'>
                <div className='voip_heading'>
                   <h6>VOIP Services</h6>
                   <h1>Connect the world</h1>
                   <p>Staying connected and within reach with your global clients is your top priority?? 
                    The most sustainable way to make sure your business runs 247 and connects globally is cloud based VoIP.</p>
                    
                <div className='voip-btn'>
                    <Link to="/">
                        <button className='voip_btn'>Get Started</button>
                    </Link>
                </div>
                </div>
           </div>
       </section>
        {/* benfits */}
        <section className='voip_benfits'>
            <div className='container'>
                <div className='voip_ben_heading'>
                    {/* <h6></h6> */}
                    <h1>Voip Benefits</h1>
                </div>
                <div className='benfit_container'>
                    <div className='voip_card'>
                        <img draggable="false" src='../assets/images/install.png' alt='install'/>
                        <div className='service_heading'>
                            <h1>Ease of installation and Configuraction & Maintennance </h1>
                            <p>VoIP is easy to set up and configure to use for everyday personal and business calling, as long as you have a working internet connection, you can enjoy making calls over the internet.</p>
                        </div>
                    </div>
                    <div className='voip_card'>
                        <img draggable="false" src='../assets/images/billing.png' alt='install'/>
                        <div className='service_heading'>
                            <h1>Minute Based Billing </h1>
                            <p>VoIP is easy to set up and configure to use for everyday personal and business calling, as long as you have a working internet connection, you can enjoy making calls over the internet.</p>
                        </div>
                    </div>
                    <div className='voip_card'>
                        <img draggable="false" src='../assets/images/help.png' alt='install'/>
                        <div className='service_heading'>
                            <h1>Better Audio and Crystal Clear Voice </h1>
                            <p>VoIP is easy to set up and configure to use for everyday personal and business calling, as long as you have a working internet connection, you can enjoy making calls over the internet.</p>
                        </div>
                    </div>
                    <div className='voip_card'>
                        <img draggable="false" src='../assets/images/network.png' alt='install'/>
                        <div className='service_heading'>
                            <h1>Network Flexibility </h1>
                            <p>VoIP is easy to set up and configure to use for everyday personal and business calling, as long as you have a working internet connection, you can enjoy making calls over the internet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* How does it work */}
       <section className='working_voip'>
           <div className='container'>
               <div className='working_heading'>
                    <h1>How it Works ?</h1>
               </div>
                <div>
                </div>  
           </div>
       </section>

       <section className='features'>
           <div className='container'>
            <div className='feature_heading'>
                <h1> VoIp Features</h1>
            </div>
            <div className='features_contaiiner'>
                <div className='features_cards'>
                <i id='features-icon' className="fad fa-wifi"/>
                <h1>Voip Saves</h1>
                <p>VoIP termination rates, installation costs are minimal.</p>
                </div>
                <div className='features_cards'>
                <i id='features-icon' className="fad fa-chart-scatter"/>
                <h1>VoIP Scales</h1>
                <p>VoIP systems allow you to easily aggrandizing or downsizing.</p>
                </div>
                <div className='features_cards'>
                <i id='features-icon' className="fas fa-chart-network"/>
                <h1>VoIP Integrates</h1>
                <p>VoIP easily integrates with a wide variety of existing business systems.</p>
                </div>
            </div>
           </div>
       </section>

       <section className='voipfaq'>
            <div className='container'>
                <div className='voip_heading'>
                    <h1>Learn everything about VoIP with our VoIP FAQ</h1>
                </div>
                <h1>Faq</h1>
            </div>
       </section>

       <Footer/>
    </>  
    )
}
