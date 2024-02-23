import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";
import ErrorPage from "./components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "shop",
      element: <Shop />
    },
    {
      path: "cart",
      element: <Cart />
    },
    {
      path: "item/:itemId",
      element: <ItemPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;