import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { getVehicles, updateVehicle } from "../api/vehicleApi";

const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [statusFilter, setStatusFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  const loadVehicles = useCallback(async () => {
    setLoading(true);
    const data = await getVehicles();
    const arr = Object.entries(data || {}).map(([id, item]) => ({ id, ...item }));
    setVehicles(arr);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadVehicles();
  }, [loadVehicles]);

  const editVehicle = useCallback(
    async (id, payload) => {
      setVehicles(prev => prev.map(v => (v.id === id ? { ...v, ...payload } : v)));
      try {
        await updateVehicle(id, payload);
      } catch (err) {
        console.error("Failed to update vehicle:", err);
        await loadVehicles();
      }
    },
    [loadVehicles]
  );

  const processedVehicles = useMemo(() => {
    let temp = [...vehicles];
    if (statusFilter !== "all") temp = temp.filter(v => v.status === statusFilter);
    if (searchText) temp = temp.filter(v => v.vehicleName.toLowerCase().includes(searchText.toLowerCase()));
    if (sortBy === "vehicleName") temp.sort((a,b)=> a.vehicleName.localeCompare(b.vehicleName));
    if (sortBy === "lastSeen") temp.sort((a,b)=> new Date(b.lastSeen)-new Date(a.lastSeen));
    return temp;
  }, [vehicles, statusFilter, searchText, sortBy]);

  const paginatedVehicles = useMemo(() => {
    const start = (page - 1) * limit;
    return processedVehicles.slice(start, start + limit);
  }, [processedVehicles, page, limit]);

  return (
    <VehicleContext.Provider value={{
      vehicles: paginatedVehicles,
      totalVehicles: processedVehicles.length,
      loading,
      page,
      setPage,
      limit,
      statusFilter,
      setStatusFilter,
      searchText,
      setSearchText,
      sortBy,
      setSortBy,
      editVehicle,
      loadVehicles
    }}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
