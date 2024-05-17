import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppDrawer } from "./shared/drawer/AppDrawer";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/AppTheme";
import { ThemeProvider } from "@mui/material";

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
        <div
          style={{
            boxSizing: "border-box",
            padding: 0,
            // margin: "auto",
            width: "100%",
            position: "relative",
            paddingLeft: CLOSED_DRAWER_WIDTH + 25,
            paddingRight:"2rem"
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

          <div style={{ width: "100%" }}>
            <AppRouter />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
