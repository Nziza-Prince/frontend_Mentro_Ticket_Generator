import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-32 bg-cover bg-[url('/assets/images/background-desktop.png')] h-screen text-neutral-100 font-inconsolata relative">
      {/* Top Right Corner SVG */}
      <img
        src="/assets/images/pattern-squiggly-line-top.svg"
        alt="Top Right Decoration"
        className="absolute top-1 right-0 w-[500px]"
      />

      {/* Bottom Left Corner SVG */}
      <img
        src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
        alt="Bottom Left Decoration"
        className="absolute bottom-1 left-1 w-[500px]"
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
        className="absolute top-0 left-5 w-48"
      />

      {/* Circle Next to Form SVG */}
      <img
        src="/assets/images/pattern-circle.svg"
        alt="Circle Next to Form Decoration"
        className="absolute right-96 top-1/2 transform -translate-y-1/2 w-48"
      />

      {/* Centered Content */}
      <div className="flex flex-col mt-5 items-center text-center w-[600px] relative z-10">
        <img src="/assets/images/logo-full.svg" alt="Logo" className="w-56" />
        <div>
          <h1 className="font-bold text-4xl mt-10 mb-6">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="mb-5 text-neutral-500">
            Secure a spot at next years biggest coding conference
          </p>
        </div>

        {/* Uploading Section */}
        <div className="mt-10 w-[400px]">
          <p className="text-neutral-300 mb-3">Upload Avatar</p>
          <div className="border border-dashed border-gray-300 px-10 py-3 rounded-lg text-center">
            <img
              src="/assets/images/icon-upload.svg"
              alt="upload"
              className="mx-auto mb-3 bg-gray-600 p-3 rounded-lg"
            />
            <p className="text-neutral-300">Drag and drop or click to upload</p>
          </div>
          <p className="text-sm text-left text-neutral-300 mt-3">
            <img
              src="/assets/images/icon-info.svg"
              alt="info"
              className="inline-block mr-2"
            />
            Upload your photos (JPG or PNG, max size: 500KB)
          </p>
          
          <div className="mt-10">
            <div className="flex flex-col mb-5 gap-2">
              <label htmlFor="Full Name" className=" text-neutral-300 text-left">Full Name</label>
              <input className="text-neutral-600 text-sm indent-3 focus:outline-none bg-transparent h-10 rounded-lg border border-gray-500" type="text"/>
            </div>
            <div className="flex flex-col mb-5 gap-2">
              <label className=" text-neutral-300 text-left" htmlFor="email">Email Address</label>
              <input className="text-neutral-600 text-sm indent-3 focus:outline-none bg-transparent h-10 rounded-lg border border-gray-500" type="email" placeholder="example@email.com" />
            </div>
            <div className="flex flex-col mb-5 gap-2">
              <label className="text-neutral-300 text-left" htmlFor="email">GitHub Username</label>
              <input className="text-neutral-600 text-sm indent-3 focus:outline-none bg-transparent h-10 rounded-lg border border-gray-500" type="text" placeholder="@yourusername" />
            </div>
          </div>
        </div>
        {/* Uploading Section */}
      </div>
    </div>
  );
};

export default Home;