import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/globals.css';

import { NeoApp } from './NeoApp';
import { SpeedInsights } from '@vercel/speed-insights/next';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <NeoApp />
      <SpeedInsights />
    </main>
  </StrictMode>,
);
