import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  
  return (
    <div className="">
      <h2>About Lola</h2>
      <div>
        Lola is a language tandem finder that brings people together to learn
        languages. It uses React, Node, and MongoDB, along with React Bootstrap
        and Fontawesome.{' '}
      </div>
      <h2>The Team</h2>
      <Container>
        <Row>Julia Jannsen</Row>
        <div>
          <a href='https://www.linkedin.com/in/juliamj/'>
            <i class='fab fa-linkedin'></i>
          </a>
        </div>
        <div>
          <a href='https://github.com/juliamj'>
            <i class='fab fa-github-square'></i>
          </a>
        </div>
      </Container>
      <Container>
        <Row>Holden Madagame</Row>
        <div>
          <a href='https://www.linkedin.com/in/holdenmad/'>
            <i class='fab fa-linkedin'></i>
          </a>
        </div>
        <div>
          <a href='https://github.com/holdenmad'>
            <i class='fab fa-github-square'></i>
          </a>
        </div>
      </Container>
      {/* {!state.isLoggedIn && <Link to="/"><button className="">Back to Welcome Page</button></Link>} */}
    </div>
  );
};

export default About;
