"use client";

import React from "react";

const Hero = () => {
  const scrollToClubs = () => {
    const clubsSection = document.getElementById("discover-clubs");
    if (clubsSection) {
      clubsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="absolute top-8 right-8 w-6 h-6 opacity-10">
          <div className="w-full h-1 bg-slate-400 absolute top-1/2 transform -translate-y-1/2"></div>
          <div className="h-full w-1 bg-slate-400 absolute left-1/2 transform -translate-x-1/2 max-h-7"></div>
        </div>

        <div className="text-center space-y-6">
          <h1 className="text-6xl font-extralight text-slate-900 tracking-tighter leading-none">
            Welcome to
            <span className="block font-light text-slate-700">BookClub CH</span>
          </h1>

          <div className="w-16 h-px bg-slate-300 mx-auto my-8"></div>

          <p className="text-xl md:text-2xl font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join a community of book lovers and share your thoughts!
          </p>

          <div className="pt-8">
            <button
              onClick={scrollToClubs}
              className="bg-slate-900 text-white px-12 py-4 text-sm font-light tracking-widest uppercase hover:bg-slate-800 transition-colors duration-300 rounded-none"
            >
              Explore Communities
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
