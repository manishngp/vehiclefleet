import React from "react";
import { useVehicle } from "../context/VehicleContext";
import Pagination from "./Pagination";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";
import { exportCSV } from "../utils/csvExporter";

const VehicleList = ({ setSelectedVehicle }) => {
  const { vehicles, loading, totalVehicles, limit, page } = useVehicle();

  if (loading) return <p>Loading vehicles...</p>;
  if (!vehicles.length){ <p>No vehicles found!</p>;}

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Search />
        <Filter />
        <Sort />
        <button onClick={() => exportCSV(vehicles)}>Export CSV</button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #000" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Model</th>
            <th>Status</th>
            <th>Last Seen</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr 
              key={vehicle.id} 
              onClick={() => setSelectedVehicle && setSelectedVehicle(vehicle)}
              style={{ cursor: "pointer", borderBottom: "1px solid #ccc" }}
            >
              <td>{vehicle.id}</td>
              <td>{vehicle.vehicleName}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.status}</td>
              <td>{vehicle.lastSeen}</td>
              <td>{vehicle.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default VehicleList;
