import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact";
import Catigori from "./pages/Catigori";
import Contacts from "./pages/Contacts";
import Res from "./pages/Res";
import Like from "./pages/Like";
import Card from "./pages/Card";
import Review from "./pages/Review"
import Detalis from "./pages/Detalis";
import Peony from "./pages/Peony";
import Tulip from "./pages/Tulip";
import Violet from "./pages/Violet";
import Strawberries from "./pages/Strawberries";
import Rose from "./pages/Rose";
import Chamomlie from "./pages/Chamomlie";
import Lily from "./pages/Lily";
import ProductsPage from "./admin/pages/ProductsPage";


const myRouter = createBrowserRouter([
    {
        path: "/admin/products",
        element: <ProductsPage />
    },
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
            {
                path: "res",
                element: <Res />
            },
            {
                path: "card",
                element: <Card />
            },
            {
                path: "like",
                element: <Like />
            },

            {
                path: "review",
                element: <Review />
            },
            {
                path: "detalis",
                element: <Detalis />
            },
            {
                path: "peony",
                element: <Peony />
            },
            {
                path: "rose",
                element: <Rose />
            },

            {
                path: "strawberries",
                element: <Strawberries />
            },

            {
                path: "tulip",
                element: <Tulip />
            },

            {
                path: "violet",
                element: <Violet />
            },
            {
                path: "chamomlie",
                element: <Chamomlie />
            },
              {
                path: "lily",
                element: <Lily/>
            },









        ]

    }
])

export default myRouter