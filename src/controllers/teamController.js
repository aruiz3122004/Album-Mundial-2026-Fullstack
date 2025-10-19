import { pool } from '../config/db.js';

export const getTeams = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM teams');
    res.json(result.rows);
  } catch (error) {
    console.error('❌ Error al obtener los equipos:', error.message);
    res.status(500).json({ error: 'Error en el servidor al obtener los equipos' });
  }
};

export const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM teams WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Equipo no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('❌ Error al obtener el equipo:', error.message);
    res.status(500).json({ error: 'Error en el servidor al obtener el equipo' });
  }
};

