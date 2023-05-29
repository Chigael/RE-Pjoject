import React from "react";
import { useSwiper } from "swiper/react";
import "../Residencies/SliderButtons.css";

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default SliderButton;
