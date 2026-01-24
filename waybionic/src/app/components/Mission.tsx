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
            <h2 className="text-3xl font-extrabold text-gray-800 text-center absolute left-1/2 transform -translate-x-1/2"  style={{ color: '#3c356c' }}>
              Our Mission
            </h2>
          </div>

          <div className="sm:hidden relative rounded-3xl p-6 mx-6 max-w-xs" style={{ backgroundColor: '#F3BECD' }}>
            <Image
                src="/images/est2024.png"
                alt="Paper Note"
                width={1000}
                height={160}
                className="w-20 h-20 object-contain drop-shadow-lg animate-rock absolute -top-10 -left-6 z-10"
                unoptimized
            />
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center" style={{ color: '#292448' }}>
              At <strong>WayBionic</strong>, we strive to revolutionize remote
              surgery by developing a bionic arm inspired by the challenges of
              performing medical procedures in space. Our goal is to create
              innovative, reliable, and precise tools that empower both astronauts
              and doctors, whether in orbit or on Earth.
            </p>
          </div>

          <div className="hidden sm:flex sm:justify-between sm:items-center sm:gap-12 lg:gap-16 sm:pl-8 sm:pr-16 md:pl-10 md:pr-20 lg:pl-12 lg:pr-24 xl:pl-14 xl:pr-28">
            <div className="flex-1 h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center max-w-lg -mt-4 md:-mt-6 lg:-mt-8">
              <CADViewer modelPath="/models/zi.glb" />
            </div>
            
            <div className="flex-shrink-0 sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20">
              <div className="relative rounded-3xl p-8 md:p-10 lg:p-12 xl:p-14 max-w-xl md:max-w-2xl lg:max-w-3xl shadow-lg" style={{ backgroundColor: '#F3BECD' }}>
                <Image
                    src="/images/est2024.png"
                    alt="Paper Note"
                    width={608}
                    height={608}
                    className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 object-contain drop-shadow-lg absolute -top-16 -left-12 md:-top-20 md:-left-16 lg:-top-24 lg:-left-20 animate-rock z-10"
                    priority
                />
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-center" style={{ color: '#3c356c' }}>
                  Our Mission
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center" style={{ color: '#292448' }}>
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
                    className="sm:w-50 sm:h-50 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 object-contain drop-shadow-lg absolute sm:-bottom-20 md:-bottom-24 lg:-bottom-28 xl:-bottom-32 sm:-right-16 md:-right-20 lg:-right-24 xl:-right-28 z-10"
                    priority
                /> 
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}