import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: "url('/images/hero-bg2.png')",
        backgroundColor: "var(--color-deep-purple)",
      }}
      id="hero"
    >
      {/*
        1) A "scaling container" with max-w so it doesn't become huge on large screens.
        2) px-4 adds a bit of padding on small screens.
      */}
      <div className="relative w-full max-w-[85%] sm:max-w-[540px] md:max-w-[650px] lg:max-w-[850px] xl:max-w-[850px] 2xl:max-w-[1000px] px-4 flex justify-center translate-y-[-15%] sm:translate-y-0">
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
            className="relative z-10 w-full sm:w-[420px] md:w-[500px] lg:w-[680px] xl:w-[750px] 2xl:w-[850px] h-auto"
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
          <Image
            src="/images/moon.png"
            alt="Moon"
            width={400}
            height={400}
            className="absolute z-5 left-[-18%] top-[80%] w-[50%] h-[70%]"
            priority
          />
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
