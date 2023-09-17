import { Col, Container, Image, Row } from "react-bootstrap";
import useWindowWidth from "../hooks/useWindowWidth";
import HeroImgFull from "../assets/Hero/HeroImgFull.jpg";
import "../styles/Hero/Hero.css";

export default function Hero() {
  const width = useWindowWidth();

  return (
    <Container fluid className="hero-section-background px-0">
      <Container
        fluid="lg"
        className="hero-section-container d-flex flex-column flex-lg-row px-3 px-lg-0"
      >
        <Container className="hero-section-inner-container d-flex flex-column px-3 px-lg-0">
          <h1 className="hero-title mb-0">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="hero-subtitle">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="hero-shop-btn-container d-flex justify-content-center justify-content-lg-start">
            <button className="hero-shop-btn d-flex justify-content-center align-items-center">
              Shop Now
            </button>
          </div>
          <Container className="d-flex justify-content-center justify-content-lg-start">
            <Row className="hero-statistics-row">
              <Col className="hero-statistics-col d-flex flex-column justify-content-center align-items-center px-0">
                <div className="hero-statistics-inner-col">
                  <h3 className="hero-statistics-number mb-0">200+</h3>
                  <p className="hero-statistics-text text-nowrap mb-0">
                    International Brands
                  </p>
                </div>
              </Col>
              {width > 302 && (
                <Col className="d-flex justify-content-center">
                  <span className="hero-statistics-divider d-block"></span>
                </Col>
              )}
              <Col
                className={`hero-statistics-col d-flex flex-column justify-content-center align-items-center ${
                  width <= 277 ? "mt-3" : ""
                } px-0`}
              >
                <div className="hero-statistics-inner-col">
                  <h3 className="hero-statistics-number mb-0">2000+</h3>
                  <p className="hero-statistics-text text-nowrap mb-0">
                    High-Quality Products
                  </p>
                </div>
              </Col>
              {width >= 576 && (
                <Col className="d-flex justify-content-center">
                  <span className="hero-statistics-divider d-block"></span>
                </Col>
              )}
              <Col
                className={`hero-statistics-col d-flex flex-column justify-content-center align-items-center ${
                  width <= 576 ? "mt-3" : ""
                } px-0`}
              >
                <div className="hero-statistics-inner-col">
                  <h3 className="hero-statistics-number mb-0">30,000+</h3>
                  <p className="hero-statistics-text text-nowrap mb-0">
                    Happy Customers
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="pt-4 pt-lg-0 px-3 px-lg-0">
          <Image className="hero-img" src={HeroImgFull} />
        </Container>
      </Container>
    </Container>
  );
}
