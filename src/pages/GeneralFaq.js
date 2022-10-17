import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import '../Styles/main.scss'
import '../Styles/responsive.scss'

const GeneralFaqData = [
    {
        quest:'What is FTTH?',
        answ:`Fiber to the x (FTTX) is a generic term for any broadband network architecture using optical fiber to provide all or part of the local loop used for last mile. FTTX is a generalization for several configurations of fiber deployment, arranged into groups like FTTH/FTTB/FTTF (Fiber laid all the way to the home/building/Floor) and with copper wires completing the connection. As fiber optic cables are able to carry much more data than copper cables, the traditional copper based networks are being replaced by fiber and thus paving the way for providing Gig interfaces for the subscribers.`
    },
    {
        quest:'What speeds are offered by AsvishXFiberNet ?',
        answ:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        quest:'What speeds are offered by AsvishXFiberNet ?',
        answ:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
];

const GenFaq = ({ quest, answ }) => {
    const[isActive, setIsActive] = useState(false);

    return (
        <div className='gen-faq'>
            <div className='gen-faq-title flex' onClick={() => setIsActive(!isActive)}>
                <div>{quest}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="gen-content">{answ}</div>}
        </div>
    );
};

export default function GeneralFaq() {
  return (
    <>
    <section className='genral-faqs'>
        <div className='container'>
            <div className='rightsec-heading'>
                <h1>General Questions</h1>
            </div>
            <div className='g-faq'>
                {GeneralFaqData.map(({quest, answ}) => (
                    <GenFaq quest={quest} key={quest} answ={answ}/>
                ))}
            </div>
        </div>
    </section>
</>
  )
}
