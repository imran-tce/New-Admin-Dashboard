import { Route, Routes } from "react-router-dom";
import BatchDetails from "../pages/batches/BatchDetails/BatchDetails";
import YearWiseBatches from "../pages/batches/YearWiseBatches";
import Courses from "../pages/courses/Courses";
import CourseDetails from "../pages/courses/courseDetails/CourseDetails";
import Faculties from "../pages/faculties/Faculties";
import FacultyProfilePage from "../pages/faculties/profile/ProfilePage";
import Home from "../pages/home/Home";
import MentoringProjects from "../pages/mentors/projects/MentoringProjects";
import CourseOutcomeAttainments from "../pages/co-attainments/CourseOutcomeAttainments";
import FacultyRatings from "../pages/faculties/faculty-ratings/FacultyRatings";
import { PrivateRoute } from "./PrivateRoute";

export default function HodRouter() {
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

      <Route
        path="/batches/:batchId"
        element={
          <PrivateRoute>
            <BatchDetails />
          </PrivateRoute>
        }
      />

      <Route
        path="/courses"
        element={
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        }
      />

      <Route
        path="/courses/:courseId"
        element={
          <PrivateRoute>
            <CourseDetails />
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

      <Route
        path="/faculty-ratings"
        element={
          <PrivateRoute>
            <FacultyRatings />
          </PrivateRoute>
        }
      />

      <Route
        path="/faculty-ratings/:facultyId"
        element={
          <PrivateRoute>
            <FacultyRatings />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
