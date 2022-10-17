import React from 'react'
//import { Link } from 'react-router-dom'
import '../Styles/CloudStorage.scss'
//import Footer from '../components/Footer'


export default function CloudStorage() {
    return (
        <>
        <section className='cloud_storage'>
            <div className='container'>
                <div className='cloud_box'>
                    <h5> XFiberNet Cloud Storage</h5>
                    <h1> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    {/* <div>
                        <Link>
                            <button className='btn-cloud'> </button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
        {/* second section */}

        {/* info section */}
        <section className='info_section'>
            <div className='container'>
                <div className='info_main'>
                    <div className='info_image'>
                        <img src='/assets/images/cloud.jpg' alt='Cloud Storage'/>
                    </div>
                    <div className='info_content'>
                        <h5> CloudStorage </h5>
                        <h1>Why to use cloud storage.?</h1>
                        <p>Cloud for storage gives you access to your files from anywhere that has an internet connection. In the event of a hard drive failure or other hardware malfunction, you can access your files on the cloud. It acts as a backup solution for your local storage on physical drives.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* end info_section */}
        {/* why to use cloud storage */}
        <section className='benfits'>
            <div className='container'>
                <div className='benfit_heading'>
                    {/* <h5></h5> */}
                    <h1>Why to XFiber CloudStorage</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className='benfits_block'>
                    <div className='benfit_tiles'>
                        <div className='benfit_img'>
                            <img src='/assets/images/sync.png' alt='sync'/>
                        </div>
                        <h1>Reliable File Syncing</h1>
                        <p>Organize files into libraries. A library can be selectively synced into any device. Reliable and efficient file syncing improves your productivity.</p>
                    </div>
                    <div className='benfit_tiles'>
                        <div className='benfit_img'>
                            <img src='/assets/images/speed.png' alt='speed'/>
                        </div>
                        <h1>High Speed Performance</h1>
                        <p>A library can be encrypted by a password choosen by you. Files are encrypted before syncing to the server. Even the system admin can't view the files.</p>
                    </div>
                    <div className='benfit_tiles'>
                        <div className='benfit_img'>
                            <img src='/assets/images/Encryption.png' alt='Encryption'/>
                        </div>
                        <h1>Built-in File Encryption</h1>
                        <p>The core of Seafile server is written in C programming language. It is small and has a fantastic performance</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <Footer /> */}
    </>
    )
}
