import PdfViewer from "./PdfViewer";

export default function Package() {
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ background: "#f0ebf8" }}
    >
      <div className="w-full max-w-4xl px-4 sm:px-8 py-14">

        {/* section label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px" style={{ background: "#c8b8d8" }} />
          <p
            className="text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap"
            style={{ color: "#9080c0", fontFamily: "Arimo, sans-serif" }}
          >
            Sponsors
          </p>
          <div className="flex-1 h-px" style={{ background: "#c8b8d8" }} />
        </div>

        {/* description */}
        <p
          className="text-sm leading-relaxed text-center mb-4"
          style={{ color: "#4a3f68", fontFamily: "Arimo, sans-serif" }}
        >
          Being a sponsor for WayBionic, a University of Calgary team developing
          a robotic arm for surgical use via remote operation both in space and
          here on Earth, means partnering with the future of innovation. Sponsors
          can expect a number of perks that vary based on sponsorship tier,
          including speaking opportunities, logo placement on all prototypes &amp;
          materials, and the chance to broaden your talent pool by gaining access
          to a dedicated team of students and researchers committed to pushing the
          boundaries of space healthcare technology.
        </p>
        <p
          className="text-sm leading-relaxed text-center mb-12"
          style={{ color: "#4a3f68", fontFamily: "Arimo, sans-serif" }}
        >
          We invite you to review our sponsorship package below and reach out for
          potential partnerships!
        </p>

        <br />

        {/* sponsorship package embed */}
        <div
          className="mx-auto"
          style={{ borderRadius: "12px", width: "90%", overflow: "hidden" }}
        >
          <div
            className="pdf-scroll overflow-y-auto overflow-x-hidden h-[600px] sm:h-[970px]"
            style={{ marginRight: "0px" }}
          >
            <PdfViewer file="/sponsors/sponsorship-package.pdf" />
          </div>
        </div>

        {/* download button */}
        <div className="flex justify-center mt-4" style={{ width: "90%", margin: "16px auto 0" }}>
          <a
            href="/sponsors/sponsorship-package.pdf"
            download
            style={{
              backgroundColor: "#B9AFD2",
              color: "white",
              padding: "12px 96px",
              borderRadius: "12px",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v13M7 11l5 5 5-5"/>
              <path d="M5 21h14"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}
