'use client';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const CarrouselMobile: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src={'/mobile/banner01.jpg'}
          width={1440}
          height={811}
          alt="banner principal"
          aria-hidden
          className="w-full"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={'/mobile/banner02.jpg'}
          width={1440}
          height={811}
          alt="banner principal"
          aria-hidden
          className="w-full"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={'/mobile/banner03.jpg'}
          width={1440}
          height={811}
          alt="banner principal"
          aria-hidden
          className="w-full"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={'/mobile/banner04.jpg'}
          width={1440}
          height={811}
          alt="banner principal"
          aria-hidden
          className="w-full"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrouselMobile;
