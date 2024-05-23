import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { PrivateRoute } from "./PrivateRoute";
import MentoringProjects from "../pages/projects/MentoringProjects";
import ProfilePage from "../../hod/pages/faculties/profile/ProfilePage";
import ProjetcMentoringDetails from "../pages/projects/projectMentoringDetails/ProjetcMentoringDetails";
import CourseOutcomeAttainments from "../pages/co-attainments/CourseOutcomeAttainments";

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
      <Route
        path="/projects"
        element={
          <PrivateRoute>
            <MentoringProjects />
          </PrivateRoute>
        }
      />

      <Route
        path="/students/:facultyId"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/projects/:projectId"
        element={
          <PrivateRoute>
            <ProjetcMentoringDetails />
          </PrivateRoute>
        }
      />


<Route
        path="/course-outcomes"
        element={
          <PrivateRoute>
            <CourseOutcomeAttainments />
          </PrivateRoute>
        }
      />


    </Routes>
  );
}
