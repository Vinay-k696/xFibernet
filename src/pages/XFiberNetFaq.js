import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import '../Styles/main.scss'

const XFiberNetData = [
    {
        fQue:'What are the Benefits of XFiberNet.?',
        fAns:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        fQue:'What kind of internet is best for Streaming and Gaming. ?',
        fAns:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        fQue:'XFiberNet Available in my area?',
        fAns:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        fQue:'How to get XFiberNet Broadband?',
        fAns:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
];

const FiberFaq = ({ fQue, fAns}) => {
    const[isActive, setIsActive] = useState(false);

    return (
        <div className='l-faq-items'>
            <div className='l-faq-title' onClick={() => setIsActive(!isActive)}>
                <div>{fQue}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className='l-faq-content'>{fAns}</div>}
        </div>
    );
};

export default function XFiberNetFaq() {
  return (
    <>
    <section className='leasedlineF'>
        <div className='container'>
            <div className='l-faq-heading'>
            <h1>XFiberNet Faq's</h1>
            <p></p>
            </div>
        
        <div className='l-faq'>
            {XFiberNetData.map(({fQue, fAns}) => (
                <FiberFaq fQue={fQue} key={fQue} fAns={fAns}/>
            ))}
        </div>
        <div className='l-btn'>
            <a href='/Faqs'>
                <button className='l-faq-btn'>Read more Faq</button>
            </a>
        </div>
        </div>
    </section>
</>
  )
}

