const express = require("express");
const Papa = require("papaparse");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

// Rota para ler o arquivo CSV
app.get("/data", (req, res) => {
    const csvFilePath = path.join(__dirname, "data", "filtered_countries.csv"); // Ajuste o nome do arquivo
    const csvContent = fs.readFileSync(csvFilePath, "utf8");

    // Parse o CSV usando papaparse
    const parsedData = Papa.parse(csvContent, {
        header: true, // Para retornar objetos com os nomes das colunas
        skipEmptyLines: true,
    });

    res.json(parsedData.data); // Retorna os dados como JSON
});


// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
