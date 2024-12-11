import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import DetailsPage from "../pages/DetailsPage";
import StatisticsPage from "../pages/StatisticsPage";
import DashboardPage from "../pages/DashboardPage";
import PortfolioPage from "../pages/PortfolioPage";

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
            {
                path: "/details/:id",
                element: <DetailsPage />,
                loader: () => fetch('./gadgetData.json'),
            },
            {
                path: "/statistics",
                element: <StatisticsPage />,  
                loader: () => fetch('./gadgetData.json'),            
            },
            {
                path: "/dashboard",
                element: <DashboardPage />,               
            },  
            {
                path: "/portfolio",
                element: <PortfolioPage />,               
            },             
        ]
    }
])

export default router;