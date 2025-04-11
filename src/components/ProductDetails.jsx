import { Link, useLocation } from "react-router";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const productDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const price = `${Math.floor(product.price)}`;
  console.log(product); // Destructure the product from state
  return (
    <div className="bg-amber-100 h-lvh">
      <div key={product.id} className="flex justify-start px-5 pt-12 h-2/3 ">
        <div className=" flex h-3/3 bg-white rounded-lg shadow-md p-4 ">
          <Typography className="px-2 flex">
            <CardMedia
              sx={{ height: 400, width: 400 }}
              image={product.thumbnail}
              title={product.title}
            />
            <div className="flex flex-col ">
              <div className="">
                <Typography className="font-bold" variant="h4" component="div">
                  {product.title}
                </Typography>
              </div>
              <div className="mt-5">
                <Typography variant="body6" sx={{ color: "text.secondary" }}>
                  {product.description}
                </Typography>
              </div>
              <div className="h-fit flex flex-col justify-around mt-5 ">
                <div className="font-extrabold ">
                  <span className="text-2xl">{price}</span>.99$
                </div>
                <div
                  className={
                    "font-extrabold bg-gray-100 py-0.5 px-1.5 w-fit rounded-lg mt-5"
                  }
                >
                  <span
                    className={
                      product.stock > 0 ? "text-green-700" : "text-red-500"
                    }
                  >
                    {product.stock} in stock
                  </span>
                </div>
              </div>

              <CardActions className="flex justify-between items-end mt-20">
                <Link to="/pay">
                  <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                    Buy
                  </Button>
                </Link>
                <div
                  onClick={() => {
                    handelAddClick(product.id);
                  }}
                >
                  <AddShoppingCartIcon className="cursor-pointer" />
                </div>
              </CardActions>
            </div>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
