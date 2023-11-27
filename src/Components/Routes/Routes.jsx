import {  createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Main/Home";
import FormFill from "../Main/FormFill";
import Login from "../Main/Login";
import Applicants from "../Main/Applicants";
import Law from "../Main/Law";
import About from "../Main/About";
import Dashboard from "../Main/Dashboard";
import ViewDetails from "../Main/ViewDetails";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:'formfill',
        element: <FormFill></FormFill>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path: 'applicant',
        element: <Applicants></Applicants>,
        

      },
      {
        path: 'law',
        element:<Law></Law>
      },
      {
        path:'about',
        element:<About></About>
      },
     {
       path: 'viewdetail/:id',
       element:<ViewDetails></ViewDetails>  ,
       loader:({params})=> fetch(`https://brta-server.vercel.app/detail/${params.id}`)
     },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    
    ]

  }
])

export default router;