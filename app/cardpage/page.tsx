/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';

const CardContent = () => {
  const searchParams = useSearchParams();
  const [queryParams, setQueryParams] = useState({
    fullName: "",
    email: "",
    githubUsername: "",
    avatar: "",
  });

  useEffect(() => {
    if (searchParams) {
      const fullName = searchParams.get('fullName');
      const email = searchParams.get('email');
      const githubUsername = searchParams.get('githubUsername');
      const avatar = searchParams.get('avatar');
  
      const newParams = {
        fullName: fullName || localStorage.getItem("fullName") || "",
        email: email || localStorage.getItem("email") || "",
        githubUsername: githubUsername || localStorage.getItem("githubUsername") || "",
        avatar: avatar || localStorage.getItem("avatar") || "",
      };
  
      setQueryParams(newParams);
  
      // Save to localStorage
      localStorage.setItem("fullName", newParams.fullName);
      localStorage.setItem("email", newParams.email);
      localStorage.setItem("githubUsername", newParams.githubUsername);
      localStorage.setItem("avatar", newParams.avatar);
    }
  }, [searchParams]);
  

  // Handle missing query parameters
  if (!queryParams.fullName || !queryParams.email || !queryParams.githubUsername || !queryParams.avatar) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-neutral-100 font-inconsolata">
        <h1 className="text-2xl font-bold">Oops! Something went wrong.</h1>
        <p className="mt-4 text-neutral-500">
          Please go back and fill out the form to generate your ticket.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-16 lg:px-32 bg-cover bg-[url('/assets/images/background-desktop.png')] min-h-screen text-neutral-100 font-inconsolata relative">
      {/* Top Right Corner SVG */}
      <img
        src="/assets/images/pattern-squiggly-line-top.svg"
        alt="Top Right Decoration"
        className="absolute top-1 right-0 w-24 sm:w-40 md:w-[300px] lg:w-[500px]"
      />

      {/* Bottom Left Corner SVG */}
      <img
        src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
        alt="Bottom Left Decoration"
        className="absolute bottom-1 left-1 w-24 sm:w-40 md:w-[300px] lg:w-[500px]"
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
        className="absolute top-0 left-5 w-12 sm:w-20 md:w-32 lg:w-48"
      />

      {/* Circle Next to Form SVG */}
      <img
        src="/assets/images/pattern-circle.svg"
        alt="Circle Next to Form Decoration"
        className="absolute right-10 sm:right-20 md:right-48 lg:right-96 top-1/2 transform -translate-y-1/2 w-12 sm:w-20 md:w-32 lg:w-48"
      />

      <div className="flex flex-col mt-5 items-center text-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl relative z-10">
        <img
          src="/assets/images/logo-full.svg"
          alt="Logo"
          className="w-24 sm:w-32 md:w-48 lg:w-56"
        />
        <div>
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-10 mb-4 md:mb-6">
            Congrats,{" "}
            <span className="bg-text-gradient text-transparent bg-clip-text">
              {queryParams.fullName}!
            </span>
          </h1>
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
            Your Ticket is ready
          </h1>
          <div>
            <p className="text-neutral-500 text-sm sm:text-base">
              Weve emailed your ticket to
            </p>
            <p className="text-neutral-500 text-sm sm:text-base">
              <span className="text-orange-700">{queryParams.email}</span> and
              will send updates in
            </p>
            <p className="mb-5 text-neutral-500 text-sm sm:text-base">
              the run up to the event
            </p>
          </div>
        </div>

        <div className="bg-cover w-full bg-[url('/assets/images/pattern-ticket.svg')] mt-10 p-4 sm:p-5 rounded-lg">
          <img
            src="/assets/images/logo-full.svg"
            alt="Logo"
            className="w-24 sm:w-72"
          />
          <p className="text-left mt-2 mb-6 text-neutral-500">Jan 31, 2025 / Austin, TX</p>
          <div className="pt-3 sm:pt-10 flex gap-4 sm:gap-5 items-center mb-7">
            <img
              src={queryParams.avatar}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg"
              alt="Avatar"
            />
            <div className="flex flex-col">
              <h1 className="text-left font-bold text-lg sm:text-xl">{queryParams.fullName}</h1>
              <p className="flex items-center gap-2">
                <img
                  src="/assets/images/icon-github.svg"
                  alt="github"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>{queryParams.githubUsername}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardContent />
    </Suspense>
  );
};

export default Card;