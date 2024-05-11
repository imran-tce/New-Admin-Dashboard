import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppDrawer } from "./shared/drawer/AppDrawer";

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
    <div
      style={{
        boxSizing: "border-box",
        margin: "auto",
        width: "1512px",
        border: "2px solid red",
        paddingLeft: "96px",
      }}
    >
      {/* <AppDrawer
        isDrawerOpen={isDrawerOpen}
        onDrawerToggle={handleDrawerToggle}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        contents={[]}
      /> */}

      <div>sqsqqs</div>
    </div>
  );
}

export default App;
