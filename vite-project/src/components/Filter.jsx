import React from "react";
import { useVehicle } from "../context/VehicleContext";

const Filter = () => {
  const { statusFilter, setStatusFilter } = useVehicle();
  return (
    <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="online">Online</option>
      <option value="offline">Offline</option>
    </select>
  );
};

export default Filter;
