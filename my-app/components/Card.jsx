import React from "react";
import { getPosts } from "../app/helpers/postFunctions";

const Card = async () => {
  const { data } = await getPosts();

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((post) => (
        <div
          key={post.id}
          className="max-w-md mx-2 my-4 bg-white rounded-xl overflow-hidden shadow-md"
        >
          <img
            className="w-full h-64 object-cover object-center"
            src={post.image}
            alt={post.id}
          />
          <div className="p-6">
            <h2 className="font-bold text-xl mb-2"> {post.text}</h2>
            <p className="text-gray-600">
              {post?.owner?.firstName} {post?.owner?.lastName}
            </p>
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
              <span className="text-blue-500">{post.likes}</span>
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
              {post?.tags.map((tag) => (
                <a className="m-1" key={tag} href={`tags/${tag}`}>
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
