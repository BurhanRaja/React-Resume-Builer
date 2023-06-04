import React, { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

function Stars({ selected, handleSelected }) {
  return (
    <div>
      <label class="block text-sm text-gray-500 mb-3">Rate your Skills</label>
      <div className="flex">
        {Array.from(new Array(5)).map((el, index) => {
          if (selected >= index + 1) {
            return (
              <button
                className="bg-transparent"
                onClick={() => handleSelected(index + 1)}
              >
                <BsStarFill className="text-4xl mr-2 text-yellow-500" />
              </button>
            );
          } else {
            return (
              <button
                className="bg-transparent"
                onClick={() => handleSelected(index + 1)}
              >
                <BsStar className="text-4xl mr-2 text-yellow-500" />
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Stars;
