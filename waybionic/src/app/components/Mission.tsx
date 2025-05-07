import React from "react";

export default function Mission() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center p-8"
      style={{ backgroundColor: "var(--color-light-purple)" }}
      id="mission"
    >
      <h2 className="text-3xl mb-4">Our Mission</h2>
      <p className="max-w-xl text-center leading-relaxed">
        At WayBionic, we strive to...
      </p>
    </section>
  );
}
