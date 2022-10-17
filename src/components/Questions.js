import React, { useState } from 'react'
//import FaqMain from './FaqMain'
// import { contentData } from './content'
import '../Styles/main.scss'
//import { Link } from 'react-router-dom';
import '../Styles/responsive.scss'

const contentData = [
    {
        title: 'How do I register my complaint?',
        content:`If you are facing service, billing, or connection related issues, please register your complaint by a call on 9739343574 or by writing to us at ceo.asvish@gmail.com, info.xfibernet@gmail.com`
    },
    {
        title: 'Can I shift the service to another location?',
        content:`Yes, you can request for shifting the broadband service to another location by registering your request on 9739343574 or by writing to us at ceo.asvish@gmail.com. If we service the new location, our team will register the request for a location shift.`
    },
    {
        title: 'How long does the installation take?',
        content:`Our field team checks whether your area is covered under our fiber network. If it does, it takes 5-7 working days to get your connection up and running. We try our best to ensure the installation happens as early as possible, however in case we need to deploy special infrastructure for your connection, we might be delayed.`
    },
    {
        title: 'What speeds are offered by AsvishXFiberNet?',
        content:`AsvishXFinberNet offers Unlimited Internet plans with speeds from 30 Mbps - 300 Mbps speed to residence and enterprise. The minimum service contract duration is One month.`
    }
];

const FaqMain = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='faqMain-item'>
            <div className='faqMain-title' onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div> 
            </div>
            {isActive && <div className='faq-content'>{content}</div>}
        </div>
    );
};

export default function Questions() {
    return (
    <>
        <section className='faq'>
            <div className='container'>
                <div className='faq_heading'>
                    <h1> Frequently Asked Questions </h1>
                    <p>Answers to the most common questions you might have</p>
                </div>
                <div className='FaqMain'>
                    {contentData.map(({ title, content }) => (
                        <FaqMain title={title} key={title} content={content} />
                    ))}
                </div>   
                <div className='faq_btn'> 
                    <a href="/Faqs">
                        <button className='btn-faq'> View More</button>
                    </a>
                </div>
            </div>
        </section>
    </>
    );
};


