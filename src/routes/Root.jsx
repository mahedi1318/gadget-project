import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            
        ]
    }
])

export default router;