import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationPanel from "./shared/drawer/AppDrawer";
import HodRouter from "./hod/routes/HodRouter";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/AppTheme";
import { ThemeProvider } from "@mui/material";
import FacultyRouter from "./faculty/routes/FacultyRouter";

const CLOSED_DRAWER_WIDTH = 96;

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      {/* <NavigationPanel /> */}
        <div
          style={{
            boxSizing: "border-box",
            padding: 0,
            // margin: "auto",
            width: "100%",
            position: "relative",
            // paddingLeft: CLOSED_DRAWER_WIDTH + 25,
            // paddingRight:"2rem",
            background: "#FFF",
            height: "100vh",
            overflow: "hidden",
          }}
        >
           <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: CLOSED_DRAWER_WIDTH,
              background: "#050418",
              height: "100vh",
            }}
          >
            .
          </div> 
          {/* <AppDrawer
            isDrawerOpen={isDrawerOpen}
            onDrawerToggle={handleDrawerToggle}
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
            contents={[]}
          /> */}

   

          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "auto",
              paddingLeft: CLOSED_DRAWER_WIDTH + 25,
              paddingRight: "2rem",
            }}
          >
            <FacultyRouter />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
