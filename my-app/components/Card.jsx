import React from 'react';

const Card = ({ title, image, author, likes, comments }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-8">
      <img className="w-full h-64 object-cover object-center" src={image} alt={title} />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600">{author}</p>
      </div>
      <div className="p-6 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-blue-500 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span className="text-blue-500">{likes}</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-gray-500 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21a2 2 0 01-2 2H7a2 2 0 01-2-2v-8h14v8zm0 0V9a4 4 0 00-4-4H9a4 4 0 00-4 4v12M12 11v5"
            />
          </svg>
          <span className="text-gray-500">{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
