import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PathfindingProvider from './context/PathfindingContext';
import TileProvider from './context/TileContext';
import SpeedProvider from './context/SpeedContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <App />
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  </React.StrictMode>
);
