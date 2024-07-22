import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Button from "./components/Button";
import Title from "./components/Title";
import Home from "./pages/Home";
import Characters from "./pages/Characters";

import SubTitle from "./components/SubTitle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/characters"> Characters </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
