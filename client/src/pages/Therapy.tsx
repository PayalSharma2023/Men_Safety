// import React from 'react';
import Navbar from '../components/Navbar';


const therapists = [
  {
    name: "Dr. Rahul Verma",
    specialization: "Trauma & Emotional Abuse",
    img: "/a1.png",
    bio: "Rahul specializes in helping men cope with trauma, anxiety, and emotional suppression in safe spaces.",
  },
  {
    name: "Ananya Singh",
    specialization: "Relationship & Stress",
    img: "/b1.png",
    bio: "Ananya supports men navigating false allegations, breakups, and workplace stress.",
  },
  {
    name: "Dr. Kabir Mehta",
    specialization: "Masculinity & Identity",
    img: "/c.png",
    bio: "Helping men explore vulnerability, identity, and break societal stigmas around seeking help.",
  },
];

const Therapy = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 georama">
    <div className="mb-40"><Navbar/></div>
      <h1 className="text-4xl font-bold mb-4 text-black">Therapy for Men’s Safety & Mental Health</h1>
      <p className="text-gray-700 mb-10 max-w-3xl">
        Society often neglects the emotional struggles of men. This platform provides confidential, stigma-free access to certified therapists who understand the unique challenges men face—whether it's false accusations, relationship issues, or mental burnout.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {therapists.map((therapist, index) => (
          <div key={index} className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition">
            <img src={therapist.img} alt={therapist.name} className="w-20 h-20 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold">{therapist.name}</h2>
            <p className="text-sm text-blue-500 mb-2">{therapist.specialization}</p>
            <p className="text-gray-600 text-sm">{therapist.bio}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Book a Session
        </button>
      </div>
    </div>
  );
};

export default Therapy;
