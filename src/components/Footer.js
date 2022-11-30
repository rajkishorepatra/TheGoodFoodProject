import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 p-8 md:p-16 text-white border-b border-gray-500">
        <div className="flex flex-col justify-center items-center space-y-4">
          <AiOutlineMail className="text-4xl" />
          <p>tgf@gmail.com</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <AiOutlinePhone className="text-4xl" />
          <p>1234567890</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <FiMapPin className="text-4xl" />
          <p>Bhubaneswar, Odisha</p>
        </div>
      </div>
      <div className="text-gray-400 p-2">
        © 2022 <span className="text-[#e55137]">TGF</span> — All Rights
        Reserved.
      </div>
    </>
  );
};

export default Footer;
