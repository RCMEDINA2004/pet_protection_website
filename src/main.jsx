import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Performance optimization: prefetch route chunks
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    const links = document.querySelectorAll('link[rel="prefetch"]');
    links.forEach(link => {
      const preload = document.createElement('link');
      preload.rel = 'preload';
      preload.as = 'script';
      preload.href = link.href;
      document.head.appendChild(preload);
    });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
