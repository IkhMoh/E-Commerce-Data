import { Link, useLocation } from "react-router";
import React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
const productDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const price = `${Math.floor(product.price)}`;

  return (
    <div className="bg-[#C9B194] min-h-lvh pb-5">
      <Container maxWidth="lg">
        <Typography component="div" variant="h3" className=" py-5">
        Details:
        </Typography>
        </Container>
        <div
          key={product.id}
          className="flex justify-start px-5 pt-6 md:pt-12 h-fit "
        >
          <div className=" flex h-3/3 bg-[#FAF1E6] rounded-lg shadow-md p-4 ">
            <Typography component="div" className="px-2 md:flex">
              <CardMedia
                className="h-[200px]  md:h-[400px] w-full md:w-[350px]"
                image={product.thumbnail}
                title={product.title}
              />
              <div className="flex flex-col ">
                <div className="">
                  <Typography
                    className="font-bold"
                    variant="h4"
                    component="div"
                  >
                    {product.title}
                  </Typography>
                </div>
                <div className="mt-1 md:mt-5">
                  <Typography variant="body6" sx={{ color: "text.secondary" }}>
                    {product.description}
                  </Typography>
                </div>
                <div className="h-fit flex flex-col justify-around mt-1 md:mt-5 ">
                  <div className="font-extrabold ">
                    <span className="text-2xl">{price}</span>.99$
                  </div>
                  <div
                    className={
                      "font-extrabold bg-gray-200 py-0.5 px-1.5 w-fit rounded-lg mt-1 md:mt-5"
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
                  <div
                    className={
                      "font-extrabold  py-0.5 px-1.5 w-fit rounded-lg mt-1 md:mt-5 space-x-2"
                    }
                  >
                    {product.tags.map((element, index) => (
                      <Chip key={index} label={element} />
                    ))}
                  </div>
                </div>

                <CardActions className="flex justify-between items-end mt-3 md:mt-10">
                  <Link to="/pay">
                    <Button
                      variant="contained"
                      endIcon={<AddShoppingCartIcon />}
                    >
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
