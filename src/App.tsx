import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import { AppProvider } from './contexts/AppContext';
import ToastNotifications from './components/ToastNotifications';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  try {
    return (
      <AppProvider>
        <Router>
          <div className="min-h-screen bg-slate-950">
            <ToastNotifications />
            <Routes>
              <Route 
                path="/login" 
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <LoginScreen onLogin={() => setIsAuthenticated(true)} />
                  )
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  isAuthenticated ? (
                    <Dashboard />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                } 
              />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        </Router>
      </AppProvider>
    );
  } catch (error) {
    console.error('App render error:', error);
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-white mb-4">Loading Error</h1>
          <p className="text-slate-400 mb-4">Please refresh the page</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }
}

export default App;
