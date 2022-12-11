import React from 'react'
import './About.css';
import ews from '../../Assets/ews.jpg';

const Comm = () => {
  return (
    <section id='comm'>
      <div className="box2">
        <h2>Our Featured Commitment and Specialities</h2>
        <div className="line"></div>
        
        <div className="container about_us">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ews} alt="image" />
              </div>
          </div>

          <div className="about_content">
            <p>
            <u>Environmental Sustainability :</u> 
            We focus on inculcating concepts of vertical 
            farming, indoor farming, hydrophonics & other 
            soilless production in our cultivation to keep 
            our production process sustainable.
            </p>
            <p>
            <u>Specialties :</u> 
                Climate Change, Environment, Earth, Nutrition, 
                Health, Fitness, Microgreens, Macrogreens and WeWork.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comm