import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Button,
  Menu,
  Container,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { fade, makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import HistoryIcon from "@material-ui/icons/History";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import logo from "../../fiolapedia-icon.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import axios from 'axios';

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
    // marginRight: theme.spacing(2),
    // marginLeft: 0,
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(3),
      // width: 'auto',
      width: 400
      // width: "100%"
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

const NavBar = ({ keywordString }) => {
  const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : null;

  const classes = useStyles();
  let history = useHistory();
  
  const [keyword, setKeyword] = useState(keywordString || "");
  const [anchorEl, setAnchorEl] = useState(null);

  const searchHandler = e => {
    if (e.key == "Enter") {
      const keyword = encodeURIComponent(e.target.value);
      console.log("go search");
      if (keyword == "") {
        history.push(`/`);
      } else {
        history.push(`/search/${keyword}`);
      }
    }
  };

  const logoutHandler = async e =>{
    const userData = window.localStorage.getItem('userData')
    ? JSON.parse(window.localStorage.getItem('userData'))
    : {}

    await axios.post('http://localhost:3000/logout', {
      headers: {
        // Authorization: `Bearer ${userData.token}`,
        Authorization: `${userData.token}`,
      },
    }).catch((err)=>{
      console.log(err)
    })
    // console.log('loggedout')
    window.localStorage.removeItem('userData')
    history.push(`/`);
    // return <Redirect to="/login" />
  }

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Container>
          <Toolbar>
            <Typography variant="h6" color="inherit" component={Link} to={"/"}>
              {/* React & Material-UI */}
              <img
                src={logo}
                height={50}
                style={{ paddingRight: 24 }}
                style={{ cursor: "pointer" }}
              />
              {/* <img src="https://cf.shopee.co.id/file/70ac9f78ea99da5ae911985a3cce4958" height={50}/> */}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                 <Button color="inherit" component={Link} to="/admin/users">
                    User
                  </Button>

                  <Button color="inherit" component={Link} to="/admin/products">
                    Product
                  </Button>

                  <Button color="inherit" component={Link} to="/admin/transactions">
                    Transaction
                  </Button>

              {!userData ? (
                <>
                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                  <Button color="inherit" component={Link} to="/register">
                    Register
                  </Button>
                </>
              ) : (
                <>
                <Button
                color="inherit"
                onClick={e =>{ setAnchorEl(e.currentTarget) }}
                className={classes.button}
                startIcon={<AccountCircleIcon />}
                >
                {userData.user.name} <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={()=>setAnchorEl(null)}
              >
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
              </>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
