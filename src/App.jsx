import "./App.css";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
        <Products />
      </ThemeProvider>
    </div>
  );
}

export default App;
