import "./App.css";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import Carts from "./components/Carts";
import ProductDetails from "./components/ProductDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router";
import Pay from "./components/pay";
const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Details" element={<ProductDetails />} />
          <Route path="/Carts" element={<Carts />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
