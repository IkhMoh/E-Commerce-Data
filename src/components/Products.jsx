import React from "react";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import Product from "./Product";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
let cancelGet = null;
const Products = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products", {
        cancelToken: new axios.CancelToken((c) => {
          cancelGet = c;
        }),
      })
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {});
    return () => {
      cancelGet();
    };
  }, []);

  return (
    <main>
      <Container maxWidth="">
        {productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
    </main>
  );
};

export default Products;
