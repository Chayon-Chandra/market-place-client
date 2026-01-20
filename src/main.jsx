import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LayOut from './LayOut/LayOut.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Home from './Pages/Home/Home.jsx';
import AllJobs from './Pages/AllJobs/AllJobs.jsx';
import AddJob from './Pages/AddJob/AddJob.jsx';
import MyAcceptedTasks from './Pages/MyAcceptedTasks/MyAcceptedTasks.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    errorElement:ErrorPage,
    children:[
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/all-Jobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path:"/add-a-job",
        //  loader : ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        element: <AddJob></AddJob>,
      },
      {
        path:"/my-accepted-tasks",
        element: <MyAcceptedTasks></MyAcceptedTasks>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/job-details/:id",
        loader : ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        element: <JobDetails></JobDetails>,
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
