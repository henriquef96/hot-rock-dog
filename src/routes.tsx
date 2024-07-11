import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import ErrorPage from "./pages/error/error-page";

import { Combos } from './pages/cardapio/combos';
import { HotDog } from './pages/cardapio/hot_dogs';
import { Hamburgers } from './pages/cardapio/hamburgers';
import { Pasteis } from './pages/cardapio/pasteis';
import { Porcoes } from './pages/cardapio/porcoes';
import { Bebidas } from './pages/cardapio/bebidas';

const router = createBrowserRouter([
    {
        path: "/hot-rock-dog/",
        element: <App />,
        children: [
            {
                path: "combos",
                element: <Combos />,
            },
            {
                path: "hot_dog",
                element: <HotDog />,
            },
            {
                path: "hamburgers",
                element: <Hamburgers />,
            },
            {
                path: "pasteis",
                element: <Pasteis />,
            },
            {
                path: "porcoes",
                element: <Porcoes />,
            },
            {
                path: "bebidas",
                element: <Bebidas />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

export { router }