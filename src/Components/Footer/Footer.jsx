import React from 'react';
import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {SiBloglovin} from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Avowal Greens</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#comm">Commitments and Speacialities</a></li>
        <li><a href="#greens">Micro and Macro</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer_socials">
        <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin/></a>
        <a href="http://www.avowal.in/blog" target="_blank"><SiBloglovin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Khushi Arora. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;