import React from 'react';

export default function NotesList({ notes }) {
  if (!notes || notes.length === 0) {
    return <p>No notes yet.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
      {notes.map(n => (
        <li key={n.id} style={{ padding: '0.75rem 1rem', border: '1px solid #ddd', borderRadius: 8 }}>
          <div style={{ fontWeight: 600 }}>{n.title}</div>
          <div style={{ color: '#555' }}>{n.content}</div>
        </li>
      ))}
    </ul>
  );
}
