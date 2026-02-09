import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Training from "./components/training.jsx";
import BimProjectSupport from "./components/bimprojectsupport.jsx";
import ResourceDeployment from "./components/resourcedeployment.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/bimprojectsupport" element={<BimProjectSupport />} />
        <Route path="/resourcedeployment" element={<ResourceDeployment />} />
      </Routes>
    </Router>
  );
}


