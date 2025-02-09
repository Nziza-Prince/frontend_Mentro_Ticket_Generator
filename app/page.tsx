/* eslint-disable @next/next/no-img-element */
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-32 bg-cover bg-[url('/assets/images/background-desktop.png')] h-screen text-neutral-100 font-inconsolata relative">
      {/* Top Right Corner SVG */}
      <img
        src="/assets/images/pattern-squiggly-line-top.svg"
        alt="Top Right Decoration"
        className="absolute top-1 right-0 w-40 md:w-[300px] lg:w-[500px]"
      />

      {/* Bottom Left Corner SVG */}
      <img
        src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
        alt="Bottom Left Decoration"
        className="absolute bottom-1 left-1 w-40 md:w-[300px] lg:w-[500px]"
      />

      {/* Vertical Lines SVG */}
      <img
        src="/assets/images/pattern-lines.svg"
        alt="Vertical Lines Decoration"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Top Left Circle SVG */}
      <img
        src="/assets/images/pattern-circle.svg"
        alt="Top Left Circle Decoration"
        className="absolute top-0 left-5 w-20 md:w-32 lg:w-48"
      />

      {/* Circle Next to Form SVG */}
      <img
        src="/assets/images/pattern-circle.svg"
        alt="Circle Next to Form Decoration"
        className="absolute right-20 md:right-48 lg:right-96 top-1/2 transform -translate-y-1/2 w-20 md:w-32 lg:w-48"
      />

      {/* Centered Content */}
      <div className="flex flex-col mt-5 items-center text-center w-full max-w-md md:max-w-lg lg:max-w-xl relative z-10">
        <img src="/assets/images/logo-full.svg" alt="Logo" className="w-32 md:w-48 lg:w-56" />
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-10 mb-4 md:mb-6">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="mb-5 text-neutral-500 text-sm md:text-base">
            Secure a spot at next years biggest coding conference
          </p>
        </div>

        {/* Uploading Section */}
        <div className="mt-6 md:mt-10 lg:w-[400px] w-full">
          <p className="text-left text-neutral-300 mb-3 text-sm md:text-base">Upload Avatar</p>
          <div className="border border-dashed border-gray-300 px-6 py-4 md:px-10 md:py-6 rounded-lg text-center">
            <img
              src="/assets/images/icon-upload.svg"
              alt="upload"
              className="mx-auto mb-3 bg-gray-600 p-3 rounded-lg cursor-pointer"
            />
            <p className="text-neutral-300 text-sm md:text-base">
              Drag and drop or click to upload
            </p>
          </div>
          <p className="text-xs md:text-sm text-left text-neutral-300 mt-3">
            <img
              src="/assets/images/icon-info.svg"
              alt="info"
              className="inline-block mr-2 w-4 h-4"
            />
            Upload your photos (JPG or PNG, max size: 500KB)
          </p>

          <div className="mt-6 md:mt-10">
            <div className="flex flex-col mb-4 gap-2">
              <label
                htmlFor="Full Name"
                className="text-neutral-300 text-sm md:text-base text-left"
              >
                Full Name
              </label>
              <input
                className="text-neutral-600 text-sm md:text-base indent-3 focus:outline-none bg-transparent h-10 rounded-lg border border-gray-500"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-4 gap-2">
              <label
                className="text-neutral-300 text-sm md:text-base text-left"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="text-neutral-600 text-sm md:text-base indent-3 focus:outline-none bg-transparent h-10 rounded-lg border border-gray-500"
                type="email"
                placeholder="example@email.com"
              />
            </div>
            <div className="flex flex-col mb-4 gap-2">
              <label
                className="text-neutral-300 text-sm md:text-base text-left"
                htmlFor="github"
              >
                GitHub Username
              </label>
              <input
                className="text-neutral-600 text-sm md:text-base indent-3 focus:outline-none bg-transparent h-10 rounded-lg border border-gray-500"
                type="text"
                placeholder="@yourusername"
              />
            </div>
          </div>
          <button className="mt-6 md:mt-8 w-full bg-orange-500 text-black text-sm md:text-base font-bold py-2 rounded-lg hover:bg-orange-600">
            Generate My Ticket
          </button>
        </div>
        {/* Uploading Section */}
      </div>
    </div>
  );
};

export default Home;