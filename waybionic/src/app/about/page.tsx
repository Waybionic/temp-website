"use client";

import Image from 'next/image';
import './styles/blurb.css';


export default function About() {
  return (
    <div>
      <div className="blurb">
        <Image 
          src="/about/icons/about_witharrows.PNG"
          alt="About section with arrows"
          width={800}
          height={800}
          style={{ objectFit: 'contain', display: 'block', margin: '0 auto', position: 'relative' }}
        />
      </div>
    </div>
  );
}

