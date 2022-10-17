import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/main.scss'

const leasedLinedata = [
    {
        question:'What are the access media platforms on which Direct Internet Access (DIA) is delivered?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'How many public IP addresses will I get? is delivered?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'I want to do my own routing. Will Airtel provide a BGP “feed”?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'How many types of leased lines exist?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'What are the access media platforms on which Direct Internet Access (DIA) is delivered?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        question:'What are the access media platforms on which Direct Internet Access (DIA) is delivered?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
];

const LineFaq = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);

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

export default function l_Faq() {
    return (
        <>
        <section className='leasedlineF'>
            <div className='container'>
                <div className='l-faq-heading'>
                    {/* <h1>Question on Dedicated Internet?</h1> */}
                    <h1>XfiberNet leasedLine Internet Faq's</h1>
                    <p></p>
                </div>
                <div className='l-faq'>
                    {leasedLinedata.map(({ question, answer }) => (
                        <LineFaq question={question} key={question} answer={answer}/>
                    ))}
                </div>
                <div className='l-btn'>
                    <Link to="/">
                        <button className='l-faq-btn'> Read Faqs </button>
                    </Link>
                </div>
            </div>
        </section>
    </>
    )
}
