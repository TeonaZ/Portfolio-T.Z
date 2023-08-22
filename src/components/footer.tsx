import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import icon1 from "../assets/fb.svg";
import icon2 from "../assets/tw.svg";
import icon3 from "../assets/yt.svg";
import icon4 from "../assets/cir.svg";

function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='text-center text-md-start'>
          <Col lg={4} md={6} sm={12} className='mb-3'>
            <ListGroup>
              <ListGroup.Item className='logo'>
                <h4>Teona Zaalishvili</h4>
              </ListGroup.Item>
              <ListGroup.Item>Thank you for visiting my portfolio!</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2} md={6} sm={12} className='mb-3'>
            <ListGroup>
              <ListGroup.Item className='footer-link-heading'>
                <p>Contact Me</p>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href='https://www.linkedin.com/in/teona-zaalishvili/'>LinkedIn</a>{" "}
              </ListGroup.Item>
              <ListGroup.Item>  <a href='mailto:teonazaalishvili2@gmail.com'>
                Email-
                  <FontAwesomeIcon icon={faEnvelope} className='email-icon' />
                </a></ListGroup.Item>
              <ListGroup.Item> {/* <a href='#'>Contact Us</a> */}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2} md={6} sm={12} className='mb-3'>
            <ListGroup>
              <ListGroup.Item className='footer-link-heading'>
                <p>Project Links</p>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href='https://www.careerplantoday.com/'>Career Plan Today</a>
              </ListGroup.Item>
              <ListGroup.Item> {/* <a href='#'>Privacy Policy</a> */}</ListGroup.Item>
              <ListGroup.Item> {/* <a href='#'>Feedback</a> */}</ListGroup.Item>
            </ListGroup>
          </Col>
          {/* <Col lg={4} md={6} sm={12} className='mb-3'>
            <div className='d-flex align-items-end justify-content-center justify-content-lg-end justify-content-md-start'>
              <a href='#'>
                <div className='social-icon'>
                  <Image src={icon1} />
                </div>
              </a>
              <a href='#'>
                <div className='social-icon'>
                  <Image src={icon2} />
                </div>
              </a>
              <a href='#'>
                <div className='social-icon'>
                  <Image src={icon3} />
                </div>
              </a>
              <a href='#'>
                <div className='social-icon'>
                  <Image src={icon4} />
                </div>
              </a>
            </div>
          </Col> */}
        </Row>
        {/* <p className='copyright text-center text-md-start'>© 2023 | Eric Hoover All Rights Reserved</p> */}
      </Container>
    </div>
  );
}

export default Footer;
