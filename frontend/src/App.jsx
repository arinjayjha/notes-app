import React, { useEffect, useState, useCallback } from 'react';
import { api } from './api';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const fetchNotes = useCallback(async () => {
    try {
      setLoading(true);
      setErr('');
      const { data } = await api.get('/notes');
      setNotes(data);
    } catch (e) {
      setErr('Failed to load notes.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const handleAdded = async (title, content) => {
    try {
      setErr('');
      await api.post('/notes', { title, content });
      await fetchNotes();          
    } catch (e) {
      setErr(e?.response?.data?.error || 'Failed to add note.');
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: '2rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Notes App</h1>
      <AddNote onAdd={handleAdded} />
      <hr style={{ margin: '1.5rem 0' }} />
      {loading ? <p>Loading…</p> : <NotesList notes={notes} />}
      {err && <p style={{ color: 'crimson' }}>{err}</p>}
    </div>
  );
}
