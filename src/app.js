import express from 'express';
import cors from 'cors';
import teamsRoutes from './routes/teams.js';
import playersRoutes from './routes/players.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/teams', teamsRoutes);
app.use('/players', playersRoutes);

export default app;

