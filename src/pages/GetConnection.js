import React, { useRef } from 'react'
//import { Link } from 'react-router-dom'
import '../Styles/GetConnection.scss'
import '../Styles/responsive.scss'
import Footer from '../components/Footer'
import emailjs from "emailjs-com"


export default function GetConnection() {

    //Mail server
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i145xqq', 'template_m73jff7', form.current, 'user_FbndbGGsCjYN2MnNtCiIc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

  return (
        <>
        <section className='get_connection'>
            <div className='container'>
                <div className='get_connection_wrapper'>
                    <div className='other_info'>
                        <div className='getconnectionimg'>
                            <img src='../assets/images/contact.png' alt='/' draggable="false"/>
                        </div>
                        <div className='get-contentbox'>
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className='form_Sections'>
                        <div className='form_heading'>
                            <h1> Get New Connection </h1>
                        </div>
                        <div className='connection_container'>
                            <form className='getconnection_form' ref={form} onSubmit={sendEmail}>
                                <div className='inner_div'>
                                    <div className='form-control'>
                                        <label>Name</label>
                                        <input className="form-text form-control"
                                        type="text" name="Name" placeholder='*Your Name' required/>
                                    </div>
                                    <div className='form-control'>
                                    <label>Mobile Number</label>
                                        <input className="form-text form-control"
                                        type="text" name="MobileNum"
                                        placeholder="Enter Your mobile Number" 
                                        maxLength="10" required />
                                    </div>
                                    <div className='form-control'>
                                        <label> Email </label>
                                        <input className="form-email form-control" 
                                        type="email"  name="Email" placeholder='*Your Email' required/>
                                    </div>
                                    {/* <div className='form-control'>
                                    <label>Select Product</label>
                                    <select className='form-control' name='product'>
                                        <option value="Wireless_broadband">Select Broadband</option>
                                        <option value="Wireless_broadband" name="Wireless_broadband">Wireless Broadband</option>
                                        <option value="FiberBroadband" name="FiberBroadband">Fiber Broadband</option>
                                    </select>
                                    </div> */}
                                    <div className='form-control'>
                                    <label>Address</label>
                                    <input className='form-address form-address' name='address'
                                    type="text" placeholder='*Enter Installation Address' />
                                    </div>
                                    {/* <div className='form-control'>
                                    <label>Installation Address</label >
                                    <input className='form-installaction form-address'
                                    type="text" size="60"maxLength="254" placeholder='@Enter install'/>
                                    </div> */}
                                    <div className='form-control'>
                                    <button className="connection-btn js-form-submit" type="submit" id="submit" name="connectionbtn" value="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <ContactComponent/> */}
        <Footer/>
    </>
    );
}
