import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact";
import Catigori from "./pages/Catigori";
import Contacts from "./pages/Contacts";


const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "*",
                element: <Notfound />
            }, {
                path: "contact",
                element: <Contact />
            }, {
                path: "catigori",
                element: <Catigori />
            }, {
                path: "contacts",
                element: <Contacts />
            },


        ]

    }
])

export default myRouter