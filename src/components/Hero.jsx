import { Container } from "react-bootstrap";
import AppstoreBtn from "../assets/MobileApp/AppstoreBtn.svg";
import GooglePlayBtn from "../assets/MobileApp/GooglePlayBtn.svg";
import iPhone12ProFirst from "../assets/MobileApp/iPhone12ProFirst.svg";
import iPhone12ProSecond from "../assets/MobileApp/iPhone12ProSecond.svg";
import "../styles/Hero/Hero.css";

export default function Hero() {
  return (
    <Container fluid className="mobile-app-hero-background d-flex px-0">
      <Container className="mobile-app-hero d-flex flex-column flex-lg-row">
        <div className="mobile-app-hero-title d-flex flex-column justify-content-lg-center gap-5">
          <div className="d-flex flex-column gap-4">
            <h1 className="mb-0">Manage All Your Money in One App</h1>
            <h5 className="mb-0">
              We offer you a new generation of the mobile banking. Save, spend &
              manage money in your pocket.
            </h5>
          </div>
          <div className="mobile-app-hero-market-container d-flex flex-wrap gap-4">
            <img src={AppstoreBtn} alt="appstore" />
            <img src={GooglePlayBtn} alt="appstore" />
          </div>
        </div>
        <Container className="mobile-app-hero-img-container">
          <img
            className="mobile-app-hero-iphone-img-second"
            src={iPhone12ProSecond}
            alt=""
          />
          <img
            className="mobile-app-hero-iphone-img-first"
            src={iPhone12ProFirst}
            alt=""
          />
        </Container>
      </Container>
    </Container>
  );
}
