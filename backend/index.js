import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import visitRoutes from './routes/visitRoutes.js';
import hotspotRoutes from './routes/hotspotRoutes.js';
import panoramaRoutes from './routes/panoramaRoutes.js';
import floorRoutes from './routes/floorRoutes.js';
import roomRoutes from './routes/roomRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT ;

app.use(express.json());

app.use((req, res, next) => {
  console.log(` ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use('/users', authRoutes);
app.use('/event', eventRoutes);
app.use('/visits', visitRoutes);
app.use(hotspotRoutes);
app.use(panoramaRoutes);
app.use(floorRoutes);
app.use(roomRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
