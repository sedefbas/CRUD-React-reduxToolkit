import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BiAddToQueue } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-sky-900  text-white height-6 mb-2">
      <div className="text-3xl p-6">REACT UYGULAMA</div>
      <div className="flex items-center gap-4 pr-12">
        <div>
          <select
            defaultValue="s"
            className="bg-slate-200 text-blue-900 rounded-sm"
            name=""
            id=""
          >
            <option value="s">seçiniz</option>
            <option value="artan">artan</option>
            <option value="azalan">azalan</option>
          </select>
        </div>
        <div className="flex">
          <input
            className="rounded-sm bg-slate-200 text-gray-700 mr-2 "
            type="text"
            placeholder=" arama yapınız.."
          />
          <HiOutlineSearch size={25} />
        </div>
        <div onClick={()=>dispatch(modalFunc())}  className="rounded-full bg-sky-700 w-10 h-10 flex items-center justify-center cursor-pointer ">
          <BiAddToQueue size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
