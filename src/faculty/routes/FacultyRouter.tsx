import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { PrivateRoute } from "./PrivateRoute";

export default function FacultyRouter() {
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
