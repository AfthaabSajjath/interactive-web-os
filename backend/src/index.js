import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Web OS API is running' });
});

// Example endpoints
app.get('/api/system/info', (req, res) => {
  res.json({
    os: 'Web OS',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/system/command', (req, res) => {
  const { command } = req.body;
  
  if (!command) {
    return res.status(400).json({ error: 'Command is required' });
  }
  
  // Process commands here
  res.json({
    command,
    output: `Executed: ${command}`,
    status: 'success'
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Web OS API running on http://localhost:${PORT}`);
});
