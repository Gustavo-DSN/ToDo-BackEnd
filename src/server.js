require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const connectDB = require("./config/database");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
