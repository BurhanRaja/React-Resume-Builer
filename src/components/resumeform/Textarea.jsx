import React from "react";

const Textarea = ({ value, handleChange, name, label, width }) => {
  return (
    <div className={`${width} max-sm:w-[100%]`}>
      <label for={name} class="block text-sm text-gray-500 mb-3">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-300 focus:border-gray-200"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Textarea;
