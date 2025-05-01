'use client';
import React from 'react';
import Image from 'next/image';

const Menu: React.FC = () => {
  return (
    <div className="flex justify-center items-center md:fixed top-0 z-10 w-full bg-black/80 backdrop-blur-sm">
      <div className="flex justify-center md:justify-between items-center p-4 max-w-[1200px] w-full">
        <Image
          src={'/logo-creative-beauty.png'}
          width={360}
          height={74}
          alt="logo creative beauty"
          className="max-w-[150px] md:max-w-52"
        />
        <nav>
          <ul className="flex flex-row gap-8 hidden md:flex">
            <li>
              <a className="text-white font-bold uppercase" href="#quem_somos">
                Quem somos
              </a>
            </li>
            <li>
              <a className="text-white font-bold uppercase" href="#procedimentos">
                Procedimentos
              </a>
            </li>
            <li>
              <a className="text-white font-bold uppercase" href="#cursos">
                Cursos
              </a>
            </li>
            <li>
              <a className="text-white font-bold uppercase" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
