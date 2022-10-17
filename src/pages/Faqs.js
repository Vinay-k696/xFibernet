import React from 'react'
//import { Link } from 'react-router-dom'
import '../Styles/main.scss'
import GeneralFaq from './GeneralFaq'
import ServiceFaq from './ServiceFaq'
import Footer from '../components/Footer'


export default function Faqs() {
  return (
    <>
    <section className='faq-question'>
        <div className='container'>
            <div className='faq-textbox'>
                <h1>FAQs - Frequently Asked Questions</h1>
            </div>
        </div>
    </section>

    <section className='faq-main'>
        <div className='container'>
            <div className='fmain-heading'>
                <h1>You asked we Answered</h1>
                <p>Answers to the most common questions you might have</p>
            </div>
            <div className='genral-wrapper'>
                <GeneralFaq/>
            </div>
        </div>
    </section>

    {/* serviceFaq */}
    <section className='servicef'>
        <div className='container'>
            <div className='serviceF'>
                <div className='service-wraper'>
                    <ServiceFaq/>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</>
  )
}
