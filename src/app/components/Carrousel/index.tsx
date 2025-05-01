'use client';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const Carrousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={'/newbanner.jpg'} width={1440} height={811} alt="banner principal" aria-hidden className="w-full" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={'/newbanner.jpg'} width={1440} height={811} alt="banner principal" aria-hidden className="w-full" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
