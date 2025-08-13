import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: "url('/images/hero-bg.svg')",
        backgroundColor: "var(--color-deep-purple)",
        minHeight: "calc(100vh - var(--navbar-height))",
      }}
      id="hero"
    >
      {/*
        1) A "scaling container" with max-w so it doesn't become huge on large screens.
        2) px-4 adds a bit of padding on small screens.
      */}
      <div className="relative w-full max-w-[95%] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] xl:max-w-[1200px] 2xl:max-w-[1600px] px-4 flex justify-center translate-y-[-15%] sm:translate-y-0">
        <div className="relative w-full sm:w-fit flex justify-center">
          {/*
            2) Paper note centered horizontally and scaled to fit container.
               height:auto preserves aspect ratio.
          */}
          <Image
            src="/images/waybionic_header.png"
            alt="Paper note"
            width={5120}
            height={5120}
            priority
            className="relative z-10 w-full sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1296px] 2xl:w-[1200px] h-auto"
          />

          {/*
            3) Mascot, absolutely positioned and sized in % so it scales
               with the container. Adjust 'left', 'top', 'w-[X%]' to taste.
          */}
          <div className="astronaut-animate-container absolute z-11 left-[-6%] top-[28%] w-[25%] h-auto flex flex-col items-center">
            <Image
              src="/images/mascot.png"
              alt="Way Bionic Mascot"
              width={900}
              height={900}
              className="w-full h-auto"
              priority
            />
            <div className="astronaut-booster-flame">
              <div className="flame-inner" />
              <div className="flame-mid" />
              <div className="flame-outer" />
            </div>
          </div>

          {/*
            3) Mascot, absolutely positioned and sized in % so it scales
               with the container. Adjust 'left', 'top', 'w-[X%]' to taste.
          */}
          <Image
            src="/images/gear-temp.svg"
            alt="Gear"
            width={200}
            height={200}
            className="absolute z-1 -right-[5%] bottom-[20%] w-[18%] h-auto rotate-15 gear-rotate"
            priority
          />
        </div>
      </div>
    </section>
  );
}
