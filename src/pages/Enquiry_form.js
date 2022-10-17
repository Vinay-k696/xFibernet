import React, { useRef } from 'react'
import '../Styles/responsive.scss'
import '../Styles/main.scss'
//import { Link } from 'react-router-dom'
import emailjs from "emailjs-com"
import Footer from '../components/Footer'


export default function Enquiry_form() {

    //Mail server
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5erpwfc', 'template_m3dsu2r', form.current, 'user_hUegBi1QQasxMBON2iQ7J')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

  return (
        <>
    <section className='get_enq'>
        <div className='container'>
            <div className='enq_container'>
                <div className='enqmainform'>
                    <div className='enq-headingbox'>
                        <i className="fa-solid fa-circle-check"/>
                        <h1>Contact Details</h1>
                    </div>
                    <div className='enq-formwrapper'>
                        <form className='enq-mainform' autoComplete='off' ref={form} onSubmit={sendEmail}>
                            <div className='first-form'>
                            <div className='form_inner'>
                                <label>Full Name</label>
                            <input type="text" name='enq_fullname' placeholder='* Enter Name' required/>
                            </div>
                            <div className='form_inner'>
                                <label>Company Name</label>
                            <input type="text" name='enq_company' placeholder='* Enter Company Name' required/>
                            </div>
                            <div className='form_inner'>
                                <label>Company Email Address</label>
                            <input type="email" name='enq_email'  placeholder='* Enter Company Email ' required/>
                            </div>
                            <div className='form_inner'>
                                <label>Company Mobile Number</label>
                            <input type="text" name='enq_companyName' maxLength="10"  placeholder='* Enter Mobile Number' required/>
                            </div>
                        </div>
                        <div className='second-form'>
                            <div className='secondpart-headingbox'>
                            <i className="fa-solid fa-circle-check"/>
                                <h1>installaction Address</h1>
                            </div>
                            <div className='second-form-main-wrapper'>
                            <div className='form_inner-secondform formgrid '>
                                <label>Installation Address</label>
                                <input name='enq_installation' type="text" placeholder='*Enter Installation Address' required />
                            </div>
                            <div className='form_inner-secondform'>
                                <label>City</label>
                                <input className='form-address form-address' name='enq_city'
                                type="text" placeholder='*Enter City' required />
                            </div>
                            {/* <div className='form_inner-secondform'>
                                <label>Fill in details to check available plans in your area.</label>
                                <select className='form_fill'>
                                    <option>Select Bandwidth</option>
                                    <option name="5Mbps">5 Mbps</option>
                                    <option name="8Mbps">8 Mbps</option>
                                    <option name="10Mbps">10 Mbps</option>
                                    <option name="15Mbps">15 Mbps</option>
                                    <option name="20Mbps">20 Mbps</option>
                                    <option name="25Mbps">25 Mbps</option>
                                    <option name="30Mbps">30 Mbps</option>
                                    <option name="35Mbps">35 Mbps</option>
                                    <option name="40Mbps">40 Mbps</option>
                                    <option name="45Mbps">45 Mbps</option>
                                    <option name="50Mbps">50 Mbps</option>
                                    <option name="60Mbps">60 Mbps</option>
                                    <option name="70Mbps">70 Mbps</option>
                                    <option name="80Mbps">80 Mbps</option>
                                </select>
                            </div> */}
                            </div>
                            <div className='form-submit'>
                            <button className="connection-btn js-form-submit" type="submit" id="submit" name="connectionbtn" value="submit">Submit</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
