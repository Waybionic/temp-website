import Hero from "./components/hero";
import Contact from "./components/contact";
import Join from "./components/join";

export default function ContactPage() {
    return (
        <div style={{ backgroundColor: "#3d316e" }}>
            <Hero />
            <Contact />
            <Join />
        </div>
    );
}
