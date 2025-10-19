import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// ✅ 1. Obtener todos los jugadores
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM players ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener jugadores:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// ✅ 2. Obtener un jugador por su ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM players WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Jugador no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener el jugador:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// ✅ 3. Obtener todos los jugadores de un equipo (por team_id)
router.get("/team/:team_id", async (req, res) => {
  const { team_id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM players WHERE team_id = $1", [team_id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No hay jugadores en este equipo" });
    }
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener jugadores del equipo:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;
