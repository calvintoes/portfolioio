/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { heroData } = useContext(PortfolioContext);
  const { title, name, subtitle,} = heroData;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero">
      <Container>
        <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="hero-title">
            <h1 className="hero-topline">{title || 'Hello'}</h1>
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
          <div className="hero-title">
            <h1 className="hero-midline">{name || `I'm Calvin`}</h1>
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={900} distance="30px">
          <div className="hero-title">
            <h2 className="hero-botline">{subtitle || 'Front End Engineer'}</h2>
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={900} distance="30px">
          <div className="start-btn">
            <Link to="about" smooth duration={1000}>
              <i className="fa fa-angle-down fa-3x" aria-hidden="true" />
            </Link>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
