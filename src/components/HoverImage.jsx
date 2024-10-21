'use client'
import Image from 'next/image';
import { useState } from 'react';

function HoverImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute max-w-full h-full lg:h-auto">
      <Image
        src={isHovered ? '/tennis.png' : '/programming.png'}
        alt="Imagen de portada"
        width={1920}
        height={780}   
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="transition-transform duration-900" 
      />
    </div>
  );
}

export default HoverImage;
