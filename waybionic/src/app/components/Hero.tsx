import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: "url('/images/hero-bg.svg')",
        backgroundColor: "var(--color-deep-purple)",
      }}
      id="hero"
    >
      {/*
        1) A "scaling container" with max-w so it doesn't become huge on large screens.
        2) px-4 adds a bit of padding on small screens.
      */}
      <div className="relative w-full max-w-[95%] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] px-4 flex justify-center translate-y-[-15%] sm:translate-y-0">
        <div className="relative w-full sm:w-fit translate-x-[5%] sm:translate-x-0">
          {/*
            2) Paper note at 100% width so it scales to fill this container.
               height:auto preserves aspect ratio.
          */}
          <Image
            src="/images/paper-note.png"
            alt="Paper note"
            width={1000}
            height={1000}
            priority
            className="relative z-10 w-full h-auto"
          />

          {/*
            3) Mascot, absolutely positioned and sized in % so it scales
               with the container. Adjust 'left', 'top', 'w-[X%]' to taste.
          */}
          <Image
            src="/images/mascot.png"
            alt="Way Bionic Mascot"
            width={300}
            height={300}
            className="absolute z-0 left-[-2%] top-[20%] w-[25%] h-auto"
            priority
          />

          {/*
            4) Text over the note, absolutely centered with transform.
               We also use clamp() for responsive font sizing.
          */}
          <h1
            className="absolute z-20 font-bold"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "var(--color-deep-purple)",
              lineHeight: "1.2",
              fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
            }}
          >
            {/*Add lightning later*/}
            Way⚡
            <br />
            Bionic
          </h1>
        </div>
      </div>
    </section>
  );
}
