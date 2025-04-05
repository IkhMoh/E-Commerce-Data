import "./App.css";
import axios from "axios";
import Product from "./components/Product";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
});
let cancelGet = null;
function App() {
  const [productss, setProducts] = useState(["kk"]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products", {
        cancelToken: new axios.CancelToken((c) => {
          cancelGet = c;
        }),
      })
      .then(function (response) {
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {
      console.log("cansle");
      cancelGet();
    };
  }, []);
  // console.log(products);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        {/* <Product /> */}
        <div className="flex justify-center mt-12 gap-4 flex-wrap">
          {productss.map((product) => (
            <div className="border-2 pb-36 p-8">
              <img
                className=""
                key={product.id}
                width="250"
                src={product.thumbnail}
              />
              <div>hello</div>
            </div>
          ))}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
