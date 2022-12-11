import React from 'react'
import './Greens.css';
import micro from '../../Assets/micro.png';
import macro from '../../Assets/macro.png';

const Greens = () => {
  return (
    <section id='greens'>
      <div className="box1">
        <h2>Micro and Macro Greens</h2>
        <div className="line"></div>
        
        <div className="container greens">
          <div className="g__me">
              <div className="g__me-image1">
                <img src={micro} alt="image" />
              </div>
              
              <div className="g__me-image">
                <img src={macro} alt="image" />
              </div>
          </div>

          <div className="g_content">
            <p className='p1'>
              <u>Micro Greens</u> are vegetable greens harvested just after the 
              cotyledon leaves have developed with one set of true leaves. 
              They are used as a nutrition supplement, a visual enhancement, 
              and a flavor and texture enhancement.  
            </p>
            <p>
              <u>Macro Greens</u> is a true green superfood containing 38 ingredients 
              that feed the body at a cellular level. It nourishes the body with antioxidants,
              co-nutrients, enzymes, vitamins, minerals and amino acids. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Greens