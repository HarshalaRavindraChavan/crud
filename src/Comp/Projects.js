import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  // Custom navigation button component for the "Next" button
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style,backgroundColor:"black", display: "block", right: "20px", zIndex: 1 }} onClick={onClick}>
        <span className="custom-arrow">Next</span>
      </div>
    );
  };

  // Custom navigation button component for the "Previous" button
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style,backgroundColor:"black", display: "block", left: "20px", zIndex: 1 }} onClick={onClick}>
        <span className="custom-arrow">Prev</span>
      </div>
    );
  };

  const slides = [
    {
      url: "http://127.0.0.1:5500/assets/images/portfolio-01.jpg",
      alt: "Slide 1",
    },
    {
      url: "http://127.0.0.1:5500/assets/images/portfolio-02.jpg",
      alt: "Slide 2",
    },
    {
      url: "http://127.0.0.1:5500/assets/images/portfolio-03.jpg",
      alt: "Slide 3",
    },
    {
      url: "http://127.0.0.1:5500/assets/images/portfolio-04.jpg",
      alt: "Slide 4",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="page-content" style={{ paddingTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div
              className="section-heading wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              style={{ paddingTop: "70px" }}
            >
              <h6>Our Portfolio</h6>
              <h4>
                See Our Recent <em>Projects</em>
              </h4>
              <div className="line-dec" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row ">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-item">
              <a href="#">
                <div className="portfolio-item">
                  <div className="thumb">
                    <img
                      src={slide.url}
                      alt={slide.alt}
                      style={{ height: "330px", width: "401px" }}
                    />
                  </div>
                  <div className="down-content">
                    <h4>Website Builder</h4>
                    <span>Marketing</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </div>
  );
};

export default Projects;
