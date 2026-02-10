import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

import Home from "./pages/Home";
import About from "./components/about";
import Training from "./components/training";
import BimProjectSupport from "./components/bimprojectsupport";
import ResourceDeployment from "./components/resourcedeployment";

export default function App() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/bimprojectsupport" element={<BimProjectSupport />} />
        <Route path="/resourcedeployment" element={<ResourceDeployment />} />
      </Route>
    </Routes>
  );
}


