import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";


const Modal = ({ title, content }) => {

  const dispatch = useDispatch();
  

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-screen flex items-center justify-center ">
      <div className="w-1/3 bg-sky-900 shadow-2xl shadow-gray-800 p-4 !rounded-3xl">
        <div className="border-b  py-3 flex items-center justify-between">
          <div className="text-3xl text-white">{title}</div>
          <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center">
            <GrClose onClick={()=>dispatch(modalFunc())} className="text-white" size={24} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-xl text-white mt-4">
            <div className="m-2">ÜRÜN ADI:</div>
            <div className="m-2 mt-4">ÜRÜM FİYATI:</div>
            <div className="m-2 mt-6">RESİM SEÇİNİZ:</div>
          </div>
          <div className="pt-2 pr-16">
     {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
