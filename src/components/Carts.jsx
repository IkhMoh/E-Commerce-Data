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
  return (
    <Container maxWidth="lg">
      <h1 className="text-5xl font-bold  py-5">Carts:</h1>
      <div className="flex justify-start ">
        <Grid container spacing={2} className="flex justify-center">
          {cartsData.map((product) => (
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
                    <Typography
                      variant="body6"
                      sx={{ color: "text.secondary" }}
                    >
                      {product.description}
                    </Typography>
                  </div>
                </CardContent>
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
              </Card>
            </div>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Carts;
