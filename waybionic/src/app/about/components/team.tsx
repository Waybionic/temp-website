"use client";

const teamMembers = [
  {
    role: "Club Lead",
    name: "Lina",
  },
  {
    role: "Software Lead",
    name: "Yassin",
  },
  {
    role: "Software Lead",
    name: "Mujtaba",
  },
  {
    role: "Electrical Lead",
    name: "Yash",
  },
  {
    role: "Biomedical Lead",
    name: "Abdul Karim",
  },
  {
    role: "Mechanical Lead",
    name: "Phillip",
  },
  {
    role: "Mechanical Lead",
    name: "Zayd",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{member.role}</h3>
              <p className="text-gray-600 text-lg">{member.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
