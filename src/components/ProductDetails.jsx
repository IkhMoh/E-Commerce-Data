import { useLocation } from "react-router";
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
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const productDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  console.log(product); // Destructure the product from state
  return (
    <div>
      <div key={product.id} className="bg-amber-100">
        <Card sx={{ width: 255, height: 415 }}>
          <CardMedia
            sx={{ height: 190 }}
            image={product.thumbnail}
            title={product.title}
          />
          <CardContent>
            <div className="overflow-hidden h-8">
              <Typography
                className="font-bold"
                gutterBottom
                variant="h6"
                component="div"
              >
                {product.title}
              </Typography>
            </div>
            <div className="overflow-hidden h-28">
              <Typography variant="body6" sx={{ color: "text.secondary" }}>
                {product.description}
              </Typography>
            </div>
          </CardContent>
          <CardActions className="flex justify-between"></CardActions>
        </Card>
      </div>
    </div>
  );
};

export default productDetails;
