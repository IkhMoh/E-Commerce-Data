import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router";
export default function Product({ product }) {
  return (
    <div className="bg-amber-100">
      <Card sx={{ width: 255, height: 415 }}>
        <Link to="/Details">
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
            <div className="overflow-hidden h-24">
              <Typography variant="body6" sx={{ color: "text.secondary" }}>
                {product.description}
              </Typography>
            </div>
          </CardContent>
        </Link>
        <CardActions className="flex justify-between items-center">
          <Link to="/pay">
            <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
              Buy
            </Button>
          </Link>
          <AddShoppingCartIcon className="cursor-pointer" />
        </CardActions>
        ;
      </Card>
    </div>
  );
}
