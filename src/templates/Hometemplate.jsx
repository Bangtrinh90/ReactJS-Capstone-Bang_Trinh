import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { getAllProductApi } from "../redux/productReducer";

const Hometemplate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductApi);
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
