import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="pre-header" style={{ height: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8 col-7">
              <ul className="info">
                <li>
                  <a href="#">
                    <i className="fa fa-envelope" />
                    digimedia@company.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone" />
                    010-020-0340
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-4 col-5">
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
      <Navbar
        expand="md"
        sticky="top"
        className={`header-area header-sticky ${isOpen ? "open" : ""}`}
      >
        <div className="container info-post">
          <Navbar.Brand href="#home">
            <img src="assets/images/logo-v1.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleMenu}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <div className="border-first-button d-block d-md-none">
              <Nav.Link href="#contact">Free Quote</Nav.Link>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      </div>
  );
};

export default Header;
