import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LabReportForm from "./User/LabReportForm";
import History from "./User/History";
import AdminDashboard from "./Admin/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LabReportForm />} />
        <Route path="/history/:patientId" element={<History />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
