import { useState, useEffect } from 'react';
import './Header.css';

/**
 * Componente Header del App Shell
 * Muestra el título de la aplicación y el estado de conexión
 */
function Header() {
  // Estado para controlar si hay conexión a internet
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Escuchar eventos de conexión/desconexión
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Agregar listeners para detectar cambios de conexión
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Limpiar listeners al desmontar el componente
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Mi PWA - Productos</h1>

        {/* Indicador visual del estado de conexión */}
        <div className={`connection-status ${isOnline ? 'online' : 'offline'}`}>
          <span className="status-indicator"></span>
          <span className="status-text">{isOnline ? 'En línea' : 'Sin conexión'}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
