import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// ✅ Obtener todos los equipos
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM teams ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error al obtener equipos:", error);
    res.status(500).json({ error: "Error al obtener equipos" });
  }
});


// Obtener un solo equipo por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM teams WHERE id = $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Equipo no encontrado" });
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener el equipo:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});


export default router;


