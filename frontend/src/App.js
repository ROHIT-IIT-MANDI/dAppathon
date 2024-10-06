import React, { useState, useEffect } from "react";
import TableView from "./components/TableView";
import aptosService from "./services/aptosService";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await aptosService.getTableData();
        setTableData(data);
      } catch (error) {
        console.error("Error fetching table data: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Aptos Smart Contract: Iterable Table</h1>
      <TableView data={tableData} />
    </div>
  );
}

export default App;
