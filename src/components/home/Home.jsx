import React from "react";
import { useSelector } from "react-redux";
import Carousel from "../carousel/Carousel";
import Item from "../item/Item";

const Home = () => {
  const { productData } = useSelector((store) => store.productData);
  return (
    <>
      <Carousel />
      <h1>PRODUCT FEATURE</h1>
      <div className="container-fluid product-feature">
        {productData?.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
