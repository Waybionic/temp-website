import Hero from "./components/hero";
import Contact from "./components/contact";
import Join from "./components/join";

export default function ContactPage() {
    return (
        <div>
            <div className="contact-hero-viewport relative flex w-full flex-col">
                {/* background halves — stretch with the flex parent so purple/white always reach the bottom */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 flex flex-col lg:flex-row"
                    aria-hidden
                >
                    {/* dark purple lhs */}
                    <div
                        className="relative min-h-[min(50svh,28rem)] w-full overflow-hidden lg:h-auto lg:min-h-0 lg:w-1/2 lg:flex-1"
                        style={{
                            background:
                                "linear-gradient(145deg, #1e1a4e 0%, #2d2568 50%, #3d316e 100%)",
                        }}
                    >
                        <img
                            src="/images/starrybackground.png"
                            alt=""
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "left center",
                                opacity: 0.6,
                            }}
                        />
                    </div>
                    {/* off white rhs */}
                    <div
                        className="min-h-0 flex-1 bg-[#FBF9FF] lg:h-auto lg:min-h-0 lg:w-1/2 lg:flex-1"
                    />
                </div>

                {/* moon */}
                <img src="/images/Moon.png" alt="Moon" className="contact-moon" />

                {/* content */}
                <div className="relative z-[2] flex min-h-0 w-full flex-1 flex-col lg:flex-row">
                    {/* hero */}
                    <div className="flex min-h-[min(50svh,28rem)] w-full flex-col lg:min-h-0 lg:w-1/2 lg:flex-1">
                        <Hero />
                    </div>
                    {/* form */}
                    <div className="flex w-full flex-1 items-center justify-center lg:w-1/2 lg:flex-1">
                        <Contact />
                    </div>
                </div>
            </div>

            <Join />
        </div>
    );
}
