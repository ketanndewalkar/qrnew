import React from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero2 from "./pages/Hero2";
import Hero1 from "./pages/Hero1";
import HeroNew from "./pages/HeroNew";
import Hero3 from "./pages/Hero3";
import Demo from "./pages/Demo";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AppLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero1 />
            <HeroNew/>
            <Hero2 />
            <Hero3/>
            {/* <Demo/> */}
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <About />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <Contact />
          </>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
