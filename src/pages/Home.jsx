import React from 'react';
import { Carousel } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import styles from './Hero.module.css';
import service1 from '../img/autoservise1.png';

export default function Home() {
  return (
    <Carousel>
      <Carousel.Item />
      <img src={service1} alt="service" className="d-block w-100" />
      <Carousel.Item />
    </Carousel>
  );
}
