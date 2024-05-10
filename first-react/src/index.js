import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./router.css";
import Root, {loader as rootLoader} from "./routes/root.jsx";
import ErrorPage from "./error-page.js";
import Contact from "./routes/contacts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    loader:rootLoader,
    children:[
      {
        path:"/contact/:contactId",
        element:<Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);