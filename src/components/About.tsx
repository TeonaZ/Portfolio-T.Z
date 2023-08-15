import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assets/img-9.png";
import ListGroup from "react-bootstrap/ListGroup";
import Heading from "./heading";
;

function About() {
  return (
    <div className='about-us'>
      <Container>
        <Row className='flex-lg-row flex-column'>
        
          <Col className='about-us-content'>
            <div className='mb-3'>
              <Heading title='About Me' />
            </div>
            <p className='sub-heading'>
              I’m a full-stack software engineer with a passion for empathy and a love for understanding how businesses can deliver greater value to
              the people they serve.
            </p>
            <ListGroup>
              <ListGroup.Item className='d-flex align-items-center'>
                <div className='check'>
                  <svg width='21' height='12' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.91273 17.2739L2.87296 10.4609L0.526367 12.7319L9.91273 21.8159L30.0264 2.35012L27.6798 0.0791016L9.91273 17.2739Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p>Technologies include HTML, CSS, JavaScript, Typescript, React, Redux, and AWS</p>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex align-items-center'>
                <div className='check'>
                  <svg width='21' height='12' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.91273 17.2739L2.87296 10.4609L0.526367 12.7319L9.91273 21.8159L30.0264 2.35012L27.6798 0.0791016L9.91273 17.2739Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p>Certifications incude AWS Developer Associate, AWS Cloud Practitioner, and Certified SAFe® 5 Practitioner</p>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex align-items-center'>
                <div className='check'>
                  <svg width='21' height='12' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.91273 17.2739L2.87296 10.4609L0.526367 12.7319L9.91273 21.8159L30.0264 2.35012L27.6798 0.0791016L9.91273 17.2739Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p>
                  Favorite empathy concepts include understanding needs, communicating diplomatically, setting healthy boundaries, and connecting with
                  people in meaningful ways.
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
