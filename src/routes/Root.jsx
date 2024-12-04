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
                element: <Home/>,
                loader: () => fetch('./gadgetData.json'),
                children: [
                    {
                        path: "/allProduct",
                        element: <Home />
                    },
                    {
                        path: "/laptops",
                        element: <Home />
                    },
                    {
                        path: "/phones",
                        element: <Home />
                    },
                    {
                        path: "/watches",
                        element: <Home />
                    },
                    {
                        path: "/cameras",
                        element: <Home />
                    },
                    {
                        path: "/chargers",
                        element: <Home />
                    },
                ]
            },
            
        ]
    }
])

export default router;