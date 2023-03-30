import React from 'react';
import PasswordStrength from './components/PasswordStrength/PasswordStrength';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="password-container">
        <PasswordStrength />
      </div>
    </div>
  );
};

export default App;