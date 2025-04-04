// import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center text-center  p-6">
      <div className="mt-[-20vh] flex flex-col justify-center items-center text-center">
        <h1 className="bellefair text-7xl font-bold text-gray-900">
          Get the help you need
        </h1>
        <p className="benarama mt-4 text-lg text-[#636363] font-medium max-w-2xl">
          A 2019 survey by the U.S. Equal Employment Opportunity Commission
          (EEOC) found that 16.5% of sexual harassment charges were filed by
          men.
        </p>

        <button className="flex mt-8 gap-2 py-3 px-12 bg-black text-white rounded-lg items-center ">
          <Link to="/help">Contact</Link>
        </button>
      </div>

      {/* Main Layout Container */}
      <div className="flex items-end gap-6 w-full absolute bottom-0 justify-center flex-wrap">
        {/* Left Column with Images */}
        <div className="flex gap-4 flex-col">
          {/* Image Box 1 */}
          <div className="relative w-64">
            <img
              src="/1.png"
              alt="Stigma"
              className="object-cover w-full h-auto"
            />
            <p className="absolute px-4 inset-0 flex flex-col gap-4 items-left justify-center text-white text-lg font-regular ">
              <div>Men rarely report physical assault due to </div>
              <div className="text-4xl font-bold">Stigma</div>
            </p>
          </div>
          {/* Image Box 2 */}
          <div className="relative w-64">
            <img
              src="/2.png"
              alt="Awareness"
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Center Column */}
        <div className="relative w-40">
          <img
            src="/4.png"
            alt="Stigma"
            className="object-cover w-full h-auto"
          />
          <p className="absolute bottom-0 flex flex-col gap-4 items-left p-4 justify-end text-white text-lg font-regular h-1/2 backdrop-blur-md bg-black/20 rounded-3xl">
            <div className="text-4xl font-bold">1 in 4</div>
            <div>men face domestic abuse but ignored</div>
          </p>
        </div>

        {/* Big Box with Call-to-Action */}
        <div className="bg-[#712273] p-4 rounded-xl text-white text-center text-lg w-68">
          Join the community to get and give help for a better tomorrow
          <br />
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-md">
            Join
          </button>
        </div>

        {/* Right Column */}
        <div className="relative w-40">
          <img
            src="/3.png"
            alt="Stigma"
            className="object-cover w-full h-auto"
          />
          <p className="absolute bottom-0 flex flex-col gap-4 items-left p-4 justify-end text-white text-lg font-regular h-2/3 backdrop-blur-md bg-black/20 rounded-3xl">
            <div>
              over <span className="text-4xl font-bold">50%</span>
            </div>
            <div>of men face workplace harassment silently</div>
          </p>
        </div>

        {/* Bottom Right Column with Two Stacked Boxes */}
        <div className="flex gap-4 flex-col">
          {/* Bullying Box */}
          <div className="bg-[#063F2E] py-14 px-4 rounded-3xl text-2xl text-white font-medium text-right w-64">
            <p className="text-4xl font-bold mb-4">Bullying</p>
            against men in colleges often goes unreported.
          </div>
          {/* Extra Box */}
          <div className="relative w-64">
            <img
              src="/5.png"
              alt="Stigma"
              className="object-cover w-full h-auto"
            />
            <p className="absolute px-6 inset-0 flex flex-col items-end justify-center text-end text-white text-lg font-regular ">
              <div>
                <span className="text-4xl font-bold">80%</span> of
              </div>
              <div>
                of cyberbullying victims <br /> in India are men
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
