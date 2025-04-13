import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import { grey } from "@mui/material/colors";
const greya = grey[900]; // #f44336
export default function Product({ product, handelAddClick }) {
  const price = `${Math.floor(product.price)}`;
  return (
    <div key={product.id} className="bg-[#FAF1E6] shadow-lg rounded-md">
      <div className="h-fit w-64 ">
        <Typography
          component="div"
          className="px-2 flex flex-col justify-evenly"
        >
          <Link to="/Details" state={{ product }}>
            <CardMedia
              sx={{ height: 220 }}
              image={product.thumbnail}
              title={product.title}
            />
            <div className="overflow-hidden h-8">
              <Typography className="font-bold" variant="h6" component="div">
                {product.title}
              </Typography>
            </div>
            <div className="overflow-hidden h-12">
              <Typography variant="body6" sx={{ color: "text.secondary" }}>
                {product.description}
              </Typography>
            </div>
            <div className="h-fit flex flex-col justify-around ">
              <div className="font-extrabold ">
                <span className="text-2xl">{price}</span>.99$
              </div>
              <div className="font-extrabold bg-gray-200 py-0.5 px-1.5 w-fit rounded-lg">
                <span
                  className={
                    product.stock > 0 ? "text-green-800" : "text-red-500"
                  }
                >
                  {product.stock} in stock
                </span>
              </div>
            </div>
          </Link>
          <CardActions className="flex justify-between items-center">
            <Link to="/pay">
              <Button
                color={greya}
                variant="outlined"
                endIcon={<AddShoppingCartIcon className="text-[#845c4c]" />}
                className="border-2 px-2"
              >
                Buy
              </Button>
            </Link>
            <div
              onClick={() => {
                handelAddClick(product.id);
              }}
            >
              <AddShoppingCartIcon className="cursor-pointer text-[#845c4c] " />
            </div>
          </CardActions>
        </Typography>
      </div>
    </div>
  );
}
