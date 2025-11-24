import React from "react";
import { useVehicle } from "../context/VehicleContext";

const Search = () => {
  const { searchText, setSearchText } = useVehicle();
  return (
    <input
      type="text"
      placeholder="Search by vehicle name"
      value={searchText}
      onChange={e => setSearchText(e.target.value)}
    />
  );
};

export default Search;
