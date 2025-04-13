import React from "react";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import Product from "./Product";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
let cancelGet = null;
const Products = ({ setCartsData, cartsData,productSearch }) => {
  const [productsData, setProductsData] = useState([]);
  const getProducts = async () => {
    await axios
      .get(`https://dummyjson.com/products/search?q=${productSearch}`, {
        cancelToken: new axios.CancelToken((c) => {
          cancelGet = c;
        }),
      })
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        return error;
      });
    return () => {
      cancelGet();
    };
  };
  const handelAddClick = (id) => {
    {
      productsData.map((product) =>
        product.id === id ? setCartsData([...cartsData, product]) : product
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, [productSearch]);

  return (
    <main className="bg-[#C9B194] min-h-screen">
      <Container maxWidth="lg">
        <Typography component="div" variant="h3" className=" py-5">
          Products:
        </Typography>
        <Grid
          container
          spacing={1}
          className="flex items-center justify-center"
        >
          {productsData.map((product) => (
            <Product
              key={product.id}
              product={product}
              handelAddClick={handelAddClick}
            />
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Products;
