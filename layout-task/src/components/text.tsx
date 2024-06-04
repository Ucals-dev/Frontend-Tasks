import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const Text = () => {
    const [showFullText, setShowFullText] = React.useState(false);
    return (
        <>
                <p className={`text-gray-800 text-lg m-1 overflow-hidden ${showFullText ? '' : 'max-h-64'} transition-all duration-500`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde, quae illo nam quis voluptate tenetur numquam iure, sequi possimus deserunt nulla pariatur harum, repudiandae labore velit officiis nemo molestiae!
                Explicabo eum aut nostrum dolorem doloribus consectetur incidunt a cumque quia quas! Ipsa optio ipsam qui deserunt!
  
                </p>
                <div className="flex flex-row w-full justify-center">
                {(showFullText ? 
                <IoIosArrowDropup onClick={() => setShowFullText(false)} className="text-blue-600 text-3xl cursor-pointer" /> :
                <IoIosArrowDropdown onClick={() => setShowFullText(true)} className="text-blue-600 text-3xl cursor-pointer" />
                )}  
                </div>

    </>

    );
}

export default Text;