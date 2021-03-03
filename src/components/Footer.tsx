import React, {Component} from 'react';
import './Footer.scss';
import logo from '../img/rs_school_js.svg'

function Footer (props: any) {
  return (
    <div className='footer-container'>
      <a href='https://github.com/SashaSadovskaya'>
        <span>SashaSadovskaya</span>
      </a>
      <a href='https://rs.school/js/'>
        <img src={logo} className='rs-logo'/>
      </a>
    </div>
  );
}

export default Footer;
