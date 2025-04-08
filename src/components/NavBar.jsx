import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import { Link } from "react-router";
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

export default function SearchAppBar() {
  return (
    <AppBar position="static" className=" h-14 flex justify-center">
      <Toolbar className="flex justify-between items-center space-x-3 bg-amber-500">
        <Link to="/">
          <typography
            variant="h1"
            noWrap
            component="div"
            className="flex items-center cursor-pointer"
          >
            <StoreIcon className="text-amber-600" />
            <span className="text-amber-400 font-bold">Vav</span>Store
          </typography>
        </Link>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Link to="/Carts">
          <Badge badgeContent={4} color="secondary">
            <LocalGroceryStoreIcon />
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
