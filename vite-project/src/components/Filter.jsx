import React from "react";
import { useVehicle } from "../context/VehicleContext";
import "../App.css"; 
// import { Circle } from "lucide-react";
const Filter = () => {
  const { statusFilter, setStatusFilter } = useVehicle();
  return (
  <select
  className="status-select"
  value={statusFilter}
  onChange={e => setStatusFilter(e.target.value)}
>
  <option value="all">All</option>
  <option value="online">Online</option>
  <option value="offline">Offline</option>
</select>

  );
};

export default Filter;
