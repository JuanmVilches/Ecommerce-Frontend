import React from 'react';
import './Home.css';
import SectionInfo from '../../components/SectionInfo/SectionInfo';
import SectionProducts from '../../components/SectionProducts/SectionProducts';
import Carousel from '../../components/Carousel/Carousel';
import Features from '../../components/Features/Features';

export default function Home() {
  return (
    <>
      <Carousel />
      <SectionInfo />
      <SectionProducts />
      <Features />
      <img
        className="secondary-banner-image"
        src="/src/assets/images/banner/secondary.jpg"
        alt=""
      />
    </>
  );
}
