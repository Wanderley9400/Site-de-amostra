import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Building the Future with
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}Innovation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Transform your ideas into reality with our cutting-edge solutions and expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Technology Innovation"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}