import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import {  useNavigate } from "react-router-dom";

const ProductCard = ({ dta }) => {
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateFunc=()=>{
    dispatch(modalFunc());
    dispatch(updateDataFunc(dta))
    navigate(`/?update=${dta.id}`)
  }

 


  return (
    <div className=" w-[200px] h-[200px] relative m-2 rounded-md mr-4">
      <img src={dta?.url} className="w-full h-full absolute bottom-2 border border-gray-300 shadow-gray-900 shadow-xl" alt="" />
      <div className="absolute left-0 bottom-0 bg-sky-900 text-white text-xl w-full pl-2">
        <div>{dta?.name}</div>
        <div>{dta?.price}£</div>
      </div>
      <div className="absolute top-0 right-1">
        <BsThreeDots onClick={()=>setopen(!open)} color="black" size={25} />
      </div>
      {open && (
        <div className="absolute top-5 right-0 bg-sky-900 text-white text-lg shadow-lg shadow-black ">
          <div onClick={()=>dispatch(deleteDataFunc(dta?.id))} className="pl-1 cursor-pointer">sil</div>
          <div  onClick={updateFunc} className="pl-1 cursor-pointer">güncelle</div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
