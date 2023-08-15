import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProjectsBox from "./ProjectsBox";
import img1 from "../assets/img-6.png";
import img2 from "../assets/img-7.png";
import img3 from "../assets/img-8.png";
import Heading from "./heading";
import img1svg from "../assets/icon-1.svg";

function Projects() {
  return (
    <div className='projects'>
      <Container>
        <div className='heading dark-heading'>
          <Heading title='Projects' />
        </div>
        <Row className='justify-content-center'>
          <ProjectsBox img={img1svg} href={"https://github.com/TeonaZ"} title='GitHub' />
          {/* <ProjectsBox img={img2} title='Therapy AI' cost='Cost $12,783' /> */}
          {/* <ProjectsBox img={img3} title='University of Notre Dame' cost='Cost $12,783' /> */}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
