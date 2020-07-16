import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer;