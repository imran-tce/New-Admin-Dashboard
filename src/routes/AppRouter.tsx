import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home/Home";
import Faculties from "../pages/faculties/Faculties";
import FacultyProfilePage from "../pages/faculties/profile/ProfilePage";

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
      <Route
        path="/faculties"
        element={
          <PrivateRoute>
            <Faculties />
          </PrivateRoute>
        }
      />
      <Route
        path="/faculties/:facultyId"
        element={
          <PrivateRoute>
            <FacultyProfilePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
