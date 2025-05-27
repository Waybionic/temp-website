"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/contact_stars_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="hero"
    >
      <div className="text-center space-y-4 z-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold bg-white text-purple-900 inline-block px-6 py-2 rounded-[10px] tracking-wider shadow-md">
          CONTACT
        </h1>
        <p className="text-pink-300 text-2xl font-bold tracking-wide">
          Need to reach us?
        </p>
        <p className="text-green-300 text-xl font-mono">
          waybionics<span className="text-white">@</span>gmail.com
        </p>
      </div>
    </section>
  );
}
