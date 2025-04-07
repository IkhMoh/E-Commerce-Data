import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
export default function Product({ product }) {
  console.log(product);
  return (
    <div className="bg-amber-100">
      <Card sx={{ width: 255, height: 415 }}>
        <CardMedia
          sx={{ height: 190 }}
          image={product.thumbnail}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
      </Card>
    </div>
  );
}
