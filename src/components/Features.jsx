import { Col, Container, Image, Row } from "react-bootstrap";
import LogoIpsum1 from "../assets/MobileApp/LogoIpsum1.svg";
import LogoIpsum2 from "../assets/MobileApp/LogoIpsum2.svg";
import LogoIpsum3 from "../assets/MobileApp/LogoIpsum3.svg";
import LogoIpsum4 from "../assets/MobileApp/LogoIpsum4.svg";
import LogoIpsum5 from "../assets/MobileApp/LogoIpsum5.svg";
import LogoIpsum6 from "../assets/MobileApp/LogoIpsum6.svg";
import "../styles/Features/Features.css";


export default function Features() {
  return (
    <Container className="mobile-app-features-section">
      <Row className="d-flex gap-4">
        <Col className="d-flex justify-content-center px-0">
          <Image src={LogoIpsum1} className="p-3"/>
        </Col>
        <Col className="d-flex justify-content-center px-0">
          <Image src={LogoIpsum2} className="p-3"/>
        </Col>
        <Col className="d-flex justify-content-center px-0">
          <Image src={LogoIpsum3} className="p-3"/>
        </Col>
        <Col className="d-flex justify-content-center px-0">
          <Image src={LogoIpsum4} className="p-3"/>
        </Col>
        <Col className="d-flex justify-content-center px-0">
          <Image src={LogoIpsum5} className="p-3"/>
        </Col>
        <Col className="d-flex justify-content-center px-0">
          <Image src={LogoIpsum6} className="p-3"/>
        </Col>
      </Row>
    </Container>
  );
}
