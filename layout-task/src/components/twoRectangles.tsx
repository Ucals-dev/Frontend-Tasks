import React from "react";

const TwoRectangles: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-blue-500 h-6 w-10"></div>
      <div className="bg-gray-600 h-6 w-10"></div>
    </div>
  );
};

export default TwoRectangles;