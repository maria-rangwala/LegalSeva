import React from 'react';
import {useTypewriter , Cursor} from 'react-simple-typewriter'
import './landingpg.css';
import Footer from './footer';
import Header from './header';
import Reviews from './Reviews';

function Landingpg() {
  const [text] = useTypewriter({
    words: ['Legal Seva'],
    loop: true,
  });
  
  return (
    <div className='landing-pg'>
      <Header/>
      <div className='landing-tagline'>
        <div className='welcome-user'>
          <h1>
            Welcome to<br/>{text}<Cursor/>
          </h1><br/>
          <p>
            Connect with Legal Service Providers<br/>in India
          </p>
          <button className='join-btn-user'>Join Now!</button>
        </div>
        <div className='call-img'></div>
      </div>
      <div className='service-providers'>
        <h4>Trusted by Legal Professionals</h4>
        <ul>
          <li>Advocates</li>
          <li>Arbitrator</li>
          <li>Mediators</li>
          <li>Notaries</li>
        </ul>
      </div>
      <div className='features'>
        <div className='feature1'></div>
        <div className='feature2'></div>
        <div className='feature3'></div>
      </div>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Landingpg;
