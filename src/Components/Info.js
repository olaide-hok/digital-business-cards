import React from 'react';
import emailIcon from "../images/email-icon.png"
import linkedIn from "../images/Linkedin Icon.png"
import infoIcon from "../images/Rectangle 90.png";

export const Info1 = () => {
  return (
        <div className='info-1'>
            <img src={infoIcon} alt="Laura Smith" />
            <h2 className="dev_name-1">Laura Smith</h2>
            <h5 className='dev--role'>Frontend Developer</h5>
            <span className='dev_website-1'>laurasmith.website</span>

            <div className='dev--email'>
                <img src={emailIcon} alt="" />
                <span>Email</span>
            </div>
        </div>
    );
}

export const Info3 = () => {
    return (
          <div className='info-1'>
              <img src={infoIcon} alt="Laura Smith" />
              <h2 className="dev_name-1">Laura Smith</h2>
              <h5 className='dev--role'>Frontend Developer</h5>
              <span className='dev_website-1'>laurasmith.website</span>
  
              <div className='dev_socials'>
                <div className='dev_email'>
                    <img src={emailIcon} alt="" />
                    <span>Email</span>
                </div>
                <div className='dev_linkedIn'>
                    <img src={linkedIn} alt="" />
                    <span>LinkedIn</span>
                </div>
            </div>
          </div>
      );
  }


export const Info2 = () => {
  return (
        <div className='info-2'>
            <img src={infoIcon} alt="Laura Smith" />
            <h2 className="dev_name-2">Laura Smith</h2>
            <h5 className='dev--role'>Frontend Developer</h5>
            <span className='dev_website-2'>laurasmith.website</span>

            <div className='dev_socials'>
                <div className='dev_email'>
                    <img src={emailIcon} alt="" />
                    <span>Email</span>
                </div>
                <div className='dev_linkedIn'>
                    <img src={linkedIn} alt="" />
                    <span>LinkedIn</span>
                </div>
            </div>
        </div>

  );
};

export const Info4 = () => {
    return (
        <div className='info-2'>
            <img src={infoIcon} alt="Laura Smith" />
            <h2 className="dev_name-2">Laura Smith</h2>
            <h5 className='dev--role'>Frontend Developer</h5>
            <span className='dev_website-2'>laurasmith.website</span>

            <div className='dev--email'>
                <img src={emailIcon} alt="" />
                <span>Email</span>
            </div>
        </div>
  
    );
  };

