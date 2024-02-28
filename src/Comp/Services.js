import React, { useState } from "react";

const Services = () => {
  const [liitem, setliitem] = useState(1);
  return (
    
    <div className="page-content">
      Services
      <div id="about">
      <div id="services" className="services section">
        <div className="container" >
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h6>Our Services</h6>
                <h4>
                  What Our Agency <em>Provides</em>
                </h4>
                <div className="line-dec" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs ">
                <div className="grid" >
                  <div className="row" >
                    <div className="col-lg-12 mb-5" >
                      <div className="menu d-flex" >
                        <div className={liitem == 1 ? "active" : ""}>
                        <div
                          className="thumb"
                          onClick={() => {
                            setliitem(1);
                          }}
                        >
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-01.png"
                                alt
                              />
                            </span>
                            Apartments
                          </div>
                        </div>
                        <div className={liitem == 2 ? "active" : ""}>
                          <div
                            className="thumb"
                            onClick={() => {
                              setliitem(2);
                            }}
                          >
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-02.png"
                                alt
                              />
                            </span>
                            Food &amp; Life
                          </div>
                        </div>
                        <div className={liitem == 3 ? "active" : ""}>
                          <div
                            className="thumb"
                            onClick={() => {
                              setliitem(3);
                            }}
                          >
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-03.png"
                                alt
                              />
                            </span>
                            Cars
                          </div>
                        </div>
                        <div className={liitem == 4 ? "active" : ""}>
                          <div
                            className="thumb"
                            onClick={() => {
                              setliitem(4);
                            }}
                          >
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-04.png"
                                alt
                              />
                            </span>
                            Shopping
                          </div>
                        </div>
                        <div className={liitem == 5 ? "active" : ""}>
                          <div
                            className="thumb"
                            onClick={() => {
                              setliitem(5);
                            }}
                          >
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-04.png"
                                alt
                              />
                            </span>
                            Travelling
                          </div>
                        </div>
                       
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <li className={liitem == 1 ? "active" : ""}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>SEO Analysis &amp; Daily Reports</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="">
                                    <img
                                      src="assets/images/services-image.jpg"
                                      alt
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={liitem == 2 ? "active" : ""}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div
                                    className="left-text"
                                    popover
                                    id="myheader"
                                  >
                                    <h4>Healthy Food &amp; Life</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="">
                                    <img
                                      src="assets/images/services-image-02.jpg"
                                      alt
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={liitem == 3 ? "active" : ""}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Car Re-search &amp; Transport</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="">
                                    <img
                                      src="assets/images/services-image-03.jpg"
                                      alt
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={liitem == 4 ? "active" : ""}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Online Shopping &amp; Tracking ID</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="">
                                    <img
                                      src="assets/images/services-image-04.jpg"
                                      alt="Hello"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={liitem == 5 ? "active" : ""}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Enjoy &amp; Travel</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check" /> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> SEO
                                        Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check" /> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                               
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
   
    
  );
};

export default Services;
