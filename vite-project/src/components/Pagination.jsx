import React from "react";
import { useVehicle } from "../context/VehicleContext";

const Pagination = () => {
  const { page, setPage, totalVehicles, limit } = useVehicle();
  const totalPages = Math.ceil(totalVehicles / limit);

  return (
   <div className="pagination">
  <button 
    onClick={() => setPage(p => Math.max(p-1, 1))} 
    disabled={page === 1}
    className="page-btn"
  >
    Prev
  </button>

  <span className="page-info">Page {page} of {totalPages}</span>

  <button 
    onClick={() => setPage(p => Math.min(p+1, totalPages))} 
    disabled={page === totalPages}
    className="page-btn"
  >
    Next
  </button>
</div>

  );
};

export default Pagination;
