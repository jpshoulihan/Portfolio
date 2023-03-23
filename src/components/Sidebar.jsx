import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import image from '../assets/john_houlihan_profile_pic.png'

function Sidebar({ sections }) {
  const theme = useTheme();

  const SideBar = styled(Box)({
    position: "sticky",
    top: 0,
    backgroundColor: "#010201",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });

  const handleListItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SideBar>
      <Avatar
        alt="John Houlihan Profile Picture"
        src={image}
        sx={{ width: "75%", height: "auto", maxWidth: "100%", backgroundColor:theme.palette.action.active }}
        style={{ marginBottom: theme.spacing(4) }}
      />
      <List sx={{ justifyContent: "center", alignItems: "center" }}>
        {sections.map(({ text, id }) => (
          <ListItem
            disablePadding
            key={id}
            onClick={() => handleListItemClick(id)}
            sx={{
              flexGrow: 1,
              textAlign: "center",
              cursor: "pointer",
              padding: "8px",
              backgroundColor: "transparent",
              border: "none",
              p: 0.5,
              "& .MuiListItemText-primary": {
                fontWeight: "bold",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                color: "white",
                "&:hover": {
                  color: "grey",
                },
              }}
            >
              {text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </SideBar>
  );
}

export default Sidebar;
