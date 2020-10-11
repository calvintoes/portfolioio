import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const About = () => {
  const { aboutData } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour } = aboutData;

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
    <section id="about">
      <Container>
        <Row>
          <Fade top duration={500} distance="30px">
            <div className="img-wrapper">
              <AboutImg filename={img} alt="self-portrait" />
            </div>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={500} distance="30px">
            <Row>
              <Col sm={12} md={6}>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
              </Col>
              <Col sm={12} md={6}>
                <p>{paragraphThree}</p>
                <p>{paragraphFour}</p>
              </Col>
            </Row>
          </Fade>
        </Row>
      </Container>
      <Container>
        <Row>
          <div className="quote">
            <h3>
              <i>Create the opportunities that you're looking for.</i>
            </h3>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
