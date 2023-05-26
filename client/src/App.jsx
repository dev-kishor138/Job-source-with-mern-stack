import React from "react";
import Landing from "./Pages/Landing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Register from "./Pages/Register/Register";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/landing">Landing</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/landing" element={<Landing></Landing>} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
