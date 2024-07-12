import React from 'react';

const Feedbackcard = ({ img, name, title, description }) => {
  return (
    <div
      className="feedback-card p-4 rounded-lg shadow-lg m-4 flex flex-col items-center"
      style={{
        background: 'linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)',
      }}
    >
      <img src={img} alt={name} className="w-[150px] h-[150px] rounded-full object-cover mb-4" />
      <h2 className="font-bold text-xl text-center">{name}</h2>
      <h3 className="text-white text-center mb-4">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Feedbackcard;