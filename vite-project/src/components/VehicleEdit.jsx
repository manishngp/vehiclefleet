import React, { useState } from "react";
import { useVehicle } from "../context/VehicleContext";

const VehicleEdit = ({ vehicle }) => {
  const { editVehicle } = useVehicle();
  const [vehicleName, setVehicleName] = useState(vehicle.vehicleName);
  const [status, setStatus] = useState(vehicle.status);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await editVehicle(vehicle.id, { vehicleName, status });
    setLoading(false);
    alert("Vehicle updated!");
  };

  return (
    <div style={{ marginTop: "10px", padding: "10px", border: "1px dashed #999" }}>
      <h4>Edit Vehicle</h4>
      <div>
        <label>Name: </label>
        <input value={vehicleName} onChange={e => setVehicleName(e.target.value)} />
      </div>
      <div>
        <label>Status: </label>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <button onClick={handleSave} disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default VehicleEdit;
