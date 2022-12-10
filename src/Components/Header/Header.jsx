import React from 'react';
import './Header.css';
import {BsLinkedin} from 'react-icons/bs';
import {GiButterflyFlower} from 'react-icons/gi';
// import border from '../../Assets/border.png';

const Header = () => {
  return (
    <section id="#">
      <header>
          <div className="container header_container">
              <h1><GiButterflyFlower/> Avowal Greens</h1>
          </div>

          <div className="headers__socials">
            <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin/></a>
          </div>

          {/* <div className="bor">
            <img src={border} alt="border" />
          </div> */}
          <a href="#contact" className="scroll">Scroll Down</a>
      </header>
    </section>
  )
}

export default Header;