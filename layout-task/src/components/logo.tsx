import React from "react";
import planeIcon from "../img/planeIcon.png";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-start">
      <img src={planeIcon} alt="logo" className=" h-12 w-12" />
      <div className="flex flex-col items-center ml-1">
        <h1 className="text-2xl font-bold"><span className=" text-blue-500">AIR</span><span className=" text-gray-700">PASSENGER</span></h1>
        <h3 className=" text-xs">airlines & airports of the world</h3>
      </div>
    </div>
  );
};

export default Logo;
