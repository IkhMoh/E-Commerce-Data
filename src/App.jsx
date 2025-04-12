import "./App.css";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import Carts from "./components/Carts";
import ProductDetails from "./components/ProductDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router";
import Pay from "./components/pay";
import { useEffect, useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
});

function App() {
  const [cartsData, setCartsData] = useState([]);
  // the API is not working =================================

  // const [CartsData, setCartData] = useState(["j", "k", "l", "m"]);
  // const getCart = async () => {
  //   await axios
  //     .get("https://dummyjson.com/carts/2", {
  //       cancelToken: new axios.CancelToken((c) => {
  //         cancelGet = c;
  //       }),
  //     })
  //     .then((response) => {
  //       setCartData(response);
  //     })
  //     .catch((error) => {});
  //   return () => {
  //     cancelGet();
  //   };
  // };

  // useEffect(() => {
  //   getCart();
  // }, []);

  // the API is not working =================================

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar cartsData={cartsData} />

        <Routes>
          <Route
            path="/"
            element={
              <Products setCartsData={setCartsData} cartsData={cartsData} />
            }
          />
          <Route path="/Details" element={<ProductDetails />} />
          <Route path="/Carts" element={<Carts cartsData={cartsData} setCartsData={setCartsData} />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
