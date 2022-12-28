import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { updateProductData } from "../redux/productReducer";
import { http } from "../util/config";

const Hometemplate = () => {
  const dispatch = useDispatch();
  const getAllProduct = async () => {
    try {
      const get = await http.get("/api/Product");
      const updateDataAction = updateProductData(get.data.content);
      dispatch(updateDataAction);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Hometemplate;
