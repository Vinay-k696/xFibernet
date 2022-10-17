import React, {useState} from 'react'
//import { Link } from 'react-router-dom'
import '../Styles/main.scss'

const AirFiberData = [
  {
    airques: 'What Is a Wireless Internet Service Provider (WISP)?',
    airanswer:`A fixed wireless internet provider extends reliable and cost-effective broadband internet services to remote farms, homes, and businesses. Your antenna, which supplies a home wireless router, will connect to our Point of Presence (PoP). `
  },
  {
    airques: 'How Is It Different from Other Internet Suppliers?',
    airanswer:`Because wireless internet requires less infrastructure than DSL, fiber, cable, or satellite networks, It can be updated much more quickly, meaning a faster and more reliable service for residents and businesses in remote areas where other network types have not invested time and money.    `
  },
  {
    airques: 'What Speed Do You Provide?',
    airanswer:`With fixed wireless internet, your on-site antenna uses radio waves to connect to a nearby tower (just a few miles apart), giving you access to the internet.
    Satellite internet is reliant on signals from a dish orbiting Earth about 20,000 miles away. Sattelite internet is often higher cost, includes data caps, and has high latency (delay), making voice or video calls through the internet difficult. With Upward Broadband, there are no data caps, just a high-speed connection with low latency.`
  },
  {
    airques: 'How Much Does It Cost..?',
    airanswer:`Fixed wireless internet is an affordable alternative to other connection methods. With a clear Pricing structure and no bundles or gimmicks, Asvish Broadband lets you pay only for what you need and want – not all the extras. Check out our pricing here.`
  },
  {
    airques: 'How Reliable Is Your Internet Service?',
    airanswer:`Instead of Relying on cables, you’re getting internet from radiowaves. That means no one can accidentally cut your access with a severed wire. That makes fixed wireless internet worthy of your trust.`
  },
  {
    airques: 'How Far Does the Signal Reach?',
    airanswer:`The signal’s reach is dependent on the local terrain and if there is anything obstructing your connection to the tower site. Typically the signal will cover a 10-mile radius of our tower.`
  },
  {
    airques: 'How Long Does It Take to Get Fixed Wireless Internet?',
    airanswer:`Fixed wireless internet is a quick and simple installation, and can often be installed just a few days after a service agreement is signed. `
  },
  {
    airques: 'Does Weather Affect Fixed Wireless Internet?',
    airanswer:`Severe weather, in most instances, will not impact your internet connection. Severe, heavy winds have the potential to interrupt connections if your antenna system is blown out of place. Reputable WISPs install antennae with this in mind, ensuring the system can withstand extremely heavy winds.`
  },
  // {
  //   airques: 'What is AirFiber (wirelss Internet)',
  //   airanswer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
  // },
  
];

const Airfaq = ({ airques, airanswer}) => {
    const[isActive, setIsActive] = useState(false);

    return (
      <div className='l-faq-items'>
          <div className='l-faq-title' onClick={() => setIsActive(!isActive)}>
            <div>{airques}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className="l-faq-content">{airanswer}</div>}
      </div>
    );
};

export default function AirFiberFaq() {
  return (
    <>
      <section className='leasedlineF'>
          <div className='container'>
            <div className='airfaq-heading'>
              <h1>Wireless Broadband Faq's</h1>
            </div>
            <div className='l-faq'>
              {AirFiberData.map(({airques, airanswer})=> (
                <Airfaq airques={airques} key={airques} airanswer={airanswer}/>
              ))}
            </div>
          </div>
      </section>
    </>
  )
}
