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
const Carts = ({ cartsData, setCartsData }) => {
  const [count, setCount] = useState(1);
  const handelRemoveClick = (id) => {
    setCartsData(cartsData.filter((product) => product.id !== id));
  };
  // const price = product.price * count;
  return (
    <div className="bg-amber-100 h-lvh">
      <Container maxWidth="lg">
        <h1 className="text-5xl font-bold  py-5">Carts:</h1>
        <div className="flex justify-start ">
          <Grid container spacing={2} className="flex justify-center">
            {cartsData.map((product) => (
              <div key={product.id} className="bg-white shadow-lg ">
                <div className="h-fit w-64 rounded-lg">
                  <Typography className="px-2 flex flex-col justify-evenly">
                    <CardMedia
                      sx={{ height: 220 }}
                      image={product.thumbnail}
                      title={product.title}
                    />
                    <div className="overflow-hidden h-8">
                      <Typography
                        className="font-bold"
                        variant="h6"
                        component="div"
                      >
                        {product.title}
                      </Typography>
                    </div>
                    <div className="overflow-hidden h-12">
                      <Typography
                        variant="body6"
                        sx={{ color: "text.secondary" }}
                      >
                        {product.description}
                      </Typography>
                    </div>
                    <div className="h-fit flex flex-col justify-around ">
                      <div className="font-extrabold ">
                        <span className="text-2xl">
                          {Math.floor(product.price) * count}
                        </span>
                        .99$
                      </div>
                      <div className="font-extrabold bg-gray-100 py-0.5 px-1.5 w-fit rounded-lg">
                        <span
                          className={
                            product.stock > 0
                              ? "text-green-700"
                              : "text-red-500"
                          }
                        >
                          {product.stock} in stock
                        </span>
                      </div>
                    </div>
                    <CardActions className="flex justify-between">
                      <div className="flex  ">
                        <Button
                          color="secondary"
                          variant="outlined"
                          onClick={() => setCount(count - 1)}
                        >
                          <RemoveIcon />
                        </Button>
                        <h1 className="mx-1 font-bold h-8 w-8 text-center text-sky-500">
                          {count}
                        </h1>
                        <Button
                          color="secondary"
                          variant="outlined"
                          onClick={() => setCount(count + 1)}
                        >
                          <AddIcon />
                        </Button>
                      </div>
                      <div onClick={() => handelRemoveClick(product.id)}>
                        <DeleteIcon color="error" className="cursor-pointer" />
                      </div>
                    </CardActions>
                  </Typography>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Carts;
