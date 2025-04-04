import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative mt-[-20vh] w-full flex flex-col justify-center items-center text-center p-6">
      <h1 className="bellefair text-7xl font-bold text-gray-900">
        Get the help you need
      </h1>
      <p className="benarama mt-4 text-lg text-[#636363] font-medium max-w-2xl">
        A 2019 survey by the U.S. Equal Employment Opportunity Commission (EEOC)
        found that 16.5% of sexual harassment charges were filed by men.
      </p>

      <button className="flex mt-8 gap-2 py-3 px-12 bg-black text-white rounded-lg items-center ">
        <Link to="/help">Contact</Link>
      </button>
    </div>
  );
};

export default Hero;
