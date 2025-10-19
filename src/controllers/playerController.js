import { pool } from '../config/db.js';

export const getPlayers = async (req, res) => {
  const result = await pool.query('SELECT * FROM players');
  res.json(result.rows);
};

export const getPlayersByTeam = async (req, res) => {
  const { teamId } = req.params;
  const result = await pool.query('SELECT * FROM players WHERE team_id = $1', [teamId]);
  res.json(result.rows);
};

export const getPlayerById = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM players WHERE id = $1', [id]);
  res.json(result.rows[0]);
};

