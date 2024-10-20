//import { lazy, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

//redux

//SharedLayout
import SharedLayout from "./SharedLayout";

//routes

//components
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
