import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

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
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;