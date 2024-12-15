import React from 'react';

const Button = ({ name, active, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-2 py-1 m-2 rounded-lg font-medium ${
          active ? 'bg-black text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
