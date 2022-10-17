import React from 'react'
import '../Styles/main.scss'

export default function work_from_home() {
    return (
        <>
        <section className='work-from-home'>
            <div className='container'>
                <div className='work-headding'>
                    <h1>Work From Home With <b>XFibernet</b> Broadband</h1>
                    <p>Enable your workforce to work from anywhere</p>
                    <div className='wrk btn'>
                        <a href='/GetConnection'>
                        <button className='wrk_btn'>Get Connection</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* work_from_home broadband */}
        <section className='work_athome'>
            <div className='container'>
                <div className='workathome_main'>
                    <div className='athome_imgbox'>
                        
                    </div>
                    <div className='athome_contentbox'>

                    </div>
                </div>
            </div>
        </section>



        {/* <h1>work from home banner redirect page
        </h1>
        <p> basic specification </p>
        <ul>
            <li>work at home with xstrem xfibernet</li>
            <li> connectivity , collaboration, secure network content with img</li>
            <li>work from plans </li>
            <li>work from plans add ons  </li>
            <li>testimonials </li>
            <li>blogs pattern change </li>
            <li> conference video meeting related buffer related</li>
            <li>get work from home </li>
            <li> register form </li>
            <li>footer</li>
        </ul> */}
        </>
    )
}
