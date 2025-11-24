import React, { memo } from "react";
import VehicleEdit from "./VehicleEdit";

const VehicleItem = ({ vehicle }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <p><strong>Name:</strong> {vehicle.vehicleName}</p>
      <p><strong>Status:</strong> {vehicle.status}</p>
      <p><strong>Last Seen:</strong> {vehicle.lastSeen}</p>
      <VehicleEdit vehicle={vehicle} />
    </div>
  );
};

export default memo(VehicleItem);
