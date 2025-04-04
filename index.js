import express from 'express';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import path from 'path';
import { registerRoutes } from './routes.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

// MongoDB connection
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl);
let db;

async function startServer() {
  try {
    await client.connect();
    db = client.db('science_circus');
    console.log('Connected to MongoDB');

    // Register API routes
    registerRoutes(app, db);

    // Serve React app for all other routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });

    const port = process.env.PORT || 3000;
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1);
  }
}

startServer();

// Handle graceful shutdown
process.on('SIGTERM', async () => {
  await client.close();
  process.exit(0);
});