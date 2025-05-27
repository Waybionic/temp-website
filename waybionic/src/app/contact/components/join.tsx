"use client";

const link: string =
  "https://docs.google.com/forms/d/e/1FAIpQLSfh3q89PTxHesr0P7nelygxXIYYP24kRp_27Yb5mSbyxfiJCQ/viewform?usp=header";

const hiring: boolean = true;

export default function Join() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-no-repeat bg-cover bg-top"
      style={{
        backgroundColor: "#3D336A", // purple background
      }}
      id="join"
    >
      {/* White card */}
      <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Join Our Team
        </h1>

        {hiring ? (
          <div className="space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              We're currently accepting applications. Click below to apply!
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-sm sm:text-base md:text-lg px-6 py-3 rounded-md hover:opacity-90 transition"
              style={{ backgroundColor: "var(--color-pink)" }}
            >
              Apply Now
            </a>
          </div>
        ) : (
          <div className="text-base sm:text-lg md:text-xl text-gray-700 space-y-2">
            <p>We’re not accepting applications at the moment.</p>
            <p>Please check back soon or follow us for updates!</p>
          </div>
        )}
      </div>
    </section>
  );
}
