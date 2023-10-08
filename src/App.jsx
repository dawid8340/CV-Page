import React, { useState } from 'react';
import Skills from './Skills';
import Navbar from './Navbar';
import './styles.css';
import './Navbar.css';
import LoginForm from './LoginForm';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <div className="App">
      <Navbar /> {/* Dodaj panel nawigacyjny */}
      <main>
      <Navbar onLoginClick={() => setIsLogin(true)} />
      {isLogin ? <LoginForm /> : <Skills />}
      {}
        
      </main>
      <footer>
        <p>&copy; 2023 Twoja Firma</p>
      </footer>
    </div>
  );
}
export default App;
