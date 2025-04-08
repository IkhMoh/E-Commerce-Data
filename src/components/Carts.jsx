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
const Carts = () => {
  const [count, setCount] = useState(1);

  const product = [
    {
      id: 1,
      title: "Product Title dsvgsvfsdvsdcdassfvgds",
      description:
        "lorim ipsum  flex  justify-self-end items-endflex  justify-self-end items-endflex  justify-self-end items-endflex  justify-self-end items-endflex  justify-self-end items-endflex  justify-self-end items-end sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      thumbnail:
        "data:image/jpeg;base64,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", // Replace with your image URL
    },
  ]; 
  return (
    <Container maxWidth="lg">
      <h1 className="text-5xl font-bold  py-5">Carts:</h1>
      <div className="flex justify-start ">
        <Grid container spacing={2} className="flex justify-center">
          {product.map((product) => (
            <div className="bg-amber-100">
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
                  <DeleteIcon  color="error" className="cursor-pointer"/>
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
