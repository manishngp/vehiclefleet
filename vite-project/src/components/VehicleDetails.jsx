import React, { useState } from "react";
import VehicleEdit from "./VehicleEdit";

import "../App.css"; 
const VehicleDetails = ({ vehicle }) => {
  const [editing, setEditing] = useState(false);

  if (!vehicle) return   <div className="select-vehicle">
      <p>Select a vehicle to see details</p>
    </div>
  return (
    <div className="vehicle-details-card">
      <h3 className="section-title">Vehicle Details</h3>

      <div className="detail-item"><span>ID:</span> {vehicle.id}</div>
      <div className="detail-item"><span>Name:</span> {vehicle.vehicleName}</div>
      <div className="detail-item"><span>Model:</span> {vehicle.model}</div>
      <div className="detail-item status">
        <span>Status:</span> 
        <span className={vehicle.status}>{vehicle.status}</span>
      </div>
      <div className="detail-item"><span>Last Seen:</span> {vehicle.lastSeen}</div>
      <div className="detail-item"><span>Location:</span> {vehicle.location}</div>

      <h4 className="section-title">Telemetry & Activity Logs</h4>

      <div className="telemetry-section">
        <h5>Telemetry</h5>
        {vehicle?.telemetry ? (
          <ul>
            <li><strong>Speed:</strong> {vehicle.telemetry.speed} km/h</li>
            <li><strong>Battery:</strong> {vehicle.telemetry.battery}%</li>
          </ul>
        ) : (
          <p>No telemetry data available.</p>
        )}

        <h5>Activity Logs</h5>
        {vehicle?.activity?.length > 0 ? (
          <ul>
            {vehicle.activity.map((log, index) => {
              const d = new Date(log);
              const formatted = isNaN(d.getTime()) ? log : d.toLocaleString();
              return <li key={index}>{formatted}</li>;
            })}
          </ul>
        ) : (
          <p>No activity logs available.</p>
        )}
      </div>

      <button className="edit-btn" onClick={() => setEditing(prev => !prev)}>
        {editing ? "Cancel Edit" : "Edit Vehicle"}
      </button>

      {editing && <VehicleEdit vehicle={vehicle} />}
    </div>
  );
};

export default VehicleDetails;
