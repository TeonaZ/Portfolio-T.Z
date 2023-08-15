import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";
import Teona from "../assets/Teona.jpg";
// import resumePDF from "../assets/EricHoover-Resume.pdf";

function Hero() {
  return (
    <div className='hero'>
      <Container>
        <Row className='flex-column-reverse flex-lg-row'>
          <Col className='hero-content text-lg-start text-center'>
            <h1 className='hero-heading'>
              <div>Hello, My name is</div>
              <span>Teona Zaalishvili</span>
            </h1>
            <p className='sub-heading'>Software Engineer</p>
            <div className=''>
              <div className='' style={{ display: "inline-block" }}>
                <Button href={"https://www.linkedin.com/in/teona-zaalishvili/"} className='custom-btn'>
                  LinkedIn
                </Button>
              </div>

              {/* <div className='btn-transparent' style={{ display: "inline-block" }}>
                <Button className='custom-btn' href={"../assets/EricHoover-Resume.pdf"}>
                  Résumé
                </Button>
              </div> */}
            </div>
          </Col>
          <Col>
            <div className='hero-image-cover'>
              <Image src={Teona} alt='profile' className='hero-image' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
