import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetail from "../pages/ItemDetail";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/multi-category-catalog",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:categoryName",
        element: <Home />,
      },
      {
        path: "item/:itemname",
        element: <ItemDetail />,
      },
    ],
  },
  {
    basename: "/multi-category-catalog",
  },
]);
