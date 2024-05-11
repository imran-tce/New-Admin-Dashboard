import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home/Home";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
