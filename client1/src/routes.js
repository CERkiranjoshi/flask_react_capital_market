import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import Error from "./common/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "products",
          element: <Products />
        },
      ],
      errorElement : <Error/>
    }
  ]);


export default router;