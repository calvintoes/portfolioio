import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contactData } = useContext(PortfolioContext);
  const { cta, btn, email } = contactData;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact." />
        <Fade bottom duration={1000} delay={800} distance="30px"></Fade>
      </Container>
    </section>
  );
};

export default Contact;
