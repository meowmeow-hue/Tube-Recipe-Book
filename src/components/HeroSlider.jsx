import { useState, useEffect } from "react";
import "../styles/HeroSlider.css";

import coffee1 from "../assets/slider/coffee1.jpg";
import coffee2 from "../assets/slider/coffee2.jpg";
import coffee3 from "../assets/slider/coffee3.jpg";

const slides = [{ image: coffee1 }, { image: coffee2 }, { image: coffee3 }];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.caption} />
        </div>
      ))}

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
