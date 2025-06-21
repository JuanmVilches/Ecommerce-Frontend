import React from 'react';
import './Home.css';
import SectionInfo from '../../components/SectionInfo/SectionInfo';
import SectionProducts from '../../components/SectionProducts/SectionProducts';
import Carousel from '../../components/Carousel/Carousel';

export default function Home() {
  return (
    <>
      <Carousel />
      <SectionInfo />
      <SectionProducts />
    </>
  );
}
