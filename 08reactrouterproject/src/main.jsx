import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import { Home, About, Contact } from "./components/index.js";
import User from "./components/User/User.jsx";
import {Github,githubInfoLoader} from "./components/Github/Github.jsx"

// one way
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />,
//             },
//             {
//                 path: "about",
//                 element: <About />,
//             },
//             {
//                 path: "contact",
//                 element: <Contact />,
//             },
//         ],
//     },
// ]);

// another way
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:id" element={<User />} />
            <Route
                loader={githubInfoLoader} 
                path="github" 
                element={<Github />} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
