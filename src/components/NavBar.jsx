import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import "../styles/NavBar/NavBar.css";
import SearchIcon from "../assets/NavBar/SearchIcon.svg";
import CartIcon from "../assets/NavBar/CartIcon.svg";
import ProfileIcon from "../assets/NavBar/ProfileIcon.svg";

export default function NavBar() {
  return (
    <>
      <Container
        fluid
        className="navbar-discount-container d-flex justify-content-center py-2"
      >
        <p className="navbar-discount-text text-center mb-0">
          Sign up and get 20% off to your first order.{" "}
          <span className="navbar-discount-link">Sign Up Now</span>
        </p>
      </Container>
      <Navbar expand="lg">
        <Container fluid>
          <div className="d-flex align-items-center">
            <NavbarToggle/>
            <NavbarBrand className="py-0 m-0">SHOP.CO</NavbarBrand>
          </div>
          <div className="navbar-actions-container d-flex">
            <img src={SearchIcon} alt="SearchIcon" />
            <img src={CartIcon} alt="CartIcon" />
            <img src={ProfileIcon} alt="ProfileIcon" />
          </div>
        </Container>
      </Navbar>
    </>
  );
}
