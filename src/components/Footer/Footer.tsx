import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <h3 className="footer__logo">Центр Авто</h3>
            </div>
            
            <div className="footer__contact">
              <p>+7 (927) 667-69-85</p>
              <p>г. Чебоксары, ул. Чернышевского 23</p>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; {currentYear} Центр Авто</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
