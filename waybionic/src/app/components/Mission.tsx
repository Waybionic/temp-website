"use client";

import React from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';

const CADViewer = dynamic(() => import('./CADViewer'), { ssr: false });

export default function Mission() {
  return (
      <section
          className="w-full flex flex-col items-center py-24 -pb-400 sm:pb-12 lg:pb-24 bg-pink-100 overflow-x-hidden px-6 sm:px-0"
          id="mission"
      >
        <div className="w-full sm:max-w-none max-w-4xl">

          {/* Mobile layout: header */}
          <div className="relative flex items-center justify-center h-24 mb-8 sm:hidden px-6">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center absolute left-1/2 transform -translate-x-1/2" style={{ color: '#3c356c' }}>
              Our Mission
            </h2>
          </div>

          {/* Mobile layout: text card */}
          <div className="sm:hidden relative rounded-3xl p-6 mx-6 max-w-xs" style={{ backgroundColor: '#FFFFFF' }}>
            <Image
                src="/images/est2024.png"
                alt="Paper Note"
                width={1000}
                height={160}
                className="w-20 h-20 object-contain drop-shadow-lg animate-rock absolute -top-10 -left-6 z-10"
                unoptimized
            />
            <p className="text-sm leading-relaxed text-center" style={{ color: '#292448' }}>
              At <strong>WayBionic</strong>, we strive to revolutionize remote
              surgery by developing a bionic arm inspired by the challenges of
              performing medical procedures in space. Our goal is to create
              innovative, reliable, and precise tools that empower both astronauts
              and doctors, whether in orbit or on Earth.
            </p>
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:flex sm:flex-row sm:justify-between sm:items-center gap-6 md:gap-10 lg:gap-16 px-6 md:px-12 lg:px-20">

            {/* CAD viewer */}
            <div className="flex-shrink-0 w-[280px] h-[320px] md:w-[340px] md:h-[400px] lg:w-[420px] lg:h-[480px]">
              <CADViewer modelPath="/models/mechanical_arm.glb" />
            </div>

            {/* Text card */}
            <div className="flex-1 min-w-0 sm:-mt-8 md:-mt-12 lg:-mt-16 -translate-x-4 md:-translate-x-6 lg:-translate-x-10">
              <div className="relative rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
                <Image
                    src="/images/est2024.png"
                    alt="Paper Note"
                    width={608}
                    height={608}
                    className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-lg absolute -top-12 -left-10 md:-top-16 md:-left-12 lg:-top-20 lg:-left-16 animate-rock z-10"
                    priority
                />
                

                <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-center" style={{ color: '#3c356c' }}>
                  Our Mission
                </h2>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-center" style={{ color: '#292448' }}>
                  At <strong>WayBionic</strong>, we strive to revolutionize remote
                  surgery by developing a bionic arm inspired by the challenges of
                  performing medical procedures in space. Our goal is to create
                  innovative, reliable, and precise tools that empower both astronauts
                  and doctors—whether in orbit or on Earth.
                </p>

                {/* Pencilbionic image*/}
                <Image
                    src="/images/pencilbionicnew.png"
                    alt="WayBionic Mascot with Pencil"
                    width={500}
                    height={500}
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 object-contain drop-shadow-lg absolute -bottom-16 -right-12 md:-bottom-20 md:-right-16 lg:-bottom-28 lg:-right-24 z-10"
                    priority
                /> 
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}