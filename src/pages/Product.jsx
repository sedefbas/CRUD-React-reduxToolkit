import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "./../components/Input";
import Button from "../components/Button";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  
const location =  useLocation();
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });
  console.log(productInfo, "productInfo");
  console.log(data, "data");

  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  console.log(modal, "modal");


  const buttonFunc = () => {
    dispatch(createDataFunc({...productInfo, id: data.length + 1})); //ürün oluştutuken datada ,d de gözükcek artık. bunu sağladık.
    dispatch(modalFunc());
  };
  let loc = location?.search.split("=")[1]

  const buttonUpdateFunc = ()=>{
    dispatch(updateDataFunc({...productInfo, id:loc}))
    dispatch(modalFunc())
  }

  useEffect(()=>{
    if(loc){
      setProductInfo(data.find(dta =>dta.id == loc))
    }
  },[loc])

  const contentModal = (
    <>
      <Input
      value={productInfo.name}
        type="text"
        placeHolder={"ürün ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
      value={productInfo.price}
        type="text"
        placeHolder={"fiyat ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type="file"
        placeHolder={"resim seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button btnText={"ürün oluştur"} onClick={loc ? buttonUpdateFunc : buttonFunc} />
    </>
  );

  return (
    <div className="flex items-center flex-wrap">
      {data?.map((dta,i)=>(<ProductCard key={i} dta={dta}/>))}
      {modal && <Modal title={loc? "ürün güncelle" : "ürün oluştur"} content={contentModal} />}
    </div>
  );
};

export default Product;
