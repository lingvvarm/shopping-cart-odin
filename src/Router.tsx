import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ItemPage from "./components/ItemPage/ItemPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
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