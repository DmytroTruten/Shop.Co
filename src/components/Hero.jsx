import { Col, Container, Row } from "react-bootstrap";
import AppstoreBtn from "../assets/MobileApp/AppstoreBtn.svg";
import GooglePlayBtn from "../assets/MobileApp/GooglePlayBtn.svg";
import iPhone12ProFirst from "../assets/MobileApp/iPhone12ProFirst.svg";
import iPhone12ProSecond from "../assets/MobileApp/iPhone12ProSecond.svg";

import "../styles/Hero/Hero.css";

export default function Hero() {
  return (
    <Container fluid className="mobile-app-hero-background px-0">
      <Container className="mobile-app-hero-section d-flex flex-column mt-5">
        <Row className="mobile-app-hero-row d-flex flex-column flex-md-row justify-content-between">
          <Col className="d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-4">
              <h1 className="mobile-app-hero-h1 mb-0">
                Manage All Your Money in One App
              </h1>
              <h5 className="mobile-app-hero-subtitle mb-0">
                We offer you a new generation of the mobile banking. Save, spend
                & manage money in your pocket.
              </h5>
            </div>
            <div className="d-flex flex-wrap gap-4">
              <img src={AppstoreBtn} alt="appstore" />
              <img src={GooglePlayBtn} alt="appstore" />
            </div>
          </Col>
          <Col className="hero-img-col d-flex align-items-end">
            <img className="iphone-img-second" src={iPhone12ProSecond} />
            <img className="iphone-img-first" src={iPhone12ProFirst} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
