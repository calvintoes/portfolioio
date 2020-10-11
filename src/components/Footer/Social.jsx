/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { INSTAGRAM2, INSTAGRAM3, INSTAGRAM4, INSTAGRAM5, INSTAGRAM6 } from '../../images';

const Social = () => {
  return (
    <section id="instagram">
      <Container>
        <Fade left duration={1000} distance="30px">
          <Row className="align-items-center">
            <Col md={4} sm={12}>
              <div className="text">
                <h3>
                  Find me <br />
                  on Instagram
                </h3>
                <div className="d-flex align-items-center">
                  <p>
                    <a
                      className="hvr-underline-from-left"
                      href="https://instagram.com/calvintoes"
                      target="_blank"
                      rel="noreferrer"
                    >
                      See more
                    </a>
                  </p>
                  <i className="fa fa-chevron-right ml-4 mb-3" />
                </div>
              </div>
            </Col>
            <Col md={8} sm={12}>
              <Row>
                <Fade left duration={500} delay={50} distance="30px">
                  <div className="image-wrapper">
                    <img src={INSTAGRAM4} className="ig-photo" alt="Floating Keyboard" />
                  </div>
                </Fade>
                <Fade left duration={500} delay={100} distance="60px">
                  <div className="image-wrapper">
                    <img src={INSTAGRAM6} className="ig-photo" alt="Floating Keyboard" />
                  </div>
                </Fade>
                <Fade left duration={500} delay={150} distance="90px">
                  <div className="image-wrapper">
                    <img src={INSTAGRAM3} className="ig-photo" alt="Floating Keyboard" />
                  </div>
                </Fade>
                <Fade left duration={500} delay={200} distance="120px">
                  <div className="image-wrapper">
                    <img src={INSTAGRAM5} className="ig-photo" alt="Floating Keyboard" />
                  </div>
                </Fade>
                <Fade left duration={500} delay={300} distance="120px">
                  <div className="image-wrapper">
                    <img src={INSTAGRAM2} className="ig-photo" alt="Floating Keyboard" />
                  </div>
                </Fade>
              </Row>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Social;
