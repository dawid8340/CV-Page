import React, { useState } from 'react';
import Navbar from './Navbar';
import './LoginForm.css';
import './Navbar.css';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Tutaj możesz dodać logikę logowania, np. wysłanie żądania do serwera
    onLogin(username, password);
  };
  return (
    <div className="LoginForm">
    <Navbar /> {/* Dodaj panel nawigacyjny */}
    <main>
    <div className="Logowanie">
      <h2>Logowanie</h2>
      <input
        id='przycisk'
        type="text"
        placeholder="Nazwa użytkownika"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id='przycisk'
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button id="przycisk" onClick={handleLogin}>Zaloguj</button>
    </div>
      </main>
    </div>
  );
}
export default LoginForm;



