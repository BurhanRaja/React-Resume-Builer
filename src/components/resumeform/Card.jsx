import React from "react";

const Card = ({ children, title, mappedData }) => {
  return (
    <>
      <div className=" rounded-lg shadow-md mt-8">
        <h3 className="bg-black text-white font-bold p-4">{title}</h3>
        <div className="p-4 bg-white">
          {children}
          <div className="mt-5">{mappedData}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
