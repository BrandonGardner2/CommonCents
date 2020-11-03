import React from 'react';
import AuthProvider from './components/auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className='App'>Hello world.</div>
    </AuthProvider>
  );
}

export default App;
