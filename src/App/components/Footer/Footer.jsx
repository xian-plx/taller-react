import React from 'react';
import youtube from '../../images/youtube-icon.png';
import facebook from '../../images/facebook-icon.png';

const Footer = () => (
  <div className="footer">
    <span className="copyright">&copy; Xián Oliveira Taboada</span>

    <div>
      <a
        href="https://www.youtube.com/watch?v=ByqFY-Boq5Y"
        title="youtube"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="image"
          src={youtube}
          width="25px"
          alt="imagen de youtube"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=fFy7in8-qlM"
        title="facebook"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="image"
          src={facebook}
          width="25px"
          alt="imagen de facebook"
        />
      </a>
    </div>
  </div>
);

export default Footer;
