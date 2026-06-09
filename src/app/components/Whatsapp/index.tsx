import React from 'react';
import { Phone } from 'lucide-react';

interface WhatsappProps {
  title?: string;
}

const Whatsapp: React.FC<WhatsappProps> = ({ title }) => {
  return (
    <div>
      <a href="https://wa.me/551141618439" target="_blank" rel="noopener noreferrer">
        <div className="bold bg-[#15A960] rounded-full py-2 px-10 flex items-center gap-2 text-white font-bold text-lg justify-center">
          <Phone /> <span>{title}</span>
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;
