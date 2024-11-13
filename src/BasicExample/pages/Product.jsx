import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

const Product = () => {
  const { productId } = useParams(); //productId це та назва що в  --> path: "/products/:productId", вона ж буде в урлі
  const { name, price, id: mid } = useLoaderData(); // витягаю параметри із fetchProduct

  return (
    <>
      <h1>Product page</h1>
      <p>Product Id: {productId}</p>
      {mid}:{name}:{price}
    </>
  );
};

export default Product;
