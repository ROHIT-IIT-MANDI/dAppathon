const API_BASE_URL = "http://localhost:5000"; // Backend URL

const aptosService = {
  getTableData: async () => {
    const response = await fetch(`${API_BASE_URL}/api/table-data`);
    if (!response.ok) {
      throw new Error("Failed to fetch table data");
    }
    const data = await response.json();
    return data;
  },
};

export default aptosService;
