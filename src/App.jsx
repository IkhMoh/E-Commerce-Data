import "./App.css";

import Product from "./components/Product";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  Typography: {
    fontFamily: ["Rubik"],
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Product />
      </ThemeProvider>
    </>
  );
}

export default App;
