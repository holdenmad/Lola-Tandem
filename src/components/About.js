import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className='d-flex flex-column justify-content-center bg-light rounded border border-0 shadow p-3 m-5'>
      <h1 className='text-center p-3'>About <span className="logo display-4">Lola</span></h1>
      {/* <div>
        Github Client | Github Server
      </div> */}
      <div className='pl-5 pr-5'>
        <p>
        <img src="rockmusic.png" className="about-image"/>
          <i>Lola</i> is a language tandem finder that brings people together to
          learn languages. During the time we made this app, we both were
          students at the WBS Coding School, and created the basis of the
          project within a 3-week time period while on campus. We're excited to
          share our accomplishments with you, and perhaps inspire you to learn a
          new language.
        </p>
        <p>
          The conversations that came up while creating this app revealed a lot
          to us about how difficult it is to create an inclusive app, but how
          rewarding it might be. We weren't able to implement all of the
          inclusive and safety features we wanted (member blocking to reduce
          abuse of female users, gender categorization for muslim female users,
          accessibility optimization, and creating truly inclusive gender
          options that don't exclude non-binary or trans users. We hope to
          continue developing this application to include these goals.
        </p>
      </div>

      <Container className='d-flex m-3 justify-content-center'>
        <Row>
          <Col sm={4} className=''>
            <h2>Our Stack</h2>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
              <li>React Bootstrap</li>
              <li>JWT Authentication</li>
            </ul>
          </Col>

          <Col sm={4} className=''>
            <h2>Resources</h2>
            <ul>
              <li>
                <b>Illustrations:</b>{' '}
                <a href='https://stories.freepik.com/' className="linkPurple">Stories.Freepik</a>
              </li>
              <li>
                <b>Icons:</b> <a href='https://fontawesome.com/' className="linkPurple">Fontawesome</a>
              </li>
            </ul>
          </Col>
          <Col sm={4} className=''>
            <h2>The Team</h2>

            <div className="ml-3">
              <div>Julia Jannsen</div>
              <span>
                <a href='https://www.linkedin.com/in/juliamj/'>
                  <i class='fab fa-linkedin icon-large linkPurple'></i>
                </a>
              </span>
              <span>
                <a href='https://github.com/juliamj'>
                  <i class='fab fa-github-square icon-large ml-2 linkPurple'></i>
                </a>
              </span>
            </div>
            <div className="ml-3 mt-3">
              <div>Holden Madagame</div>
              <span>
                <a href='https://www.linkedin.com/in/holdenmad/'>
                  <i class='fab fa-linkedin icon-large linkPurple'></i>
                </a>
              </span>
              <span>
                <a href='https://github.com/holdenmad'>
                  <i class='fab fa-github-square icon-large ml-2 linkPurple'></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>

      {/* {!state.isLoggedIn && <Link to="/"><button className="">Back to Welcome Page</button></Link>} */}
    </div>
  );
};

export default About;
