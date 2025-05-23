import React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
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
    <div className="bg-[#C9B194] min-h-lvh">
      <Container maxWidth="lg">
        <div className="flex   justify-between items-center">
          <Typography component="div" variant="h3" className=" py-5">
            Carts:
          </Typography>
          <Typography variant="h5">{cartsData.length}</Typography>
        </div>

        <div className="flex justify-center sm:justify-start ">
          <Grid container spacing={2} className="flex justify-center">
            {cartsData.map((product) => (
              <div key={product.id} className="bg-[#FAF1E6] shadow-lg ">
                <div className="h-fit w-64 rounded-lg">
                  <Typography
                    component="div"
                    className="px-2 flex flex-col justify-evenly"
                  >
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
                      <div className="font-extrabold bg-gray-200 py-0.5 px-1.5 w-fit rounded-lg">
                        <span
                          className={
                            product.stock > 0
                              ? "text-green-800"
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
                          color="black"
                          variant="outlined"
                          onClick={() => setCount(count - 1)}
                        >
                          <RemoveIcon />
                        </Button>
                        <h1 className="mx-1 font-bold h-8 w-8 text-center text-[#845c4c]">
                          {count}
                        </h1>
                        <Button
                          color="black"
                          variant="outlined"
                          onClick={() => setCount(count + 1)}
                        >
                          <AddIcon />
                        </Button>
                      </div>
                      <div onClick={() => handelRemoveClick(product.id)}>
                        <DeleteIcon className="cursor-pointer text-[#845c4c]" />
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
