import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import EducationBox from "./EducationBox";
import TSU from "../assets/TSU.png";
import NYU from "../assets/NYU.png";
import h2 from "../assets/h2.png";
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
          <EducationBox img={h2} title='Quality Assurance' description='H2Kinfosys, LLC' />
        </Row>
      </Container>
    </div>
  );
}

export default Education;
