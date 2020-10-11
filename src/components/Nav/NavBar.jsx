import React, { useContext, useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import { LOGO } from '../../images';

const NavBar = () => {
  const { navData } = useContext(PortfolioContext);
  const { items } = navData;

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
    <Navbar expand="md" id="navbar">
      <Container fluid>
        <Fade top={isDesktop} duration={1000} delay={500} distance="30px">
          <Navbar.Brand href="/">
            <img src={LOGO} alt="logo" height={50} />
          </Navbar.Brand>
          <Nav>
            {items.map((link) => (
              <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </Nav>
        </Fade>
      </Container>
    </Navbar>
  );
};

export default NavBar;
