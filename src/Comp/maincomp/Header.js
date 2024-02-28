import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../maincomp/Style.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    //   <div className="">
    //     <div className="pre-header" style={{ height: "50px" }}>
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-8 col-sm-8 col-7">
    //             <ul className="info">
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-envelope" />
    //                   digimedia@company.com
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-phone" />
    //                   010-020-0340
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="col-lg-4 col-sm-4 col-5">
    //             <ul className="social-media">
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-facebook" />
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-behance" />
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-twitter" />
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-dribbble" />
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //       <Navbar
    //         expand="md"
    //         sticky="top"
    //         className={`header-area header-sticky ${isOpen ? "open" : ""}`}
    //       >
    //     <div className="container">
    //   <div className="d-flex justify-content-between align-items-center">
    //     <Navbar.Brand href="#home">
    //       <img src="assets/images/logo-v1.png" alt="Logo" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="mr-auto ">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/about">About</Nav.Link>
    //         <Nav.Link href="/services">Services</Nav.Link>
    //         <Nav.Link href="/projects">Projects</Nav.Link>
    //         <Nav.Link href="/blog">Blog</Nav.Link>
    //         <Nav.Link href="/contact">Contact</Nav.Link>
    //       </Nav>
    //       <div className="border-first-button d-block d-md-none">
    //         <Nav.Link href="#contact">Free Quote</Nav.Link>
    //       </div>
    //     </Navbar.Collapse>
    //   </div>
    // </div>

    //       </Navbar>
    //     </div>
    <div>
      <div>
        <div className="pre-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-8 col-7">
                <ul className="info badge">
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
        {/* Pre-header End */}
        {/* ***** Header Area Start ***** */}
        <header
          className="header-area header-sticky wow slideInDown"
          data-wow-duration="0.75s"
          data-wow-delay="0s"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="index.html" className="logo">
                    <img src="assets/images/logo-v1.png" alt />
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li className="scroll-to-section">
                      {" "}
                      <Link to="/">Home </Link>
                    </li>
                    <li className="scroll-to-section">
                      {" "}
                      <Link to="/about">About </Link>
                    </li>
                    <li className="scroll-to-section">
                      {" "}
                      <Link to="/services">Services </Link>
                    </li>
                    <li className="scroll-to-section">
                      {" "}
                      <Link to="/projects">Projects </Link>
                    </li>
                    <li className="scroll-to-section">
                      {" "}
                      <Link to="/blog">Blog </Link>
                    </li>
                    <li className="scroll-to-section">
                      {" "}
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li >
                      {" "}
                    </li>
                  </ul>
                  {/* <div>
      <a className="menu-trigger" onClick={handleMenuToggle}>
        <span>Menu</span>
      </a>
      {isMenuOpen && (
        <ul className="mobile-menu">
          <li className="scroll-to-section">
            <Link to="/">Home</Link>
          </li>
          <li className="scroll-to-section">
            <Link to="/about">About</Link>
          </li>
          <li className="scroll-to-section">
            <Link to="/services">Services</Link>
          </li>
          <li className="scroll-to-section">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="scroll-to-section">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="scroll-to-section">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </div> */}
                  <div>
                    <a
                      className="menu-trigger"
                      onClick={handleMenuToggle}
                      style={{ cursor: "pointer" }} // Inline style for cursor
                    >
                      <span style={{ fontWeight: "bold" }}>Menu</span>{" "}
                      {/* Inline style for font weight */}
                    </a>
                    {isMenuOpen && (
                      <ul
                        className="mobile-menu"
                        style={{
                          display: "block", // Inline style to show the menu
                          position: "absolute",
                          top: "100%",
                          height: "240px",
                          width: "400px",
                          textAlign: "center",
                          left: 0,
                          backgroundColor: "#fff",
                          padding: "30px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <li className="scroll-to-section">
                          <Link
                            to="/"
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                            style={{
                              textDecoration: "none",
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          >
                            Home
                          </Link>{" "}
                          {/* Inline styles for link */}
                        </li>
                        <li className="scroll-to-section mt-2">
                          <Link
                            to="/about"
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                            style={{
                              textDecoration: "none",
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          >
                            About
                          </Link>
                        </li> 
                        <li className="scroll-to-section mt-2">
                          <Link
                            to="/services"
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                            style={{
                              textDecoration: "none",
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          >
                            Services
                          </Link>
                        </li>
                        <li className="scroll-to-section mt-2">
                          <Link
                            to="/projects"
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                            style={{
                              textDecoration: "none",
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          >
                            Projects
                          </Link>
                        </li>
                        <li className="scroll-to-section mt-2">
                          <Link
                            to="/blog"
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                            style={{
                              textDecoration: "none",
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          >
                            Blog
                          </Link>
                        </li>
                        <li className="scroll-to-section mt-2">
                          <Link
                            to="/contact"
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                            style={{
                              textDecoration: "none",
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
