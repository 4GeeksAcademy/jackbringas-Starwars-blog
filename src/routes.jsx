// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Singleperson } from "./pages/Singleperson";
import { Singleplanet } from "./pages/Singleplanet";
import { Singlevehicle } from "./pages/Singlevehicle"; 

export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

          {/* Rutas hijas dentro de Layout */}
          <Route path="/" element={<Home />} />
          <Route path="/single/:theId" element={<Single />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/singleperson/:uid" element={<Singleperson />} />
          <Route path="/singleplanet/:uid" element={<Singleplanet />} />
          <Route path="/singlevehicle/:uid" element={<Singlevehicle />} />

      </Route>
  )
);
