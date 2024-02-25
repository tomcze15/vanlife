import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Vans from "./pages/Vans.tsx";

import "./server"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/vans" element={ <Vans /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
