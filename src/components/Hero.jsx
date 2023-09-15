import { Col, Container, Row } from "react-bootstrap";
import "../styles/Hero/Hero.css";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Hero() {
  const width = useWindowWidth();

  return (
    <Container fluid className="hero-section-container">
      <Container className="px-0">
        <h1 className="hero-title mb-0">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="hero-subtitle">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="hero-shop-btn-container d-flex justify-content-center">
          <button className="hero-shop-btn d-flex justify-content-center align-items-center">
            Shop Now
          </button>
        </div>
        <Container className="d-flex justify-content-center align-items-center">
          <Row className="w-100">
            <Col className="hero-statistics-col d-flex flex-column justify-content-center px-0">
              <h3 className="hero-statistics-number mb-0">200+</h3>
              <p className="hero-statistics-text text-nowrap mb-0">
                International Brands
              </p>
            </Col>
            <Col xs="auto">
              <span className="hero-statistics-divider d-block"></span>
            </Col>
            <Col className="hero-statistics-col d-flex flex-column justify-content-center px-0">
              <h3 className="hero-statistics-number mb-0">2000+</h3>
              <p className="hero-statistics-text text-nowrap mb-0">
                High-Quality Products
              </p>
            </Col>
            {width >= 397 && (
              <Col xs="auto">
                <span className="hero-statistics-divider d-block"></span>
              </Col>
            )}
            <Col
              xs={12}
              sm="auto"
              className={`hero-statistics-col d-flex flex-column justify-content-center align-items-center ${
                width < 576 ? "mt-3" : ""
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
    </Container>
  );
}
