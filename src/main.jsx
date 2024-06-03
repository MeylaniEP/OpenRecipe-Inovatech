import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Inggredients from "./pages/Inggredients.jsx";
import Tools from "./pages/Tools.jsx";
import Shop from "./pages/Shop.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />} path="/">
        <Route index element={<Navigate to="home" replace/>}/>
        <Route element={<Home />} path="home" />
        <Route element={<Inggredients />} path="inggredients" />
        <Route element={<Tools />} path="tools" />
        <Route element={<Shop />} path="shop" />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
