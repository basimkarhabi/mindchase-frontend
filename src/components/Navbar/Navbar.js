import React, { useState } from "react";
import DrawerComponent from "./DrawerComponent/DrawerComponent";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png'
import { useHistory } from "react-router-dom";

import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  ThemeProvider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
      Logo :{
        color:'red',
        maxWidth :180,
        maxHeight:200,
        position:"absolute",
        zIndex :"tooltip",
      },
      account: {
        marginLeft: "auto",
        "&:hover": {
          background: "purple",
        },
      },
      tabsContainer: {
        marginLeft: "auto",
      },
      AppBar:{
        position:'relative',

      }
     

 
}));

const Navbar = ({token, setToken}) => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  
  const theme = useTheme({
    
  }); 
  
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setToken("")
  }
  let history = useHistory();
  function handleClick() {
    history.push("/");
  }

  return (
    <>
    <ThemeProvider  theme={theme}>
          <AppBar position="relative" elevation={0} className= {classes.AppBar} >
            <Toolbar>
              
              {isMatch ? (
                  <>
                    <DrawerComponent />
                  </>
                ) : 
                (
                <>
                <img   className={classes.Logo}
                          src={Logo}
                          alt="logo" 
                          onClick={handleClick} 
                          onChange={handleClickTab} 
                          value={value}
                    />
        
                  <Tabs
                    onChange={handleClickTab}
                    className={classes.tabsContainer}
                    indicatorColor="secondary"
                    value={value}
                  
                  >
                
                      <Tab
                        disableRipple
                        label="Home"
                        to='/'
                        component={Link}
                      />

                        <Tab
                          disableRipple
                          label="Quiz"
                          to='/quiz'
                          component={Link}
                          
                        />
                        <Tab
                          disableRipple
                          label="chat"
                          to='/messages'
                          component={Link}
                        />

                        
                        <Tab
                          disableRipple
                          label="Workshops"
                          to='/workshops'
                          component={Link}
                        />

<Button
                    aria-controls="menu"
                    className={classes.account}
                    variant="contained"
                    color="secondary"
                   href='https://mindchase.de'
                    

                  >
                    Go To Website Home
                  </Button>
               
                  </Tabs>

                  <Button
                    aria-controls="menu"
                    onMouseOver={handleOpenMenu}
                    className={classes.account}
                    disableElevation
                    disableRipple
                    variant="contained"
                    color="secondary"
                  >
                    Profile
                  </Button>
                </>
              )}
            </Toolbar>
          </AppBar>
          {/* Menu */}
          <Menu
              style={{ marginTop: "50px" }}
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
          >
            {token 
              ?
              <>
                <MenuItem component={Link} to="/my-account">My Account</MenuItem>
                <MenuItem component={Link} to="/messages">  Chat</MenuItem>
                <MenuItem onClick={logOut} to = "/"> logout </MenuItem>
              </>
              :
              <>
                <MenuItem component={Link} to="/login">  login</MenuItem>
                <MenuItem component={Link} to="/register"> Register </MenuItem>
              </>
            }

          </Menu>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
