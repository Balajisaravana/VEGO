import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";


export const createRouter = () => {
  return  createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        }
    ])
}