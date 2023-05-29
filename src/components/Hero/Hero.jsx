import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* LEFT SIDE */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="circle" />
            <h1>
              Discover <br /> Best Suitable <br />
              Property
            </h1>
          </div>

          <div className="flexColStart hero-desc">
            <span className="secondaryText">
              Find a variety of properties that suit you at ease
            </span>
            <span className="secondaryText">
              Forget all difficulties in findind a residence for you
            </span>
          </div>

          {/* Search Bar */}
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          {/* hero stats */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Locations</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flexCenter hero-right">
          <div className="img-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
