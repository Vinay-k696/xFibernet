import React, { useState } from 'react'

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

export default FaqMain;
