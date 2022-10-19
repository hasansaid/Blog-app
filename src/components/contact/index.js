import React from 'react';
import './styles.css';
import CContact_header from './contact-header';
import CContact_body from './contact-body';
import Navigation_contact from './Navigation/index';

const _Contact = () => {
  return (
    <div>
      <Navigation_contact />
      <CContact_header />
      <CContact_body />
    </div>
  );
};

export default _Contact;
