import React, { useState } from "react";
import VehicleEdit from "./VehicleEdit";

const VehicleDetails = ({ vehicle }) => {
  const [editing, setEditing] = useState(false);

  if (!vehicle) return <p>Select a vehicle to see details</p>;

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <h3>Vehicle Details</h3>

      <p><strong>ID:</strong> {vehicle.id}</p>
      <p><strong>Name:</strong> {vehicle.vehicleName}</p>
      <p><strong>Model:</strong> {vehicle.model}</p>
      <p><strong>Status:</strong> {vehicle.status}</p>
      <p><strong>Last Seen:</strong> {vehicle.lastSeen}</p>
      <p><strong>Location:</strong> {vehicle.location}</p>

      <h4>Telemetry & Activity Logs</h4>
      {/* Replace below with real telemetry and activity */}
      <p>Telemetry data here...</p>
      <p>Activity logs here...</p>

      <button onClick={() => setEditing(prev => !prev)} style={{ marginTop: "10px" }}>
        {editing ? "Cancel Edit" : "Edit Vehicle"}
      </button>

      {editing && <VehicleEdit vehicle={vehicle} />}
    </div>
  );
};

export default VehicleDetails;
