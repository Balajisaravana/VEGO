import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
// import EllipseLayout from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import  About  from "./pages/About";


export const createRouter = () => {
  return  createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/about',
            element: <About/>
        }
    ])
}