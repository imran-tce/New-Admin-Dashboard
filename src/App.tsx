import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppDrawer } from "./shared/drawer/AppDrawer";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

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
      <div
        style={{
          boxSizing: "border-box",
          padding: 0,
          margin: "auto",
          width: "1512px",
          position: "relative",
          paddingLeft: CLOSED_DRAWER_WIDTH + 25,
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
    </BrowserRouter>
  );
}

export default App;
