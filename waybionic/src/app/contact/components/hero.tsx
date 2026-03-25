"use client";

export default function Hero() {
  return (
    <div
      className="contact-hero-content relative z-10 flex h-full min-h-0 flex-1 flex-col"
    >
      {/* sparkle decos */}
      <div className="absolute top-8 right-10 text-white/60 text-2xl select-none">✦</div>
      <div className="absolute top-14 right-20 text-white/30 text-sm select-none">✦</div>
      <div className="hidden md:block absolute bottom-40 left-6 text-white/70 text-3xl select-none">✦</div>
      <div className="hidden md:block absolute bottom-32 left-16 text-white/30 text-xs select-none">✦</div>

      {/* + contact bubble */}
      <div
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-6 text-[11px] font-semibold tracking-widest uppercase"
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "rgba(220,210,245,0.85)",
          fontFamily: "var(--font-dm-sans), sans-serif",
          width: "fit-content",
        }}
      >
        + CONTACT
      </div>

      {/* heading (epilogue NOT lemon milk) */}
      <h1
        style={{
          fontFamily: "var(--font-epilogue), sans-serif",
          fontWeight: 900,
          color: "white",
          lineHeight: 1.05,
          margin: 0,
          fontSize: "clamp(3rem, 5.5vw, 6rem)",
        }}
      >
        Need to
      </h1>
      <h1
        style={{
          fontFamily: "var(--font-epilogue), sans-serif",
          fontWeight: 900,
          lineHeight: 1.05,
          margin: 0,
          marginBottom: "12px",
          fontSize: "clamp(3rem, 5.5vw, 6rem)",
          background: "linear-gradient(to right, #A4C4C8, #c284ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Reach Out?
      </h1>

      {/* description */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 600,
          fontSize: "18px",
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.6,
          maxWidth: "370px",
          margin: 0,
        }}
      >
        We&apos;d love to connect! Shoot us a message at{" "}
        <a
          href="mailto:waybionics@gmail.com"
          style={{ color: "#F399BA" }}
          className="hover:underline"
        >
          waybionics@gmail.com
        </a>
        {" "}-- we&apos;ll get back to you as soon as possible.
      </p>
    </div>
  );
}
