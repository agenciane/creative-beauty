'use client';
import React from 'react';
import Image from 'next/image';

const Menu: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between items-center p-4 max-w-[1200px] w-full">
        <div>
          <Image src={'/logo-creative-beauty.png'} width={360} height={74} alt="logo creative beauty" />
        </div>
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
