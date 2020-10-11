import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../shared/Card';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { NETZERO, PROJECT, AUDIOVIZ, REFERRALS } from '../../images';

const Projects = () => {
  const { projectsData } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <Row>
          <Title title="Projects." />
        </Row>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={400} distance="30px">
          <Row>
            {projectsData.map((project, i) => {
              const images = [REFERRALS, NETZERO, PROJECT, AUDIOVIZ];
              return (
                <Col md={6} key={project.id}>
                  <Card image={images[i]} {...project} lastItem={i === images.length - 1} />
                </Col>
              );
            })}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Projects;