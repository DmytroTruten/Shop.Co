import { Col, Container, Row } from "react-bootstrap";
import "../styles/Hero/Hero.css";

export default function Hero() {
  return (
    <Container fluid className="hero-section-container">
      <Container>
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
        <Row className="hero-statistics-row">
          <Col className="hero-statistics-col" xs={6}>
            <div className="d-flex flex-column">
              <h3 className="hero-statistics-number mb-0">200+</h3>
              <p className="hero-statistics-text mb-0">International Brands</p>
            </div>
          </Col>
          <Col className="hero-statistics-col" xs={6}>
            <div className="d-flex flex-column">
              <h3 className="hero-statistics-number mb-0">2000+</h3>
              <p className="hero-statistics-text mb-0">High-Quality Products</p>
            </div>
          </Col>
          <Col className="hero-statistics-col d-flex justify-content-center">
            <div className="d-flex flex-column">
              <h3 className="hero-statistics-number mb-0">30,000+</h3>
              <p className="hero-statistics-text mb-0">Happy Customers</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
