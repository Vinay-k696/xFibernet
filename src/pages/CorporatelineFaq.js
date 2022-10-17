import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/main.scss'

const CorporatelineData = [
    {
        question:'What is XFibernet Corporate Internet?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'What are the benefits included in XFibernet Corporate Internet?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'What is static IP..?',
        answer:`A static IP address is simply an address that doesn't change. Once your device is assigned a static IP address, that number typically stays the same until the device is decommissioned or your network architecture changes. Static IP addresses generally are used by servers or other important equipment.`
    },
    {
        question:'What is Bundled Static IP?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'What is Secure DNS Server ..?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'What is Integrated Device Security..?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'How much internet speed does my business need?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'How to select the best broadband plan for my business?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'Is fibre optic internet better than cable?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'What is the minimum speed and the maximum speed for business internet?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'What are the average cost of a phone and internet connection for a small business?',
        answer:`The average cost is between INR 10-15 per Mb per connection.`
    },
];

const CorpFaq = ({ question, answer }) => {
    const[isActive, setIsActive] = useState(false);

    return (
        <div className='l-faq-items'>
            <div className='l-faq-title' onClick={() => setIsActive(!isActive)}>
                <div>{question}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className='l-faq-content'>{answer}</div>}
        </div>
    );
};

export default function CorporatelineFaq() {
    return (
        <>
        <section className='leasedlineF'>
            <div className='container'>
                <div className='l-faq-heading'>
                    <h1><b>XFiberNet</b> Corporate Internet Faq's</h1>
                    {/* <p></p> */}
                </div>
               <div className='l-faq'>
                    {CorporatelineData.map(({question, answer}) => (
                        <CorpFaq question={question} key={question} answer={answer}/>
                    ))}
               </div>
               <div className='l-btn'>
                    <Link to='/'>
                        <button className='l-faq-btn'> Read more </button>
                    </Link>
               </div>
            </div>
        </section>
    </>
    )
}
