import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../shared/Card';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { QRONUS, IBM1, IBM2, INSPIRAVE } from '../../images';

const Work = () => {
  const { workData } = useContext(PortfolioContext);
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
    <section id="work">
      <Container>
        <Row>
          <Title title="Worked at." />
        </Row>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={400} distance="30px">
          <Row>
            {workData.map((work, i) => {
              const images = [QRONUS, IBM2, IBM1, INSPIRAVE];

              return (
                <Col md={6} sm={12} key={work.id}>
                  <Card image={images[i]} {...work} />
                </Col>
              );
            })}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Work;
