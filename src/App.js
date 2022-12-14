import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DisplayPage from "./Pages/DisplayPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useState } from 'react';
import DonePage from "./Pages/DonePage";
import { UserContext } from "./UserContext";

function App() {
  const [toDo, setToDo] = useState([]);
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <UserContext.Provider value={{ toDo, setToDo }}>
            <Routes>
              <Route path="/" element={<DisplayPage />} />
              <Route path="/done/" element={<DonePage />} />
            </Routes>
          </UserContext.Provider>
        </Suspense>
      </Router>
    </div>
  );
}
export default App;
