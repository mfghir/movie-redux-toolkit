import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyle";
import MovieDetail from "./components/MovieDetail";

import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        {/* <Route path={["/game/:id", "/"]} element={<Home />} /> */}
        <Route path=":id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
