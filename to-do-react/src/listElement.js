import React from 'react';
import PropTypes from 'prop-types';
import { IoTrashBinOutline } from "react-icons/io5";
// Define the ListElement component
const ListElement = ({ id, text, done, onChange, onDelete }) => {
    return (
        <li className={`flex flex-row items-center w-full border-gray-400 border-2 border-opacity-35 rounded-lg mb-2 mt-2  ${done ? 'line-through text-gray-500' : ''} `}>
            <input
                type="checkbox"
                id={`task-${id}`}
                checked={done}
                onChange={() => onChange(id, !done)}
            />
            <p className={`flex-grow mb-1 ml-2`}>
                {text}
            </p>
            <button onClick={() => onDelete(id)} className='ml-auto mr-4'>
                <IoTrashBinOutline />
            </button>
        </li>
    );
};

// Define prop types for the component
ListElement.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ListElement;
