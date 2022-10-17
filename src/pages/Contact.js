import React, { useRef } from 'react'
import '../Styles/main.scss'
import Footer from '../components/Footer'
//import MapComponent from './MapComponent'
import emailjs from "emailjs-com"
import '../Styles/responsive.scss'

export default function Contact() {
    //contact mail
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
       <section className='contact_banner'>
            <div className='container'>
                <div className='contact_textbox'>
                    <h6>XFiberNet</h6>
                    <h1>Contact Us</h1>
                </div>
            </div>
       </section>
       {/* form section */}
       <section className='contact_form'>
           <div className='container'>
                <div className='form_container'>
                    <div className='form_main_container'>
                        <div className='form_main'>
                           <div className='form_header'>
                               <h1>Contact Us</h1>
                               <form className='form_body' ref={form} onSubmit={sendEmail} autoComplete='off'>
                                   {/* <div className='main_form'>
                                   </div> */}
                                   <div className='form-group'>
                                        <label>Name</label>
                                        <input type="text" name="Cname" className="form-control" placeholder="Enter Name" required/>
                                        {/* <small className='errors'>Please enter a valid name</small> */}
                                    </div>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type="email" name='CEmail' className='cemail' placeholder='Enter Your Email' required/>
                                        {/* <small className='errors'>Please enter a valid name</small> */}
                                    </div>
                                    <div className='form-group'>
                                        <label>Mobile Number</label>
                                        <input type="tel"  maxLength="10" name="Ctele" className='ctele-1' placeholder='+91-xxx-xxx-xxxx' required/>
                                        {/* <small className='errors'>Please enter 10 digits mobile number</small> */}
                                    </div>
                                    <div className='form-group'>
                                        <label>Address</label>
                                        <input type="text" name='Caddress' className='caddress' placeholder='Enter Your Address' required/>
                                    </div>
                                    {/* <div className='form-group'>
                                        <label For="citys">City</label>
                                        <select className="ccity">
                                            <option className='options' value="Haveri">Haveri</option>
                                            <option className='options' value="Hubli">Hubli</option>
                                            <option className='options' value="Bankapura">Bankapura</option>
                                        </select>
                                    </div> */}
                                   {/* <div className='form-group'>
                                        <label>Mobile Number</label>
                                        <input type="tel" id='tele' className='ctele' placeholder='+91-xxx-xxx-xxxx' required/>
                                    </div> */}
                                    <div className='checkbox'>
                                        <input type="checkbox" name='iagree' className='ciagree' id='iagree'  required />
                                        <label>I agree to <a href="/" className='terms'> All Terms and Conditions</a></label>
                                    </div>
                                    <div className='form-group'>
                                    <button className="btn-form-submit btn-block">Submit</button>
                                    </div>
                               </form>
                           </div>
                        </div>
                    </div>
                    <div className='contact_info'>
                        {/* <maps/> */}
                        {/* <MapComponent/> */}
                        <div className='get-intouch'>
                        <div className='get-touch'>
                            <h1>Get in Touch</h1>
                            <p> Our team is here to help.</p>
                        </div>
                            <div className='get_card'>
                                {/* <div className='visit_div'>
                                <i id='marker' className="fas fa-map-marker-alt"/>
                                    <div>
                                        <h1>Visit Us:</h1>
                                        <p>#4nd Floor, Megha Residency, MG Circle, Opp SP Office Haveri 581110</p>
                                    </div>
                                </div> */}
                                <div className='visit_div'>
                                <i id='marker' className="fas fa-location-circle"/>
                                    <div>
                                        <h1>Visit Us:</h1>
                                        <p className='address'>#4nd Floor, Megha Residency, MG Circle, Opp SP Office Haveri 581110</p>
                                    </div>
                                </div>
                                <div className='call_div'>
                                <i id='marker' className="fas fa-phone-alt"/>
                                    <div>
                                        <h1>Call Us:</h1>
                                        <p>
                                        <a className="tag" href='callto:9739343574'>+91-973-934-3574</a>
                                        </p>
                                    </div>
                                </div>
                                <div className='map_div'>
                                <i id='marker' className="fas fa-envelope-open"/>
                                    <div>
                                        <h1>Mail Us:</h1>
                                        <p>
                                        <a className="tag" href='mailto:ceo.asvish@gmail.com'>ceo.asvish@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </section>
       <Footer/>
    </>
    )
}




