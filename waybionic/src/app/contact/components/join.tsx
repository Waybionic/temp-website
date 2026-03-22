"use client";

const link: string =
  "https://docs.google.com/forms/d/e/1FAIpQLScLPGuKsBGBgKoTObkYkLFlaQoTd_rzHu_lrWrDQG13nmq0Pg/viewform";

const hiring: boolean = false;

export default function Join() {
  return (
    <section
      className="w-full flex justify-center items-center py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #e8c4d8 0%, #d4c8f0 100%)",
      }}
      id="join"
    >
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#25223b" }}>
          Join Our Team
        </h2>

        {hiring ? (
          <div className="space-y-12">
            <p className="text-base" style={{ color: "#25223b" }}>
              We&apos;re currently accepting applications. Click below to apply!
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-sm px-8 py-3 rounded-full hover:opacity-90 transition"
              style={{ backgroundColor: "#3d316e", marginTop: "32px" }}
            >
              Apply Now
            </a>
          </div>
        ) : (
          <p className="text-base leading-relaxed" style={{ color: "#25223b" }}>
            While we&apos;re not currently accepting applications, we encourage you to keep up with our socials to be notified as soon as recruitment opens!
          </p>
        )}
      </div>
    </section>
  );
}
