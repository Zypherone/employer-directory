import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        <a href="https://zypherone.github.io/" target="_blank" rel="noopener noreferrer">Zypherone</a> (<a href="https://github.com/Zypherone/employer-directory" target="_blank" rel="noopener noreferrer">GitHub Repo</a>)  &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer;