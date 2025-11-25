import React from "react";
import { useVehicle } from "../context/VehicleContext";
import Pagination from "./Pagination";

import { exportCSV } from "../utils/csvExporter";

import { Car } from "lucide-react";
import "../App.css"; 


import { Circle } from "lucide-react"; // Lucide icon


const VehicleList = ({ setSelectedVehicle }) => {
  const { vehicles, loading, totalVehicles, limit, page } = useVehicle();

  if (loading) return  <div className="loading">
      <Car className="car-icon" size={32} />
      <p>Loading vehicles...</p>
    </div>


  if (!vehicles.length) return <div className="no-vehicles">
      <Car size={32} className="no-vehicles-icon" />
      <p>No vehicles found!</p>
    </div>

  return (
    <div className="vehicle-table-container">
      <button className="export-btn" onClick={() => exportCSV(vehicles)}>
        Export CSV
      </button>

      <div className="table-wrapper">
        <table className="vehicle-table">
          <thead>
            <tr>
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
              >
                <td>{vehicle.id}</td>
                <td>{vehicle.vehicleName}</td>
                <td>{vehicle.model}</td>
                <td className="status-cell">
                  <Circle
                    size={16}
                    color={vehicle.status === "online" ? "#4CAF50" : "#d63447"}
                    style={{ marginRight: 6 }}
                  />
                  {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                </td>
                <td>{vehicle.lastSeen}</td>
                <td>{vehicle.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default VehicleList;
