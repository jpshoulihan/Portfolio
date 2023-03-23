import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ sections }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const NavbarContainer = styled(Box)({
    backgroundColor: "#010201",
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    height: '6vh',
    position:'fixed',
    width:'100%'
  });

  const handleListItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setAnchorEl(null);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarContainer>
      <IconButton
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
        color="inherit"
        aria-label='dropdown menu of page sections'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{marginTop: '5vh'}}
      >
        {sections.map(({ text, id }) => (
          <MenuItem key={id} onClick={() => handleListItemClick(id)}>
            {text}
          </MenuItem>
        ))}
      </Menu>
    </NavbarContainer>
  );
}

export default Navbar;
