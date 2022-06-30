import React from "react";

function Dashboard({ page }) {
  return (
    <div className="container">
    <h3>{page?.text}</h3>
    </div>
  );
}

export default Dashboard;
