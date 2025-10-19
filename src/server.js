import express from "express";
import cors from "cors";
import teamRoutes from "./routes/teams.js";
import playerRoutes from "./routes/players.js";

const app = express();

app.use(cors());
app.use(express.json());

// Ruta base para verificar conexión
app.get("/", (req, res) => {
  res.send("🌍 Bienvenido al API del Álbum Panini 2026");
});

// Montar las rutas
app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);



app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en el puerto 3000");
});


