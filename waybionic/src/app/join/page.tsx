"use client";

const link: string =
  "https://docs.google.com/forms/d/e/1FAIpQLSfh3q89PTxHesr0P7nelygxXIYYP24kRp_27Yb5mSbyxfiJCQ/viewform?usp=header";

const hiring: boolean = true;

export default function Join() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-xl p-6 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Join Our Team
        </h1>

        {hiring ? (
          <>
            <iframe
              src={link}
              width="100%"
              height="600"
              title="Join Form"
              className="w-full rounded-md border"
            >
              Loading…
            </iframe>
            <p className="mt-6 text-sm sm:text-base text-gray-500">
              If the form doesn't load,{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                click here to open it in a new tab
              </a>
              .
            </p>
          </>
        ) : (
          <div className="text-base sm:text-lg md:text-xl text-gray-700 space-y-2">
            <p>We’re not accepting applications at the moment.</p>
            <p>Please check back soon or follow us for updates!</p>
          </div>
        )}
      </div>
    </div>
  );
}
