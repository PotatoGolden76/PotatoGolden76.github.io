import Homepage from "./pages/Homepage/Homepage.tsx";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Contact from "./pages/Contact/Contact.tsx";
import Projects from "./pages/Projects/Projects.tsx";

// TODO: Handle route errors/404s
const router = createHashRouter([
    {
        path: "/",
        element: <Homepage/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/projects",
        element: <Projects/>
    }
])

function RoutedApp() {

    return (
        <RouterProvider router={router}/>
    )
}

export default RoutedApp
