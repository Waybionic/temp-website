"use client";

export default function Project() {
  return (
    <section className="w-full flex flex-col items-center bg-gray-100 px-4 py-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
        Our Project
      </h1>
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-8 sm:p-10">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 space-y-6 leading-relaxed">
          <p>
            Our club is dedicated to developing a bionic arm for remote surgical
            applications, inspired by Dr. Sun's research on addressing medical
            emergencies, like collapsed lungs, in space. Her work explored
            performing surgeries from Earth via bionic arms to assist astronauts
            in orbit without needing an onboard doctor.
          </p>
          <p>
            Currently, we are focused on creating and refining the arm for
            surgical use, with plans to eventually test in space-simulated
            conditions once we secure the necessary equipment and funding.
          </p>
          <p>We appreciate your interest in our club!</p>
        </div>
      </div>
    </section>
  );
}
