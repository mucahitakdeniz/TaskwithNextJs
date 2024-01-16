"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  let router = useRouter();
  return (
    <nav className="bg-blue-500 p-4 flex justify-between">
      <div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          onClick={() => router.push("/register")}
        >
          Register
        </button>
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
