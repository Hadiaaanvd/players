import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/scroll/scroll.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
