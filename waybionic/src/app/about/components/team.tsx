"use client";

const teamMembers = [
  { role: "Club Lead", name: "Lina" },
  { role: "Software Lead", name: "Yassin" },
  { role: "Software Lead", name: "Mujtaba" },
  { role: "Electrical Lead", name: "Yash" },
  { role: "Biomedical Lead", name: "Abdul Karim" },
  { role: "Mechanical Lead", name: "Phillip" },
  { role: "Mechanical Lead", name: "Zayd" },
];

export default function Team() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-gray-100 px-6 py-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">
        Our Team
      </h1>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center transform transition-transform hover:scale-105"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-gray-800">
              {member.role}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
              {member.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
