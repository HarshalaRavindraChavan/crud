import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css"; // Import your custom CSS file

const Projects = () => {
  // const slides = [
  //   {
  //     url: "assets/images/portfolio-01.jpg",
  //     alt: "Slide 1"
  //   },
  //   {
  //     url: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_640.jpg",
  //     alt: "Slide 2"
  //   },
  //   {
  //     url: "https://vsmart.ajspire.com/uploads/slider/x1667996845.jpg.pagespeed.ic.ZqSbg9ERPi.webp",
  //     alt: "Slide 3"
  //   },
  //   {
  //     url: "https://vsmart.ajspire.com/uploads/slider/1654577598.jpg",
  //     alt: "Slide 4"
  //   }
  //   // Add more slides as needed
  // ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3, // Display three slides at a time
  //   slidesToScroll: 1
  // };

  return (
    <div className="page-content" style={{ paddingTop: "50px" }}>
      {/* <div className="row">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-item">
              <img src={slide.url} alt={slide.alt} style={{ height: "300px" }} />
            </div>
          ))}
        </Slider>
      </div> */}
      <div className="container" >
        <div className="row">
          <div className="col-lg-5">
            <div
              className="section-heading wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              style={{paddingTop:'70px'}}
            >
              <h6>Our Portofolio</h6>
              <h4>
                See Our Recent <em>Projects</em>
              </h4>
              <div className="line-dec" />
            </div>
          </div>
        </div>
      </div>

      <div className="owl-item" style={{ width: "400px" }}>
        <div className="item">
          <a href="#">
            <div className="portfolio-item">
              <div className="thumb">
                <img src="http://127.0.0.1:5500/assets/images/portfolio-02.jpg" alt />
              </div>
              <div className="down-content">
                <h4>Website Builder</h4>
                <span>Marketing</span>
              </div>
            </div>
          </a>
        </div>
        <div className="owl-item" style={{ width: "400px" }}>
          <div className="item">
            <a href="#">
              <div className="portfolio-item">
                <div className="thumb">
                  <img src="assets/images/portfolio-01.jpg" alt />
                </div>
                <div className="down-content">
                  <h4>Website Builder</h4>
                  <span>Marketing</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="owl-item" style={{ width: "400px" }}>
          <div className="item">
            <a href="#">
              <div className="portfolio-item">
                <div className="thumb">
                  <img src="http://127.0.0.1:5500/assets/images/portfolio-03.jpg" alt />
                </div>
                <div className="down-content">
                  <h4>Website Builder</h4>
                  <span>Marketing</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="owl-item" style={{ width: "400px" }}>
          <div className="item">
            <a href="#">
              <div className="portfolio-item">
                <div className="thumb">
                  <img src="http://127.0.0.1:5500/assets/images/portfolio-01.jpg" alt />
                </div>
                <div className="down-content">
                  <h4>Website Builder</h4>
                  <span>Marketing</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="owl-item" style={{ width: "400px" }}>
        <div className="item">
          <a href="#">
            <div className="portfolio-item">
              <div className="thumb">
                <img src="http://127.0.0.1:5500/assets/images/portfolio-04.jpg" alt />
              </div>
              <div className="down-content">
                <h4>Website Builder</h4>
                <span>Marketing</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
