import React from 'react';
import './Header.css';
import {BsLinkedin} from 'react-icons/bs';
import {GiButterflyFlower} from 'react-icons/gi';
import {SiBloglovin} from 'react-icons/si';
// import border from '../../Assets/border.png';

const Header = () => {
  return (
      <header id='#'>
          <div className="container header_container">
            <div className="box">
              <div className="text">
                <h1><GiButterflyFlower/> Avowal Greens</h1>
              </div>
            </div>
          </div>

          <div className="headers__socials">
            <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin/></a>
            <a href="http://www.avowal.in/blog" target="_blank"><SiBloglovin/></a>
          </div>

          {/* <div className="bor">
            <img src={border} alt="border" />
          </div> */}
          <a href="#contact" className="scroll">Scroll Down</a>
      </header>
  )
}

export default Header;