import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ image, alt, title, type, date, paragraph, url, backgroundColor }) => {
  return (
    <div className={styles.card}>
      <Container>
        <div className={styles.card__img} style={{ backgroundColor: backgroundColor || '#396597' }}>
          <a href={url} target="_blank" rel="noreferrer">
            <img src={image} alt={alt} className={styles.img} />
          </a>
        </div>
        <div className={styles.text}>
          <a href={url} target="_blank" rel="noreferrer">
            <h2 className="hvr-underline-from-center">{title}</h2>
          </a>
          <p>{type}</p>
          <p>{date}</p>
          <p>{paragraph}</p>
        </div>
      </Container>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  type: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Card;
