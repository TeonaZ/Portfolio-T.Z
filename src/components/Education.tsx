import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import EducationBox from "./EducationBox";
import TSU from "../assets/TSU.png";
import NYU from "../assets/NYU.png";
import Heading from "./heading";

function Education() {
  return (
    <div className='education'>
      <Container>
        <div className='heading'>
          <Heading title='Education ' />
        </div>
        <Row className='justify-content-center'>
          <EducationBox img={TSU} title='Bachelor of Law' description='Tbilisi State University' />
          <EducationBox img={NYU} title='Software Engineer' description='NYU Bootcamp' />
        </Row>
      </Container>
    </div>
  );
}

export default Education;
