import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the dist directory
const distPath = resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Handle React Router - serve index.html for all routes
app.get('*', (req, res, next) => {
  try {
    const indexPath = resolve(distPath, 'index.html');
    if (existsSync(indexPath)) {
      res.sendFile(indexPath, (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).send('Error loading page');
        }
      });
    } else {
      console.error('Index file not found at:', indexPath);
      res.status(404).send('Build files not found. Please run "npm run build" first.');
    }
  } catch (error) {
    console.error('Error in route handler:', error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Serving files from: ${distPath}`);
  console.log(`Index file exists: ${existsSync(resolve(distPath, 'index.html'))}`);
});

