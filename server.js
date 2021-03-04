require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')

// Imposto i parametri di base di funzionamento con una fallback.
// In questo modo se anche non ho creato il file .env ho dei valori di default
const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';
const env = process.env.NODE_ENV || 'development';

const apiBaseUrl = process.env.API_BASE_URL || "localhost";
const apiPort = process.env.API_PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(__dirname));
app.use("/configurations", (request, response) => {
    response
        .status(200)
        .json({
            "API_BASE_URL": `http://${apiBaseUrl}:${apiPort}`
        })
});

app.listen(port, function () {
    console.log(`Listening at http://${host}:${port} on env ${env}`);
})