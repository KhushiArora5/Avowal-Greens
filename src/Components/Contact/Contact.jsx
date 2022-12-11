import React, { useRef } from 'react';
import './Contact.css';
import {BsFillTelephoneInboundFill} from 'react-icons/bs';
import {GrMapLocation} from 'react-icons/gr';
import dir from '../../Assets/dir.png';

const Contact = () => {
  const form = useRef();

  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <div className="line"></div>

      <div className="container con__container">
        <div className="con_options">
          <article className="con__option">
            <BsFillTelephoneInboundFill className="con__option-icon"/>
            <h4>Phone No.</h4>
            <h5>+919074751169</h5>
          </article>
          <article className="con__option">
            <GrMapLocation className="con__option-icon"/>
            <h4>Location</h4>
            <h5>Primary Operations: Gurgaon, Haryana 122002,India</h5>
            <a href='https://www.bing.com/maps?where=gurgaon%2C+haryana+122002%2C+IN&cp=28.47763%7E77.069775&lvl=11.8'>
              <img src={dir} alt='image'/>
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <div className="cbox">
        <form ref={form}>
          <input type="text"  name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="msg" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;