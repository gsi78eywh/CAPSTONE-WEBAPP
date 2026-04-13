import React from "react";
import "./App.css"; // Optional: for custom styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Sitio Leader Dashboard</h1>
      <section className="dashboard-section">
        <h2>Announcements</h2>
        <ul>
          <li>Barangay meeting on April 20, 2026</li>
          <li>Clean-up drive this Saturday</li>
        </ul>
      </section>
      <section className="dashboard-section">
        <h2>Resident Statistics</h2>
        <p>Total Households: 120</p>
        <p>Pending Requests: 5</p>
      </section>
      <section className="dashboard-section">
        <h2>Pending Requests</h2>
        <ul>
          <li>Water supply issue - Block 3</li>
          <li>Street light repair - Block 1</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;