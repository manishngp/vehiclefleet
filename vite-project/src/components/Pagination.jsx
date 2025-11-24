import React from "react";
import { useVehicle } from "../context/VehicleContext";

const Pagination = () => {
  const { page, setPage, totalVehicles, limit } = useVehicle();
  const totalPages = Math.ceil(totalVehicles / limit);

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={() => setPage(p => Math.max(p-1, 1))} disabled={page === 1}>Prev</button>
      <span style={{ margin: "0 10px" }}>Page {page} of {totalPages}</span>
      <button onClick={() => setPage(p => Math.min(p+1, totalPages))} disabled={page === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
