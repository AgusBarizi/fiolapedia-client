import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Button,
  // Paper,
  Container,
  // Snackbar,

} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import MenuIcon from '@material-ui/icons/Menu';
// import MailIcon from '@material-ui/icons/Mail';
// import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import TransactionIcon from "@material-ui/icons/SyncAlt";
import { fade, makeStyles } from "@material-ui/core/styles";
// import { red } from "@material-ui/core/colors";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import Icon from "@material-ui/core/Icon";
import { Link,  Redirect } from "react-router-dom";

import logo from "../fiolapedia-icon.png";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      // width: 'auto',
      // width: 400,
      width: "100%"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const NavBar = () => {
  const classes = useStyles();

  const testRedirect = ()=>{
    return <Redirect to="/" />
  }

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Container>
          <Toolbar>
            <Typography variant="h6" color="inherit" component={Link} to={"/"}>
              {/* React & Material-UI */}
              <img src={logo} height={50} style={{ paddingRight: 24 }} style={{cursor:'pointer'}} />
              {/* <img src="https://cf.shopee.co.id/file/70ac9f78ea99da5ae911985a3cce4958" height={50}/> */}
            </Typography>
            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>

              <Button
                color="inherit"
                className={classes.button}
                >
                Kategori <KeyboardArrowDownIcon />
              </Button>
              
            </div>
           
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit" component={Link} to="/shopping_cart">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              {/* <IconButton
edge="end"
aria-label="account of current user"
aria-haspopup="true"
color="inherit"
>
<AccountCircle />
</IconButton> */}

              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar
