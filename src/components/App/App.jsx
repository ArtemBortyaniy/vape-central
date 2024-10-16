//import { lazy, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

//redux

//SharedLayout
import SharedLayout from "./SharedLayout";

//routes

//components
import Home from "../../pages/Home/Home";

function App() {
  console.log("App component rendered");
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
