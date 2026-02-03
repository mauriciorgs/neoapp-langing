import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/globals.css';

import { NeoApp } from './NeoApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <NeoApp />
    </main>
  </StrictMode>,
);
