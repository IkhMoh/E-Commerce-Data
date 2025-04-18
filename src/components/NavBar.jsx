import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import { Link } from "react-router";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// icons  //
import SearchIcon from "@mui/icons-material/Search";
import StoreIcon from "@mui/icons-material/Store";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

// === icons === //

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  border: "2px solid #845c4c",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

export default function NavBar({ cartsData, productSearch, setProductSearch }) {
  return (
    <div className=" h-14 bg-[#C9B194] flex justify-center items-center ">
       
        <AppBar
          position="fixed"
          className=" h-14 flex justify-center rounded-sm"
          color="[#dfd8ce]"
        >
          <Toolbar className="flex justify-between items-center space-x-1 rounded-md bg-[#dfd8ce] shadow-md text-black">
            <Typography
              noWrap
              component={Link}
              to="/"
              className="flex items-center cursor-pointer pr-6 "
            >
              <StoreIcon className="text-[#c9aca6]" />
              <span className="text-[#845c4c] font-bold">Vav</span>Store
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={productSearch}
                onChange={(e) => {
                  setProductSearch(e.target.value);
                }}
              />
            </Search>
            <Link to="/Carts">
              <Badge
                badgeContent={Object.keys(cartsData).length}
                color="warning"
              >
                <LocalGroceryStoreIcon className="text-[#845c4c]" />
              </Badge>
            </Link>
          </Toolbar>
        </AppBar>
      
    </div>
  );
}
