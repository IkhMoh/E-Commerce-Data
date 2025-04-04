import "./App.css";

import Product from "./components/Product";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Product />
      </ThemeProvider>
    </div>
  );
}

export default App;
