import React from 'react';
//import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import '../Styles/main.scss'
import '../Styles/responsive.scss'

export default function Support() {
  return (
    <>
    <section className='support'>
        <div className='container'>
            <div className='support_container'>
              <div className='support_wrapper'>
                <div className='sp-heading'>
                <h1>We’re here for you 24/7</h1>
                <h5>Get in touch with us any time of the Day</h5>
                <p>Superior Support and Availability are a staple here at AsvishFiberNet. <br/>
                If you have questions about your account or setting up your Internet connection, here you are 24x7. Our expert team is ready to answer your questions.</p>
                </div>
                <div className='support_cbox'>
                  {/* <h1>We can be reached at</h1> */}
                  <p className='secondtag'>For Question about Services and Support Please Call-Us:</p>
                  <a href='tel:9739343574'>+91-9739343574</a><br/> 
                  <a href='mailto:ceo.asvish@gmail.com'>ceo.asvish@gmail.com</a>
              </div>
              </div>
              <div className='sp-img'>
                  <img draggable="false" src='./assets/images/support1.png' alt='support'/>
              </div>
            </div>
        </div>
        
    </section>
    
    {/* terms and conditions */}
    <section className='support-terms'>
      <div className='container'>
          <div className='s-t-heading'>
            <h1>Terms and & Conditions</h1>
          </div>
          <div className='terms-contentbox'>
              <ul className='terms-note'>
                <li>
                  <span className='terms-star'>*</span>
                  A customer who pays online should not pay any amount to any FE or airtel executive - who commits reversal or do not have online CAF number which gets generated online.
                </li>
              </ul>
          </div>
      </div>
    </section>
    <Footer/>
  </>);
}
