"use client";

const link: string =
  "https://docs.google.com/forms/d/e/1FAIpQLSeS5s4Gzfai64ZODzWHte9fWxVwGhGhLW_A4QkwAIlnImgWQQ/viewform";

const hiring: boolean = true;

export default function Join() {
  return (
    <section
        className="relative w-full flex justify-start bg-no-repeat bg-cover bg-top py-16 mt-60 md:-mt-40 lg:-mt-140 xl:mt-60 z-10 xxl:-mt-160"
      style={{
        backgroundImage: "url('/images/contact_end_bg.PNG')",
        backgroundSize: "cover",
        backgroundPosition: "center"

      }}
      id="join"
    >
      {/* White card */}
      <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-3xl text-center justify-start"
           style={{ marginTop: '-1000px' }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{color: '#3a326b'}}>
          Join Our Team
        </h1>

        {hiring ? (
          <div className="space-y-6">
            <p className="text-base sm:text-lg md:text-xl" style={{color: '#25223b'}}>
              We're currently accepting applications. Click below to apply!
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-sm sm:text-base md:text-lg px-6 py-3 rounded-md hover:opacity-90 transition"
              style={{ backgroundColor: '#a693ec' }}
            >
              Apply Now
            </a>
          </div>
        ) : (
          <div className="text-base sm:text-lg md:text-xl text-gray-700 space-y-2">
            <p>We're not accepting applications at the moment.</p>
            <p>Please check back soon or follow us for updates!</p>
          </div>
        )}
      </div>
    </section>
  );
}
