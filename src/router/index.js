import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import React from "react";
import EmployeeList from "../pages/employeeList";
import Error from "../pages/error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/employee-list",
        element: <EmployeeList />,
    },
    {
        path: "*",
        element: <Error />,
    }
]);

export default router
