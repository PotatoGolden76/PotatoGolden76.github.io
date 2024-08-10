import Homepage from "./pages/Homepage/Homepage.tsx";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Contact from "./pages/Contact/Contact.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails.tsx";

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
    },
    {
        path: "/projects/:id",
        element: <ProjectDetails />
    }
])

function RoutedApp() {

    return (
        <RouterProvider router={router}/>
    )
}

export default RoutedApp
