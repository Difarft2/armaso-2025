import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/aboutus.css"
import Button from 'react-bootstrap/Button';


const ExampleCarouselImage = ({ text }) => {
  return (
    <div 
      style={{
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '24px'
      }}
    >
      {text}
    </div>
  );
};

const UncontrolledExample = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const ResponsivePage = () => {
  return (
    <div className="container-fluid" id='aboutus'>
      <h1>Do you know Armaso?</h1>
      <div className="content">
        <div className="carousel-container">
          <UncontrolledExample />
        </div>
        <div className="text-content">
          <p>
            ARMASO (Ar-Rahmat Mathematic, Science, and Social Olympiad) ini merupakan olimpiade tingkat SD Sederajat yang diadakan oleh Pondok Pesantren Modern Ar Rahmat Bojonegoro. Melalui ARMASO 2023 diharapkan para siswa sebagai generasi muda penerus bangsa dapat memiliki kompetensi dan kecerdasan dalam memahami isu-isu yang berkaitan dengan Matematika Sains dan Sosial.
          </p>
          <div className="buttons">
          <Button variant="secondary">Login</Button>{' '}
          <Button variant="secondary">Register</Button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivePage;
