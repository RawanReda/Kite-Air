import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import InfoCard from "./InfoCard.js";
import DisplayInfo from "./DisplayInfo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import CollapsibleTable from "./CollapsibleTable";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/index.js";

import { useEffect, useState,useContext } from "react";
import axios from "axios";
import BackgroundLetterAvatars from "./Avatar";
import { STATES } from "mongoose";
const drawerWidth = 340;

export default function MyBookings() {
  const navigate = useNavigate();

  const [isDisplay, setisDisplay] = useState(true);
  const [isBooking, setisBooking] = useState(false);
  const [state, setState] = useContext(UserContext);



  const handleDisplayOFF = () => {
    setisDisplay(false);
  };
  const handleDisplayON = () => {
    setisDisplay(true);
  };

  // const [logged, setLogged] = useState({});

  // const baseURL = "http://localhost:8000/users/loggedIn";

  // const fetchUser = () => {
  //   axios
  //     .get(baseURL, {
  //       params: {
  //         username: location.state.user.username,
  //         Password: location.state.user.Password,
  //       },
  //     })
  //     .then((response) => {
  //       console.log("here  111 " + response);
  //       setLogged(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // console.log(user.Password);
  // useEffect(() => {
  //   fetchUser();
  // }, [logged]);
  // //hi




  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>

      <div
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <br />
        <br />
        <br />
        &nbsp; &nbsp; &nbsp;
        <div align="center">
          <BackgroundLetterAvatars
            n={state.user.FirstName + " " + state.user.LastName}
          />
        </div>
        &nbsp; &nbsp; &nbsp;
        <Divider />
        <List>
          <Button
            onClick={() => {
              navigate("/ProfilePage");
            }}
          >
            {" "}
            <InboxIcon /> My Details
          </Button>
          <br />
          <br />

          <Button onClick={() => {}}>
            {" "}
            <MailIcon /> My Bookings
          </Button>
        </List>
        <Divider />
      </div>

      <Box
        component="main"
        sx={{
          flexGuser: 1,
          bgcolor: "background.default",
          p: 3,
          width: "1025px",
        }}
      >
        <Toolbar />
        <CollapsibleTable />
      </Box>
    </Box>
  );
}

{
  /* <DisplayInfo user={user}/> */
}
