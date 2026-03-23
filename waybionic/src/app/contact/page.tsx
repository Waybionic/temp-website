import Hero from "./components/hero";
import Contact from "./components/contact";
import Join from "./components/join";

export default function ContactPage() {
    return (
        <div>
            <div className="relative w-full">

                {/* background halves */}
                <div className="absolute inset-0 flex flex-col lg:flex-row" style={{ zIndex: 0 }}>
                    {/* dark purple lhs */}
                    <div
                        className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden"
                        style={{ background: "linear-gradient(145deg, #1e1a4e 0%, #2d2568 50%, #3d316e 100%)" }}
                    >
                        <img
                            src="/images/starrybackground.png"
                            alt=""
                            style={{
                                position: "absolute", inset: 0,
                                width: "100%", height: "100%",
                                objectFit: "cover", objectPosition: "left center",
                                opacity: 0.6,
                            }}
                        />
                    </div>
                    {/* off white rhs */}
                    <div className="flex-1 w-full lg:w-1/2" style={{ backgroundColor: "#FBF9FF" }} />
                </div>

                {/* moon */}
                <img src="/images/Moon.png" alt="Moon" className="contact-moon" />

                {/* content */}
                <div
                    className="relative flex flex-col lg:flex-row w-full lg:min-h-[680px]"
                    style={{ zIndex: 2 }}
                >
                    {/* hero */}
                    <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto">
                        <Hero />
                    </div>
                    {/* form */}
                    <div className="w-full lg:w-1/2 flex items-center">
                        <Contact />
                    </div>
                </div>

            </div>

            <Join />
        </div>
    );
}
