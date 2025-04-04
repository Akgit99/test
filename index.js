import express from 'express';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { registerRoutes } from './routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Check if dist/ folder exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('Error: dist/ folder not found. Please run "npm run build" first.');
  process.exit(1);
}

app.use(express.static(distPath));

// MongoDB connection
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl);
let db;

async function connectToMongoDB(retries = 5, delay = 5000) {
  for (let i = 0; i < retries; i++) {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      return;
    } catch (error) {
      console.error(`MongoDB connection attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  throw new Error('Failed to connect to MongoDB after multiple attempts');
}

async function startServer() {
  try {
    await connectToMongoDB();
    const dbName = process.env.DB_NAME || 'science_circus';
    db = client.db(dbName);

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
  console.log('Received SIGTERM. Closing MongoDB connection...');
  await client.close();
  console.log('MongoDB connection closed. Exiting...');
  process.exit(0);
});