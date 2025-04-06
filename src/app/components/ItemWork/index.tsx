import React from 'react';
import Image from 'next/image';

interface ItemWorkProps {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
}

const ItemWork: React.FC<ItemWorkProps> = ({ title, description, imageUrl = '/servico-exemplo.jpg', link = '#' }) => {
  return (
    <div className="relative h-full min-h-[288px]  md:min-h-[350px] w-full md:min-w-[248px]  overflow-hidden group rounded-xl">
      <Image src={imageUrl} alt={title} fill className="object-cover object-center" quality={80} />

      <div className="relative z-10 p-6   min-h-[350px] md:h-full min-w-[150px] md:min-w-[248px]   flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
        <h4 className="text-white font-bold text-xl mb-2">{title}</h4>
        <a href={link} className="block mt-2">
          <div className="text-white/80 hover:text-white transition-colors">
            <span>{description}</span>
            <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ItemWork;
