import React from 'react'
import './Greens.css';
import me from '../../Assets/me.jpeg';

const Greens = () => {
  return (
    <section id='about'>
      <div className="box1">
        <h2>Get To Know About Us</h2>
        <div className="line"></div>
        
        <div className="container about_us">
          <div className="about__me">
              <div className="about__me-image">
                <img src={me} alt="image" />
              </div>
          </div>

          <div className="about_content">
            <p>
            At #avowalgreens we are concerned about #climatechange, 
            #environment, #nature and the planet #earth. We are suppliers 
            and producers of micro and macro greens. We deliver to you hassle free the most organic and quality produce.
            You can rely us on for consistent, fresh and timely
            supply of your greens. 
            We believe and promote sustainable agriculture practises.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Greens