import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import Slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme styles

const Carousel = () => {
  // Slick settings
  const settings = {
    dots: true,              // Show dots for pagination
    infinite: true,          // Infinite loop
    speed: 500,              // Transition speed
    slidesToShow: 3,         // Number of slides to show
    slidesToScroll: 1,       // Number of slides to scroll
    autoplay: true,          // Enable auto-scrolling
    autoplaySpeed: 3000,     // Auto-scroll speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="carousel">
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1710845987606_G2Dtn.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1711527206968_sfwcx.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1722246133302_eDFFv.png" alt="Slide 3" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1722246098532_F4ewx.png" alt="Slide 4" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1711527197852_OKns3.jpg" alt="Slide 5" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1710845987606_G2Dtn.jpg" alt="Slide 6" />
      </div>
    </Slider>
  );
};

export default Carousel;
