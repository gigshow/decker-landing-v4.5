import React from 'react';

export const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg shadow-sm font-semibold">
    {children}
  </button>
);