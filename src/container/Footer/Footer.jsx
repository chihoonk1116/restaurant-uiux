import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay/>
    <Newsletter/>
    <div className="app__footer-links">

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 123-123-5454</p>
        <p className="p__opensans">+1 123-123-5454</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, ea!</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: "15px"}} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className='p__opensans'>All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
