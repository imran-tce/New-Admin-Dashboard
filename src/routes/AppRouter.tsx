import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home/Home";
import Faculties from "../pages/faculties/Faculties";
import FacultyProfilePage from "../pages/faculties/profile/ProfilePage";
import MentoringProjects from "../pages/mentors/projects/MentoringProjects";
import YearWiseBatches from "../pages/batches/YearWiseBatches";

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

      <Route
        path="/projects"
        element={
          <PrivateRoute>
            <MentoringProjects />
          </PrivateRoute>
        }
      />

      <Route
        path="/batches"
        element={
          <PrivateRoute>
            <YearWiseBatches />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
