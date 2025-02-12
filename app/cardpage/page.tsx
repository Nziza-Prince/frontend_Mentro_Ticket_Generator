/* eslint-disable @next/next/no-img-element */
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-32 bg-cover bg-[url('/assets/images/background-desktop.png')] min-h-screen text-neutral-100 font-inconsolata relative">
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

      <div className="flex flex-col mt-5 items-center text-center w-full max-w-md md:max-w-lg lg:max-w-xl relative z-10">
        <img
          src="/assets/images/logo-full.svg"
          alt="Logo"
          className="w-32 md:w-48 lg:w-56"
        />
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-10 mb-4 md:mb-6">
            Congrats,{" "}
            <span className="bg-text-gradient text-transparent bg-clip-text">
              Jonatan Kristof !
            </span>
          </h1>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
            Your Ticket is ready
          </h1>
          <div>
            <p className="text-neutral-500 text-sm md:text-base">
              Weve emailed your ticket to
            </p>
            <p className="text-neutral-500 text-sm md:text-base">
              <span className="text-orange-700">Jonatan@email.com</span> and
              will send updates in
            </p>
            <p className="mb-5 text-neutral-500 text-sm md:text-base">
              the run up to the event
            </p>
          </div>
        </div>

        <div className="bg-cover w-full bg-[url('/assets/images/pattern-ticket.svg')] mt-10 p-5 rounded-lg">
          <img
            src="/assets/images/logo-full.svg"
            alt="Logo"
            className="w-24 mx-auto"
          />
          <p className="text-center mt-2 mb-6 text-neutral-500">Jan 31, 2025 / Austin, TX</p>
          <div className="flex gap-3 items-center">
            <img src="/assets/images/image-avatar.jpg" className="w-16 h-16 rounded-lg" alt="Avatar" />
            <div className="flex flex-col">
              <h1 className="text-left font-bold">Jonatan Kristof</h1>
              <p className="flex items-center gap-2">
                <img src="/assets/images/icon-github.svg" alt="github" className="w-4 h-4" />
                <span>@jonatankristof0101</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;