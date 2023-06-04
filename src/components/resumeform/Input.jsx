import React from "react";

const Input = ({ value, handleChange, name, label, type, smallText }) => {
  return (
    <div className="w-[40%]">
      <label for={name} class="block text-sm text-gray-500 ">
        {label}
      </label>
      <input
        type={type}
        class="block bg-gray-50 mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        name={name}
        id={name}
      />
      <small className="text-blue-500">{smallText}</small>
    </div>
  );
};

export default Input;
