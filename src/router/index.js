import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import React from "react";
import EmployeeList from "../pages/employeeList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/employee-list",
        element: <EmployeeList />,
    }
]);

export default router
