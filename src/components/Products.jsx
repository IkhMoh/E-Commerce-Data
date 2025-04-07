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
      <Container maxWidth="lg">
        <h1 className="text-5xl font-bold  py-5">Products:</h1>
        <Grid
          container
          spacing={2}
          className="flex items-center justify-center"
        >
          {productsData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Products;
