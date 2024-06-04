import React from "react";
import airport from "../img/airport.png";
import Text from "./text";
const AirnewsSection: React.FC = () => {
    return (
        <div className='flex flex-col  items-center basis-[25%]'>
            <div className="flex flex-col items-center bg-gray-200 m-4">
                <img src={airport} alt="" className=" h-36 min-h-16"/>
                <p className="text-gray-800 text-xl m-1 mb-0 pt-1 self-start underline pl-1">2018.11.10</p>
                <p className="text-blue-600 text-2xl m-1 self-start">A POLISH TITLE <hr className='w-full bg-blue-600 h-[2px] border-none rounded-sm'/></p>
                <Text></Text>
            </div>
        </div>

    );
}
export default AirnewsSection;