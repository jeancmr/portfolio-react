import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Portfolio } from './Portfolio.tsx';
import { Layout } from './layout/Layout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <Portfolio />
    </Layout>
  </StrictMode>
);
