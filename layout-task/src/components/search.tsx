import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search: React.FC = () => {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            <p className=" text-gray-800">FIND</p>
            <div className="relative mx-2 w-1/2">
                <input type="text" className=" p-2">
                </input>
                <hr className=" absolute bottom-2 w-full bg-black h-[1px] border-none rounded-sm" />
            </div>
            
            <IoMdSearch></IoMdSearch>
        </div>
    );
};

export default Search;