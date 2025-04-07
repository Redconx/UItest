import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ComplaintProcess from "./pages/ComplaintProcess";

function App() {
  return (
    <div className="ds-base">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-complaint" element={<ComplaintProcess />} />
      </Routes>
    </div>
  );
}

export default App;
