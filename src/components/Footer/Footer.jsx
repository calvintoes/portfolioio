import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Fade from 'react-reveal';
import PortfolioContext from '../../context/context';
import { LOGO } from '../../images';

const Footer = () => {
  const { footerData } = useContext(PortfolioContext);
  const { networks } = footerData;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <Fade bottom duration={1000} distance="30px">
          <div className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </div>
          <div className="footer__body">
            <img className="logo" src={LOGO} alt="logo" />
            <div className="text">
              <h2>Let's talk</h2>
              <p className="footer__subtitle">
                Feel free to schedule a meeting with me to discuss your next project at{' '}
                <a href="mailto:cto3685@gmail.com" target="_blank" rel="noreferrer">
                  cto3685@gmail.com
                </a>{' '}
                or{' '}
                <a href="https://calendly.com/calvinto" target="_blank" rel="noreferrer">
                  Schedule here
                </a>
              </p>
            </div>
            <div className="social-links">
              {networks.map((link) => {
                return (
                  <h4 key={link.name}>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.name}
                    </a>
                  </h4>
                );
              })}
            </div>
          </div>
          <p className="last-line">twenty twenty Calvin To</p>
        </Fade>
      </Container>
    </footer>
  );
};

export default Footer;
