import React from 'react';
import './styles.css';
import Language from '../../../languages';
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="private">{Language.footer.copyright}</div>
      <div className="social-media">

        <div className="circle">
          <SocialIcon url="https://linkedin.com/in/jaketrent" fgColor="white" />
        </div>
        <div className="circle">
          <SocialIcon
            url="https://linkedin.com/in/jaketrent"
            network="instagram"
            fgColor="white"
          />
        </div>
        <div className="circle">
          <SocialIcon
            url="https://linkedin.com/in/jaketrent"
            network="twitter"
            fgColor="white"
          />
        </div>
        <div className="circle">
          <SocialIcon
            url="https://linkedin.com/in/jaketrent"
            network="facebook"
            fgColor="white"
          />
        </div>
      </div>

    </div>
  );
};

export default Footer;
