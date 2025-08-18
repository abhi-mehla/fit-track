import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import LogActivity from "./Components/LogActivity";
import Progress from "./Components/Progress";
import GoalSettings from "./Components/GoalSettings";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login or Authentication Page */}
        <Route path="/" element={<AuthPage />} />

        {/* All other pages inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="log" element={<LogActivity />} />
          <Route path="progress" element={<Progress />} />
          <Route path="goals" element={<GoalSettings />} />  {/* lowercase 'goals' */}
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
