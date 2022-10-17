import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import '../Styles/main.scss'
import '../Styles/responsive.scss'

const ServiceFaqData = [
    {
      ques:'My Internet is Not Working',
      answ:`We have 24/7 helpdesk to assist you with any technical related issues while using our service.
      However, before you call us to register complaint please check the following:
      * LAN cable is properly plugged-in to the computer / router
      * Check if the LAN Card / Wireless adapter is not disabled.
      * See if the LED lights on the LAN card are blinking or not.
      * Make sure that the LAN Connection is indicating 'Connected'
      * Restart the 'Router', if you are using.
      * If you are using internet in Laptop/Desktop, please go to Start > Run, here type 'cmd' and the Command prompt / DOS prompt will appear. In the Dialogue box which appears please type 'ipconfig /release' followed by 'ipconfig /renew'. Then try to surf again.
      * Disable and then enable your LAN card / Wireless Card / switch off your router, wait a few seconds and then switch it on again.
      If your internet does not work post following the above steps, please contact our Customer Care Desk on 6361747719`
    },
    {
      ques:'How do I register my complaint?',
      answ:`If you are facing service, billing or connection related issues, please register your complaint by call on 6361747719`
    },
    {
      ques:'Where and how do I pay my service bill or recharge online?',
      answ:`You can renew your service by our online payment portal.
      Procedure for renewal by online payment using net banking /Credit card(Master/visa)/ Debit Card/ Wallet
      , Step1: Go to https://live.asvish.net/customer_portal,
      Step 2: Click on 'Pay & Recharge' and login using your registered mobile number.,
      Step 3: Post login you can see all your connections, choose your account to pay/recharge by selecting 'Pay/Recharge'.,
      Step 4: After that you have the option to recharge directly with exsting plan or can choose different plan as per your need.,
      Step 5: Select your preferred payment method, follow the process and complete the transaction.`
    },
    {
      ques:'How can I get my username and password?',
      answ:`Please contact our help desk on 6361747719 from the registered mobile number linked to your broadband service. Our team would be happy to provide you the login credentials for using your internet connection.`
    },
    {
      ques:'How can I check my Data Usage?',
      answ:`You can check your real-time data usage by using  https://live.asvish.net/customer_portal  the Customer Portal section for our website, log in using your Registered Mobile Number(RMN), post login you can see your data usage details. The data is recorded for each session.`
    },
    {
      ques:'Can I change the plan/tariff at any point in time?',
      answ:`Yes, the currently chosen/active plan can be changed before the duration of the billing period, expires.
      However, if you change your plan in the middle of an active subscription, you will lose money. So, it is advisable to change your plan only when your current subscription ends.`
    },
];

const ServiceQuestion = ({ ques, answ }) => {
    const[isActive, setIsActive] = useState(false);

    return (
      <div className='gen-faq'>
          <div className='gen-faq-title' onClick={() => setIsActive(!isActive)}>
              <div>{ques}</div>
              <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className='gen-content'>{answ}</div>}
      </div>
    );
};

export default function ServiceFaq() {
  return (
    <>
  <section className='ServiceFaq'>
    <div className='container'>
        <div className='serviceFaq-heading'>
          <h1>Service-Related Questions</h1>
        </div>
        <div className='q-faq'>
            {ServiceFaqData.map(({ques, answ}) => (
              <ServiceQuestion ques={ques} key={ques} answ={answ}/>
            ))}
        </div>
    </div>
      </section>  
  </>
  )
}