const express = require("express");
const cors = require("cors");
const aptos = require("aptos");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Initialize Aptos client
const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const aptosClient = new aptos.AptosClient(NODE_URL);

// Route to get table data
app.get("/api/table-data", async (req, res) => {
  try {
    const tableHandle = "your_table_handle"; // The handle for your table in Aptos
    const keyType = "0x1::Type"; // Define the key type for your table
    const valueType = "0x1::Type"; // Define the value type for your table

    const data = await aptosClient.getTableItem(tableHandle, {
      key_type: keyType,
      value_type: valueType,
      key: "your_key_here", // Example key for the item you want to retrieve
    });

    res.json(data);
  } catch (error) {
    console.error("Error fetching data from Aptos:", error);
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
