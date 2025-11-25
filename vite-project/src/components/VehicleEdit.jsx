import React, { useState } from "react";
import { useVehicle } from "../context/VehicleContext";

const VehicleEdit = ({ vehicle, onCancel }) => {
  const { editVehicle } = useVehicle();
  const [vehicleName, setVehicleName] = useState(vehicle.vehicleName);
  const [status, setStatus] = useState(vehicle.status);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await editVehicle(vehicle.id, { vehicleName, status });
    setLoading(false);
    alert("Vehicle updated!");
    onCancel(); 
  };

  return (
    <div style={{ marginTop: "10px", padding: "10px", border: "1px dashed #999", borderRadius: "12px" }}>
      <h4>Edit Vehicle</h4>

      <div style={{ marginBottom: "10px" }}>
        <label>Name: </label>
        <input value={vehicleName} onChange={e => setVehicleName(e.target.value)} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Status: </label>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <button 
          onClick={handleSave} 
          disabled={loading}
          className="edit-btn"
        >
          {loading ? "Saving..." : "Save"}
        </button>

    
      </div>
    </div>
  );
};

export default VehicleEdit;
