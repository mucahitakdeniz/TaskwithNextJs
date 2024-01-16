"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <nav className="bg-blue-500 p-4 flex justify-between">
      <div>
        <h1>My App</h1>
      </div>
      <div className="flex items-center">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          onClick={() => console.log(inputValue)}
        >
          Search
        </button>
        <input
          type="text"
          placeholder="Enter something"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
    </nav>
  );
};

export default Navbar;
