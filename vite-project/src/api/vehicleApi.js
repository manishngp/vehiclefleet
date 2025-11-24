import axios from "axios";

const BASE_URL = "https://vehicle-fleet-management-647d7-default-rtdb.firebaseio.com/";

// GET all vehicles
export const getVehicles = async () => {
  const res = await axios.get(`${BASE_URL}.json`);
  return res.data || {};
};

// GET single vehicle
export const getVehicleById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}.json`);
  return res.data;
};

// UPDATE vehicle
export const updateVehicle = async (id, payload) => {
  const res = await axios.patch(`${BASE_URL}/${id}.json`, payload);
  return res.data;
};
