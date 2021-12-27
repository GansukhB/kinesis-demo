import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Master from "./routes/Master";
import Viewer from "./routes/Viewer";

function App() {
  console.log(process.env);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/master/:id" element={<Master />}></Route>
        <Route path="/viewer/:id" element={<Viewer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
