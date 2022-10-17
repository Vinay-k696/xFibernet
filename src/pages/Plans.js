import React from 'react'
import Footer from '../components/Footer'
import '../Styles/pricelist.scss'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default function Plans() {

    const fiberPlans = {
        autoplay: true,
        autoplayTimeout: 4100,
        autoplayHoverPause:true,
        items:3,
        margin: 16,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items:1,
            },
            768:{
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    }

    return (
        <>
        <section className='p-list'>
          <div className='container'>
            <div className='p-heading'>
                <h6>XFiberNet Plans</h6>
                <h1>XFiberNet BroadBand Plans</h1>
            </div>
            <div className='monthly'>
            <h1>Monthly Plan</h1>
            <div className='p-wrapper'>
                <OwlCarousel {...fiberPlans}>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Student Plan</h6>
                            <h1>Up To 30MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 30 Days </h4>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹399</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Basic Plan</h6>
                            <h1>Up To 50MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span className=''>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 30 Days </h4>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹499</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Work From Home Plan</h6>
                            <h1>Up To 75MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span className=''>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 30 Days </h4>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹699</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Streaming Plan</h6>
                            <h1>Up To 100MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-ott'>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 30 Days </h4>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹799</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Professional Plan</h6>
                            <h1>Up To 200MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 30 Days </h4>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹999</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Gaming Plan</h6>
                            <h1>Up To 300MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 30 Days </h4>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹1399</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                </OwlCarousel>
            </div>
        </div>
        {/* 3 Month Plans */}
        <div className='quarterly'>
            <h1>Quarterly Plans</h1>
            <div className='p-wrapper'>
                <OwlCarousel {...fiberPlans}>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Student Plan</h6>
                            <h1>Up To 30MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 90 Days </h4>
                            <small className='ex_benfit'>+10 Days</small>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹1197</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Basic Plan</h6>
                            <h1>Up To 50MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span className=''>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 90 Days </h4>
                            <small className='ex_benfit'>+10 Days</small>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹1497</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Work From Home Plan</h6>
                            <h1>Up To 75MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span className=''>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 90 Days </h4>
                            <small className='ex_benfit'>+10 Days</small>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹2097</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Streaming Plan</h6>
                            <h1>Up To 100MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 90 Days </h4>
                            <small className='ex_benfit'>+10 Days</small>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹2397</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Professional Plan</h6>
                            <h1>Up To 200MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 90 Days </h4>
                            <small className='ex_benfit'>+10 Days</small>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹2997</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-details'>
                        <div className='p-info'>
                            <h6>Gaming Plan</h6>
                            <h1>Up To 300MBPS</h1>
                        </div>
                    </div>
                    <div className='p-benfits'>
                        <div className='p-ben'>
                            <span>Monthly Data</span>
                            <h4>Unlimited Data</h4>
                        </div>
                        <div className='p-validity'>
                            <span>Validity</span>
                            <h4> 90 Days </h4>
                            <small className='ex_benfit'>+10 Days</small>
                        </div>
                    </div>
                    <div className='p-footer'>
                        <div className='p-price'>
                            <h6>Monthly Rental</h6>
                            <div>
                            <h3>₹4197</h3>
                            <span>+ Gst</span>
                            </div>
                        </div>
                        <div className='p-btns'>
                            <Link to="">
                                <button className='buy-btn'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
                </OwlCarousel>
            </div>
        </div>
        </div>
      </section>
      {/* end price section */}

        {/* Terms and Conditions */}
        <section className='terms'>
            <div className='container'>
                <div className='terms_heading'>
                    <h1>Terms and Conditions</h1>
                </div>
                <div className='terms_container'>
                    <ul>
                        <li>All Prices are Exclusive of 18% GST (18% GST applicable on all Plans)</li>
                        <li>Non Refundable One Time Installation Charges 2000+18% GST = ₹2360</li>
                        <li>3 Antenna 5dbi Dual Band WiFi Router Starts from 1000+18% GST = ₹1180</li>
                        <li>4 Antenna 5dbi Dual Band WiFi Router Starts from 1100+18% GST = ₹1298</li>
                        <li>Optical ONU Modem will be recollected by AsvishXFiberNet Team after Cancellation or If not Recharge more then 60 Days</li>
                        <li>100 Mbps Above Plans need Gigabit Port at Customer End, Symmetric Upload and Donwload Speed</li>
                        <li>Minimum 3 Months Lock in Period</li>
                        <li>1 Hour Estimated Time for Network Restoration, 99.99% UpTime Network</li>
                        <li>1 Day Connection Delivery Time.</li>
                    </ul>
                </div>
            </div>
        </section>

      {/* more informaction section */}
      <section className='more-info'>
          <div className='container'>
            <div className='moreinfo-heading'>
                <h1>More Information</h1>
            </div>
            <div className='moreinfo-container'>
                <div className='more-btn'>
                    <div>
                        <a href="/Semi_AnnualPlans">
                        <button className='btn-more'>Semi-Annual Plans</button></a>
                    </div>
                    <div>
                        <a href="/AnnualPlans">
                        <button className='btn-more'>Annual Plans</button></a>
                    </div>
                    <div>
                        <a href="/">
                        <button className='btn-more'>AirFiber Plans</button></a>
                    </div>
                    <div>
                        <a href="/">
                        <button className='btn-more'>Terms and Conditions</button>
                        </a></div>
                    </div>
                </div>
          </div>
      </section>
        <Footer/>
    </>
    )
}
