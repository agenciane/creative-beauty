'use client';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const Carrousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src={'/desktop/banner01.webp'}
          width={2000}
          height={1126}
          alt="banner principal"
          aria-hidden
          className="w-full"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={'/desktop/banner02.webp'}
          width={2000}
          height={1126}
          alt="banner principal"
          aria-hidden
          className="w-full"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={'/desktop/banner03.webp'}
          width={2000}
          height={1126}
          alt="banner principal"
          aria-hidden
          className="w-full"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={'/desktop/banner04.webp'}
          width={2000}
          height={1126}
          alt="banner principal"
          aria-hidden
          className="w-full"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
