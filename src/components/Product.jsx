import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
export default function Product({ product }) {
  return (
    <div className="bg-amber-100">
      <Card sx={{ width: 255, height: 415 }}>
        <CardMedia
          sx={{ height: 190 }}
          image={product.thumbnail}
          title={product.title}
        />
        <CardContent>
          <Typography
            className="font-bold"
            gutterBottom
            variant="h6"
            component="div"
          >
            {product.title}
          </Typography>
          <Typography
            className="overflow-auto h-12"
            variant="body6"
            sx={{ color: "text.secondary" }}
          >
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <AddShoppingCartIcon />
        </CardActions>
      </Card>
    </div>
  );
}
