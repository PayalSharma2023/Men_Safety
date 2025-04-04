import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="relative p-6 w-full georama tracking-widest max-w-7xl h-auto"
      initial={{ x: "100%", opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="font-bold p-6 text-5xl mt-10">What can we do</h1>

      <div className="flex gap-6 items-center justify-left p-6">
        {/* Chatbot */}
        <Link to="/chatbot" className="relative w-64 hover:scale-105 transition-transform duration-300">
          <img
            src="/10.png"
            alt="Chatbot"
            className="object-cover w-full h-auto rounded-lg"
          />
        </Link>

        {/* Community */}
        <Link to="/community" className="relative w-64 hover:scale-105 transition-transform duration-300">
          <img
            src="/11.png"
            alt="Community"
            className="object-cover w-full h-auto rounded-lg"
          />
        </Link>

        {/* Therapist */}
        <Link to="/therapy" className="relative w-64 hover:scale-105 transition-transform duration-300">
          <img
            src="/12.png"
            alt="Therapist"
            className="object-cover w-full h-auto rounded-lg"
          />
        </Link>
      </div>

      <p className="text-[#929292] p-6 m-2">
        This platform provides essential support services for men facing
        harassment, bullying, or mental health challenges. It includes community
        forums for sharing experiences, a chatbot for guidance, and access to
        online therapists for emotional well-being. Users can also report
        incidents to authorities for necessary action and receive awareness
        resources on their rights and mental health support. These services
        create a safe and supportive environment for men seeking help.
      </p>
    </motion.div>
  );
};

export default WhatWeDo;
