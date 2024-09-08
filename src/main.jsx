import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/reset.css";
import HomePage from "./pages/home";
import ReviewsPage from "./pages/reviews";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import DetailGame from "./pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/reviews",
    element: <ReviewsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/detail-game/:id",
    element: <DetailGame />,
  },
  {
    path: "/detail",
    element: <DetailGame />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
