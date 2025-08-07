"use client";

export default function Hero() {
  return (
    <section
      id ="hero" className="relative w-full flex flex-col items-center justify-center text-white overflow-hidden -mt-0"


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
                className="mx-auto w-full max-w-[900px] xl:max-w-[700px] 2xl:max-w-[900px] h-auto -mt-60 sm:-mt-100 md:-mt-20"
            />
            <p className="text-2xl md:text-4xl font-bold tracking-wide" style={{color: '#fc92b0'}}>
                Need to reach us?
            </p>
            <p className="text-green-300 text-xl md:text-3xl font-mono -mt-3 " style={{color: '#f4f7fe', marginBottom: '0px'}} >
                To connect, shoot us a message at
            </p>
            <>
                <a href="mailto:waybionics@gmail.com" className="text-green-300 text-xl md:text-3xl font-mono hover:underline">
                    waybionics<span className="text-green-300">@</span>gmail.com
                </a>
                <span className="text-white text-3xl font-mono">!</span>
            </>
        </div>
    </section>
  );
}
 


