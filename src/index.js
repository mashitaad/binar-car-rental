import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "../src/pages/LandingPage"
import Search from "../src/pages/SearchPage"
import Content from "../src/pages/ContentPage"
import SearchResult from "../src/pages/SearchResult"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/sresult",
    element: <SearchResult />,
  },
  {
    path: "/content",
    element: <Content />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)