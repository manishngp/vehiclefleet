import React from "react";
import { useVehicle } from "../context/VehicleContext";
import "../App.css"; 

const Search = () => {
  const { searchText, setSearchText } = useVehicle();
  return (
     <input
      type="text"
      className="search-input"
      placeholder="Search by vehicle name"
      value={searchText}
      onChange={e => setSearchText(e.target.value)}
    />
  );
};

export default Search;
