const express = require("express");
const Papa = require("papaparse");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(
    cors({
        origin: "http://localhost:4000",
    })
);

app.get("/data", (req, res) => {
    const csvFilePath = path.join(__dirname, "data", "filtered_countries.csv");
    const csvContent = fs.readFileSync(csvFilePath, "utf8");

    const parsedData = Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
    });

    res.json(parsedData.data);
});

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
