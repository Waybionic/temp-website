"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const teams = [
  {
    name: "ELECTRICAL",
    icon: "⚡", // Lightning bolt emoji
    image: "/images/robot.png", // Replace with your actual image path
    lead: "ZAYN",
    members: ["MEMBER1", "MEMBER2", "MEMBER3"],
  },
  {
    name: "SOFTWARE",
    icon: "💻", // Laptop emoji
    image: "/images/laptop.png", // Replace with your actual image path
    lead: "YASSIN",
    members: ["DEV1", "DEV2", "DEV3"],
  },
];

export default function TeamCarousel() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden"
          style={{
        backgroundImage: "url('/images/team_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}>

      <div className="relative z-10 w-full max-w-xl px-4"
      style={{
         background: "linear-gradient(to bottom, #443B75, transparent)",
      }}>
<Carousel
  showThumbs={false}
  showStatus={false}
  infiniteLoop
  autoPlay={false}
  emulateTouch
  swipeable
  className="text-center"
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full z-20 hover:bg-purple-800"
      >
        ←
      </button>
    )
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full z-20 hover:bg-purple-800"
      >
        →
      </button>
    )
  }
>

          {teams.map((team, index) => (
            <div key={index} className="space-y-8">
              {/* Team Name with Icon */}
              <div className="flex justify-center items-center gap-4">
                <h2 className="text-5xl font-bold tracking-wider">{team.name}</h2>
                <span className="text-4xl">{team.icon}</span>
              </div>

              {/* Team Image */}
              <div className="w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center my-8 mx-auto border-2 border-gray-700">
                <img 
                  src={team.image} 
                  className="h-48 object-contain" 
                  alt={team.name} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Team Lead */}
              <div className="space-y-2">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto flex items-center justify-center text-xl font-bold">
                  {team.lead.charAt(0)}
                </div>
                <p className="text-lg font-mono">LEAD: {team.lead}</p>
              </div>

              {/* Members */}
              <div className="flex justify-center gap-4 my-8 flex-wrap">
                {team.members.map((member, i) => (
                  <div 
                    key={i} 
                    className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-xs font-mono border border-gray-600"
                  >
                    {member}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}