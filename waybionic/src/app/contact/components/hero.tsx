"use client";

export default function Hero() {
  return (
    <section
      id ="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/contact_stars_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
  
    >
      <div className="text-center space-y-4 z-10 px-4">
        <img 
          src="/images/contact_header.png" 
          alt="Contact Header" 
          className="mx-auto w-full max-w-[900px] h-auto"
        />
        <p className="text-pink-300 text-4xl font-bold tracking-wide">
          Need to reach us?
        </p>
        <a href="mailto:waybionics@gmail.com" className="text-green-300 text-3xl font-mono hover:underline">
          waybionics<span className="text-green-300">@</span>gmail.com
        </a>
      </div>
    </section>
  );
}
 


