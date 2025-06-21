import React from 'react';
import './Carousel.css';
export default function Carousel() {
  return (
    <section className="carousel">
      <div className="slider">
        <img
          src="/src/assets/images/carousel/iPhone-16-Blog-Banner-1.webp"
          alt=""
          className="slide"
        />
        <img
          src="/src/assets/images/carousel/SAMSUNG-GALAXY-S24-SAMSUNG-GALAXY-S24-MAIN-BANNER-ALEZAY-KUWAIT.webp"
          alt=""
          className="slide"
        />
        <img
          src="/src/assets/images/carousel/Pixel-9-vanilla-banner-770x307.jpg"
          alt=""
          className="slide"
        />
      </div>
    </section>
  );
}
