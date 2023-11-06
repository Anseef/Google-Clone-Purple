import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ResultContextProvider } from './components/ResultContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ResultContextProvider>
);