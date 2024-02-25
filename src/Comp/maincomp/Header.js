import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8 col-7">
              <ul className="info">
                <li><a href="#"><i className="fa fa-envelope" />digimedia@company.com</a></li>
                <li><a href="#"><i className="fa fa-phone" />010-020-0340</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-4 col-5">
              <ul className="social-media">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
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
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li className="scroll-to-section"><a href="#blog">Blog</a></li>
            <li className="scroll-to-section"><a href="#contact">Contact</a></li> 
            <li className="scroll-to-section"><div className="border-first-button"><a href="#contact">Free Quote</a></div></li> 
          </ul>        
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
          {/* ***** Menu End ***** */}
        </nav>
      </div>
    </div>
  </div>
</header>


    </div>
  )
}

export default Header