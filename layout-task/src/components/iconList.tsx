import React from "react";
import { CiCalendar } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { FiUploadCloud } from "react-icons/fi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { TbPhotoSensor2 } from "react-icons/tb";
import { CiShoppingTag } from "react-icons/ci";
import { TfiAgenda } from "react-icons/tfi";

const IconList: React.FC = () => {
    return (
        <div className="flex flex-row items-center justify-center">
                <CiCalendar className="h-10 w-10 m-2 mx-3"></CiCalendar>
                <BsFillPeopleFill className="h-10 w-10 m-2 mx-3"></BsFillPeopleFill>
                <FaRegAddressCard className="h-10 w-10 m-2 mx-3"></FaRegAddressCard>
                <CiShare2 className="h-10 w-10 m-2 mx-3"></CiShare2>
                <FiUploadCloud className="h-10 w-10 m-2 mx-3"></FiUploadCloud>
                <IoSpeedometerOutline className="h-10 w-10 m-2 mx-3"></IoSpeedometerOutline>
                <MdOutlineMessage className="h-10 w-10 m-2 mx-3"></MdOutlineMessage>
                <TbPhotoSensor2 className="h-10 w-10 m-2 mx-3"></TbPhotoSensor2>
                <CiShoppingTag className="h-10 w-10 m-2 mx-3"></CiShoppingTag>
                <TfiAgenda className="h-10 w-10 m-2 mx-3"></TfiAgenda>
        </div>
    );
}
export default IconList;