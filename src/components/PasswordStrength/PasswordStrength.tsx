import React, { useState } from 'react';
import './styles.scss';

const PasswordStrength: React.FC = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
    setStrength(calculateStrength(password));
  };

  const calculateStrength = (password: string) => {
    let score = 0;
    if (password.length < 8) {
      return score;
    }
    if (/[a-z]/.test(password)) {
      score++;
    }
    if (/[A-Z]/.test(password)) {
      score++;
    }
    if (/\d/.test(password)) {
      score++;
    }
    if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      score++;
    }
    return score;
  };

  return (
    <div className="password-strength">
      <input type="password" placeholder="Enter password" value={password} onChange={handleChange} />
      <div className={`strength ${strength > 0 ? 'active' : ''} ${strength >= 1 ? 'weak' : ''}`}>
        <span></span>
      </div>
      <div className={`strength ${strength > 1 ? 'active' : ''} ${strength >= 2 ? 'medium' : ''}`}>
        <span></span>
      </div>
      <div className={`strength ${strength > 2 ? 'active' : ''} ${strength === 4 ? 'strong' : ''}`}>
        <span></span>
      </div>
    </div>
  );
};

export default PasswordStrength;

//sdsad
