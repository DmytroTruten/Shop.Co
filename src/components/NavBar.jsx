import {
  Container,
  Nav,
  NavDropdown,
  NavLink,
  Navbar,
  NavbarBrand,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import SearchIcon from "../assets/NavBar/SearchIcon.svg";
import CartIcon from "../assets/NavBar/CartIcon.svg";
import ProfileIcon from "../assets/NavBar/ProfileIcon.svg";
import "../styles/NavBar/NavBar.css";
import useWindowWidth from "../hooks/useWindowWidth";

export default function NavBar() {
  const width = useWindowWidth();

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
      <Navbar expand="lg" className="py-4">
        <Container className="navbar-inner-container px-lg-0">
          <div className="d-flex align-items-center">
            <NavbarToggle className="p-0" aria-controls="offcanvas-navbar" />
            <p className="navbar-brand-text m-0">SHOP.CO</p>
          </div>
          <NavbarOffcanvas
            id="offcanvas-navbar"
            placement="start"
            restoreFocus={false}
          >
            <OffcanvasHeader closeButton>
              <OffcanvasTitle>
                <NavbarBrand className="py-0 m-0">SHOP.CO</NavbarBrand>
              </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
              <Nav className="gap-4">
                <NavDropdown className="text-nowrap" title="Shop"></NavDropdown>
                <NavLink className="text-nowrap">On Sale</NavLink>
                <NavLink className="text-nowrap">New Arrivals</NavLink>
                <NavLink className="text-nowrap">Brands</NavLink>
              </Nav>
            </OffcanvasBody>
          </NavbarOffcanvas>
          <div className="navbar-actions-container d-flex align-items-center">
            {width < 992 && <img className="navbar-actions-img" src={SearchIcon} alt="SearchIcon" />}
            {width >= 992 && (
              <div className="navbar-input-container d-flex">
                <img className="navbar-actions-img navbar-actions-img-filtered" src={SearchIcon} alt="SearchIcon" />
                <input className="navbar-input" type="text" placeholder="Search for products..."/>
              </div>
            )}
            <img className="navbar-actions-img" src={CartIcon} alt="CartIcon" />
            <img className="navbar-actions-img" src={ProfileIcon} alt="ProfileIcon" />
          </div>
        </Container>
      </Navbar>
    </>
  );
}
