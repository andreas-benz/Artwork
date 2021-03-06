import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function DrawerComponent() {

  const [openDrawer, setOpenDrawer] = useState(false);

  const buttonStyle = {
    color: 'white',
    position: 'absolute',
    left: '10px',
    display: "inline",
    float: 'left',
  };
  
    return (
    <>
      <IconButton style={buttonStyle} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <Drawer 
        open={openDrawer} 
        onClose={() => setOpenDrawer(false)}
        >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/01">The Square</Link>
            </ListItemText>
          </ListItem >
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/02">The Circle</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/03">Moving Dots</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/04">Noise</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    
    </>
  );
}
export default DrawerComponent;