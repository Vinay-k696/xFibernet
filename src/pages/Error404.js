import React from 'react'
import Footer from '../components/Footer'
import '../Styles/main.scss'

export default function Error404() {
    return (
        <>
        <section className='error'>
            <div className='container'>
                <div className='error_404'>
                    <h1>404Error</h1>
                    <p>
                        Page not found.!
                    </p>
                    <a href='/' className='btn-return_page'>Back to Home page</a>
                </div>
            </div>
        </section>
        <Footer/>
    </>
    )
}
