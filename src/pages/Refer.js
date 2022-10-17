import React, { useRef } from 'react'
import '../Styles/main.scss';
import '../Styles/responsive.scss';
import emailjs from "emailjs-com"
import Footer from '../components/Footer';

export default function Refer() {

  //Mail Server
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i145xqq', 'template_u3hyxbp', form.current, 'user_FbndbGGsCjYN2MnNtCiIc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
      <>
      <section className='refer-banner'>
        <div className='container'>
          <div className='referbann-contentbox'>
            <h6>XFiberNet Refer & Earn</h6>
              <h1>Refer your Friend and Neighbours to XFiberNet and Enjoy Up-to 20% off on your next Bill</h1>
          </div>
        </div>
      </section>

      <section className='refer'>
          <div className='container'>
            <div className='refer-container'>
                <div className='refer-contentbox'>
                    <h1>Refer And Get Rewarded!</h1>
                    <p>Refer AsvishXFiberNet Internet/Broadband services to your friends or family and get a discount of ₹250 on your next bill.
                      We have a strong customer referral program Where we provide discounts and other benefits to You and Your Friend. After verified purchase,
                      both "Referrer and Referee" will receive a ₹250 discount against the bill payment.</p>
                    <h5>Assist us in connecting the world with the best fiber internet connection and tell the world about our fast and best Internet connection.</h5>
                </div>
                <div className='refer-imgbox'>
                  <img draggable="false" src='../assets/images/referfrd.png' alt='Refer-friend'/>
                </div>
            </div>
          </div>
      </section>

      {/* refer form  */}
      <section className='referform'>
        <div className='container'>
          <div className='form_mainwrapper'>
              <div className='first_form'>
              <div className='f-heading'>
                  <h1>My Details</h1>
                </div>
                  <form className='first' ref={form} onSubmit={sendEmail}>
                      <div className='firstformrow'>
                        <label>Registered Name  :</label>
                          <input type="text" className='form-control' name='submitName' 
                          maxLength="80" placeholder="*Enter Register Number" required />
                          {/* <span>Please Enter Your Name</span> */}
                      </div>
                      <div className='firstformrow'>
                        <label>Registered Mobile No. :</label>
                          <input type="text" className='form-control' name='submitMobileNum' 
                          maxLength="10" 
                       placeholder="*Enter Register Mobile Number" required />
                          {/* <span>Please Enter Your Name</span> */}
                      </div>
                      {/* <div className='secondform'>
                        <label>My Location :
                        <span className='form-required' title="This field is required"></span></label>
                        <select className='form-control' name='submitted-location'>
                            <option>Select Location</option>
                            <option value="1">Haveri</option>
                            <option value="2">Byadagi</option>
                            <option value="3">Shiggov</option>
                            <option value="4">Bankapur</option>
                            {/* <option value="5">Haveri</option>
                            <option value="6">Haveri</option> 
                        </select>
                      </div> */}
                      <div className='second_form'>
                <div className='f-heading'>
                    <h1>Friend Who Needs Internet Connection</h1>
                </div>
                  <div className='secondformrow'>
                    <label >Friend Name</label>
                      <input type="text" className="form-control" 
                      name='FriendName' placeholder='*Enter Your Friends/Neighbours Name'/>
                  </div>
                  <div className='secondformrow'>
                      <label>Friend Mobile Number</label>
                      <input required="required" type="text" 
                      className="form-control" name='submitted-friendsmobile'
                      maxLength="10" placeholder="*Enter Your Friend's Mobile Num." />
                  </div>
                  <div className='sendBtn'>
                        <button className='Referbtn'>Submit</button>
                  </div>
                </div>
              </form>
              </div>
              {/* <div className='second_form'>
                <div className='f-heading'>
                    <h1>Friend Who Needs Internet Connection</h1>
                </div>
                <form  className='secondaryform'>
                  <div className='secondformrow'>
                    <label >Friend Name</label>
                      <input type="text" className="form-control" 
                      name='FriendName' placeholder='*Enter Your Friends/Neighbours Name'/>
                  </div>
                  <div className='secondformrow'>
                      <label>Friend Mobile Number</label>
                      <input required="required" type="text" 
                      className="form-control" name='submitted[friends_mobile]'
                      maxLength="10" placeholder="*Enter Your Friend's Mobile Num." />
                  </div>
                  <div className='sendBtn'>
                        <button className='Referbtn'>Submit</button>
                  </div>
                </form>
              </div> */}
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      {/* <section className='refer-terms'>
        <div className='container'>
            <div className='referterms-heading'>
                <h1>Terms and Conditions</h1>
            </div>
            <ul>
              <li>
                <span className='referdot'>*</span>
              </li>
            </ul>
        </div>
      </section> */}

      <Footer/>
    </>
  );
}
