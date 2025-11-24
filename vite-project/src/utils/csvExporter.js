export const exportCSV = (vehicles) => {
  if (!vehicles.length) return;

  const headers = Object.keys(vehicles[0]).join(",");
  const rows = vehicles.map(v => Object.values(v).join(",")).join("\n");
  const csvContent = [headers, rows].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", "vehicles.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
