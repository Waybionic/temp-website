import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-deep-purple)" }}
      id="hero"
    >
      {/* Decorative Blobs (you can adjust their positions/sizes as needed) */}
      <Image
        src="/images/blob2.svg"
        alt="Decorative blob"
        width={500}
        height={500}
        className="absolute top-[-65vh] right-[-40vw] w-[155vw] h-[155vh] object-contain"
      />
      <Image
        src="/images/blob1.svg"
        alt="Decorative blob"
        width={500}
        height={500}
        className="absolute top-[-70vh] left-[-42vw] w-[200vw] h-[200vh] object-contain"
      />

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
            Way🗲
            <br />
            Bionic
          </h1>
        </div>
      </div>
    </section>
  );
}
