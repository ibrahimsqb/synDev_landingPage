// components/TickerTestimonials.jsx
import React from "react";
import { testimonials } from "../constants"; // make sure this has id, name, title, description

const TickerTestimonials = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 dark:bg-gray-800 py-6">
      <div className="inline-block animate-scroll w-max">
        {testimonials.map((t) => (
          <div key={t.id} className="inline-block px-8 text-center align-top w-[300px]">
            <p className="text-sm italic text-gray-700 dark:text-gray-200">"{t.description}"</p>
            <div className="mt-2 text-purple-600 font-semibold">{t.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerTestimonials;
