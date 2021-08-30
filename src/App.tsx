import React from 'react';
import { AuthProvider } from "./features/auth/contexts/auth";
import Routes from "./routes";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  );
}

export default App;
