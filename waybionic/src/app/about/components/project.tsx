"use client";

export default function Project() {
  return (
    <main className="flex-1 flex justify-center items-center px-4 py-16">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Mission</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Our club is dedicated to developing a bionic arm for remote surgical
          applications, inspired by Dr. Sun's research on addressing medical
          emergencies, like collapsed lungs, in space. Her work explored
          performing surgeries from Earth via bionic arms to assist astronauts
          in orbit without needing an onboard doctor.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Currently, we are focused on creating and refining the arm for
          surgical use, with plans to eventually test in space-simulated
          conditions once we secure the necessary equipment and funding.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          We appreciate your interest in our club!
        </p>
      </div>
    </main>
  );
}
