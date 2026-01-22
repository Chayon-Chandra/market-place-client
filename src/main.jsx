import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LayOut from "./LayOut/LayOut.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home/Home.jsx";
import AllJobs from "./Pages/AllJobs/AllJobs.jsx";
import AddJob from "./Pages/AddJob/AddJob.jsx";
import MyAcceptedTasks from "./Pages/MyAcceptedTasks/MyAcceptedTasks.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-Jobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/add-a-job",
        element: (
          <PrivetRoutes>
            <AddJob></AddJob>
          </PrivetRoutes>
        ),
      },
      {
        path: "/my-accepted-tasks",
        element: (
          <PrivetRoutes>
            <MyAcceptedTasks></MyAcceptedTasks>
          </PrivetRoutes>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/job-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://market-place-api-server.vercel.app/products/${params.id}`,
          ),
        element: (
          <PrivetRoutes>
            <JobDetails></JobDetails>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
