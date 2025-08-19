import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorMessage from './components/ErrorMessage'
import { UserProvider } from './context/UserContext'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={ErrorMessage}>
    <UserProvider>
      <App />
    </UserProvider>
  </ErrorBoundary>
)
