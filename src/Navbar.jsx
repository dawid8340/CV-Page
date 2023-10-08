import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons';

function Navbar({ onLoginClick }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
  const settingsPanelRef = useRef(null);
  const userPanelRef = useRef(null);

  // Funkcje obsługujące otwieranie/zamykanie paneli
  const toggleSettingsPanel = () => {
    setIsSettingsOpen(!isSettingsOpen);
    if (isUserPanelOpen) {
      setIsUserPanelOpen(false);
    }
  };

  const toggleUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
    if (isSettingsOpen) {
      setIsSettingsOpen(false);
    }
  };

  // Obsługa zamknięcia paneli po kliknięciu poza nimi
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (isSettingsOpen && settingsPanelRef.current && !settingsPanelRef.current.contains(event.target)) ||
        (isUserPanelOpen && userPanelRef.current && !userPanelRef.current.contains(event.target))
      ) {
        setIsSettingsOpen(false);
        setIsUserPanelOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSettingsOpen, isUserPanelOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/">Strona Główna</a>
        <a href="#skills">Moje Umiejętności</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Kontakt</a>

        {/* Ikonka ustawień języka z rozwijanym panelem */}
        <div className="navbar-icon-settings" onClick={toggleSettingsPanel}>
          <FontAwesomeIcon icon={faCog} />
          {isSettingsOpen && (
            <div className="settings-panel visible">
              <p><a href="/profile">Polski</a></p>
              <p><a href="/orders">Angielski</a></p>
            </div>
          )}
        </div>

        {/* Ikonka użytkownika z rozwijanym panelem */}
        <div className="navbar-icon-user" onClick={toggleUserPanel}>
          <FontAwesomeIcon icon={faUser} />
          {isUserPanelOpen && (
            <div className="user-panel visible">
              <p><a onClick={onLoginClick}>Logowanie</a></p>
              <p><a href="/orders">Programowanie</a></p>
              <p><a href="/settings">Ustawienia</a></p>
              <p><a href="/logout">Wyloguj</a></p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
