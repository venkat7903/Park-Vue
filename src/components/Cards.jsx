import React from "react";

const Cards = (props) => {
  return (
    <div className="bg-orange-100 border border-gray-200 shadow-md flex flex-col  justify-center items-center w-[1/3] h-[350px] my-3 py-3 hover:transition duration-150 ease-in-out  ">
      {/* Render the icon component */}
      <div className="text-5xl mt-1 text-orange-500">{props.icon}</div>
      <h1 className="font-bold text-3xl mt-1">{props.heading}</h1>
      <p className="text-lg w-[400px] px-4 mt-3">{props.altp}</p>
    </div>
  );
};

export default Cards;
