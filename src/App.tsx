import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "./assets/images (1).jpeg";
import celebrating from "./assets/celebrating.png";
import education from "./assets/education.png";
import taken from "./assets/taken.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];

function App() {
  const NextArrow = ({ onClick }:any) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
        
        
      </div>
      
      
    );
  };

  const PrevArrow = ({ onClick }:any) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings:any = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    leftMode: true,
    slidesToScroll: 1,
    leftPadding: 0,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current:any, next:any) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;