import React from "react";
import { useVehicle } from "../context/VehicleContext";
import "../App.css"; 
const Sort = () => {
  const { sortBy, setSortBy } = useVehicle();
  return (
   <select
  className="sort-select"
  value={sortBy}
  onChange={e => setSortBy(e.target.value)}
>
  <option value="">Sort By</option>
  <option value="vehicleName">Name</option>
  <option value="lastSeen">Last Seen</option>
</select>

  );
};

export default Sort;
