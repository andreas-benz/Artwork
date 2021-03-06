import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer"
import { SortOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(0),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const TypographyStyle = {
    float: 'left',
    display: 'block',
  };

  const navLinks = {
    position: 'fixed',
    right: '50px',
  };

  return (
    <AppBar position="fixed">
      <CssBaseline />
      <Toolbar>
        
          
        {isMobile ? (
          <ul>
            <li style={TypographyStyle}><Typography  variant="h4" className={classes.logo}>Interactive Art Gallery</Typography></li>
            <li style={TypographyStyle}><DrawerComponent /></li>
          </ul>
        ) : (
          <>
          <Typography style={TypographyStyle} variant="h4" className={classes.logo}>Interactive Art Gallery</Typography>

          <ul style={navLinks}>
            <li style={TypographyStyle}>
              <div className={classes.navlinks}>
                <Link style={TypographyStyle} to="/" className={classes.link}>
                  | Home
                </Link>
                <Link to="/01" className={classes.link}>
                  | The Square
                </Link>
                <Link to="/02" className={classes.link}>
                  | The Circle
                </Link>
                <Link to="/03" className={classes.link}>
                  | Moving Dots
                </Link>
                <Link to="/04" className={classes.link}>
                  | Noise
                </Link>
              </div>
            </li>
          </ul>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;