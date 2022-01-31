import React from 'react';
import facebookIcon from "../images/Facebook Icon.png";
import githubIcon from "../images/GitHub Icon.png";
import instgramIcon from "../images/Instagram Icon.png";
import linkedInIcon from "../images/Linkedin Icon.png";
import twitterIcon from "../images/Twitter Icon.png"

export const Footer1 = () => {
  return (
      <footer className='footer-1'>
          <a href=""> <img src={twitterIcon} alt="Twitter icon" /> </a>
          <a href=""> <img src={facebookIcon} alt="Facebook icon" /> </a>
          <a href=""> <img src={instgramIcon} alt="Instagram icon" /> </a>
          <a href=""> <img src={linkedInIcon} alt="LinkedIn icon" /> </a>
          <a href=""> <img src={githubIcon} alt="GitHub Icon" /> </a>
      </footer>
  );
}



export const Footer2 = () => {
  return (
    <footer className='footer-2'>
          <a href=""> <img src={twitterIcon} alt="Twitter icon" /> </a>
          <a href=""> <img src={facebookIcon} alt="Facebook icon" /> </a>
          <a href=""> <img src={instgramIcon} alt="Instagram icon" /> </a>
          <a href=""> <img src={linkedInIcon} alt="LinkedIn icon" /> </a>
          <a href=""> <img src={githubIcon} alt="GitHub Icon" /> </a>
      </footer>
  );
};
