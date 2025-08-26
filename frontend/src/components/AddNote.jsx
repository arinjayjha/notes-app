import React, { useState } from 'react';

export default function AddNote({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    await onAdd(title.trim(), content.trim());
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: '0.5rem', maxWidth: 480 }}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        rows={4}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
