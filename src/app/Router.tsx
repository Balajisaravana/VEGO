import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
// import EllipseLayout from "./pages/About";
import Services from "./pages/Services";


export const createRouter = () => {
  return  createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/services',
            element: <Services/>
        }
    ])
}