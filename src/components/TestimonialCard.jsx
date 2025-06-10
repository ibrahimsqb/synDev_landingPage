import React from "react";
import { Quote } from "lucide-react"; // or any quote icon you prefer

const TestimonialCard = ({ img, name, title, description }) => {
  return (
    <div className="testimonial-card p-6 rounded-xl shadow-md m-4 bg-white dark:bg-[#1e293b] transition-all duration-300 max-w-sm">
      <div className="flex flex-col items-center text-center">
        <img src={img} alt={name} className="w-[100px] h-[100px] rounded-full object-cover mb-3 border-4 border-purple-500" />
        <h2 className="font-semibold text-lg text-gray-800 dark:text-white">{name}</h2>
        <h3 className="text-sm text-purple-600 italic mb-3">{title}</h3>
        <Quote className="text-purple-400 mb-2" />
        <p className="text-gray-600 dark:text-gray-300 italic px-2">"{description}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
