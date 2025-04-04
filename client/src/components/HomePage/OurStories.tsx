import React from 'react';
import { Link } from 'react-router-dom';

const stories = [
  {
    name: "Aman Sharma",
    title: "I Lost Everything to a False Accusation",
    image: "/a1.png",
    avatar: "/a.png",
    description:
      "A law student is falsely accused of harassment, leading to suspension, loss of opportunities, and mental trauma.",
  },
  {
    name: "Raj Verma",
    title: "Facing Bias in Court",
    image: "/b1.png",
    avatar: "/b.png",
    description:
      "Despite evidence, I was not believed due to my gender. The bias was evident, and justice seemed unreachable.",
  },
  {
    name: "Karan Singh",
    title: "My Side Was Never Heard",
    image: "/c1.png",
    avatar: "/c.png",
    description:
      "I was dismissed from my job without investigation. False claims ruined my career and mental health.",
  },
];

const OurStories = () => {
  return (
    <div className="relative w-full max-w-7xl p-6 mx-auto">
      <div className="text-[#9C9C9C] text-xl font-semibold mb-4">Men Safety</div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Quote Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-medium mb-2">
              Men are often the silent victims of domestic violence, but society refuses to see their pain.
            </h1>
            <p className="text-right text-lg">- Jordan Peterson</p>
          </div>
          <div className="mt-4">
            <Link to="/stories">
              <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                See All Stories
              </button>
            </Link>
          </div>
        </div>

        {/* Scrollable Story Cards */}
        <div className="md:w-1/2 flex flex-col gap-6 overflow-y-auto max-h-[60vh] pr-2">
          {stories.map((story, index) => (
            <div
              key={index}
              className="border p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div className="font-semibold">{story.name}</div>
              </div>

              <div className="relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="float-right w-32 ml-4 rounded-xl"
                />
                <h1 className="text-xl font-medium mb-1">{story.title}</h1>
                <p className="text-[#7D7D7D]">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStories;
