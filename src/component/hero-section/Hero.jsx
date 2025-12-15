import React from "react";
import "./Hero.css";
import Button from '../buttons/button.jsx'
import ArrowIcon from '../../assets/icons/arrow-right.svg?react'
import heroImage from "../../assets/image/hero-image.png"; 
import instructor1 from "../../assets/image/instructor-1.jpg"; 
import instructor2 from "../../assets/image/instructor-2.jpg";
import instructor3 from "../../assets/image/instructor-3.jpg";
import instructor4 from "../../assets/image/instructor-4.jpg";
import heroDotArrow from "../../assets/image/hero-dot-arrow.png";
import heroBoxDot from "../../assets/image/hero-box-dot.png"; 
import heroFile from "../../assets/image/hero-file.png"; 

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__subtitle">WELCOME EDUNITY ONLINE COURSES</p>
        <h1 className="hero__title">
          Achieving Your Dreams <br /> Through Education
        </h1>
        <p className="hero__description">
          We are experienced in educational platform and skilled strategies for the success of our online learning.
        </p>
        <Button className='hero__cta' variant="cta" rightIcon={<ArrowIcon/>}>
          Find Courses
        </Button>
      </div>
      <div className="hero-dot-arrow">
        <img src={heroDotArrow} alt="hero dot arrow" />
      </div>
      <div className="hero-file">
        <img src={heroFile} alt="hero file" />
      </div>
      <div className="hero__image-container">
        <img src={heroImage} alt="Hero" className="hero__image" />
        <img src={heroBoxDot} alt="hero box dot" className="hero-box-dot" />
        <div className="hero__instructors">
          <p> <span>200+</span> Instructor</p>
          <div className="hero__avatars">
            <img src={instructor1} alt="Instructor 1" />
            <img src={instructor2} alt="Instructor 2" />
            <img src={instructor3} alt="Instructor 3" />
            <img src={instructor4} alt="Instructor 4" />
            <div className="hero__more">+</div>
          </div>
        </div>
      </div>
    </section>
  );
};
