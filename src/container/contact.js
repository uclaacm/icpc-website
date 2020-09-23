import React, { useMemo, Component } from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";

const ContactContainer = () => {
  return (
    <div className="contact">
      <Helmet>
        <title>Contact Us | ACM ICPC @ UCLA</title>
        <meta name="description" content="Contact us for more information." />
        <meta name="keywords" content="contact,email,phone,acm,icpc,ucla,competitive,programming" />
      </Helmet>
      <h1>Contact Us</h1>
    </div>
  );
}

export default ContactContainer;

