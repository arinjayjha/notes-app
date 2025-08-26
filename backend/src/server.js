const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());               
app.use(express.json());       


let notes = [{ id: 1, title: 'Test', content: 'Demo' }];
let nextId = 2;


app.get('/notes', (req, res) => {
  res.json(notes);
});


app.post('/notes', (req, res) => {
  const { title, content } = req.body || {};
  if (!title || !content) {
    return res.status(400).json({ error: 'Both title and content are required.' });
  }
  const newNote = { id: nextId++, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'notes-backend' }));

app.listen(PORT, () => {
  console.log(`Notes backend running on http://localhost:${PORT}`);
});
