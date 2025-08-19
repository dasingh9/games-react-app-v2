
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from './components/ErrorMessage';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={ErrorMessage}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </ErrorBoundary>
)
