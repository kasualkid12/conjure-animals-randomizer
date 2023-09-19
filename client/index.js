import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App'

document.addEventListener('DOMContentLoaded', () => {
  const domNode = document.getElementById('root');

  if (domNode) {
    const root = createRoot(domNode);
    root.render(<App />);
  } else {
    console.error('Dom element with ID "root" not found.');
  }
});
