import "./App.css";
import Add from "./pages/Add";
import Books from "./pages/Books";
// import Update from "./pages/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Add" element={<Add />} />
          {/* <Route path="/Update" element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
