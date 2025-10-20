import './Footer.css';

/**
 * Componente Footer del App Shell
 * Muestra información de copyright y versión de la aplicación
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Copyright dinámico con el año actual */}
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Mi PWA. Aplicación Web Progresiva
        </p>

        {/* Versión de la aplicación */}
        <div className="footer-info">
          <span className="footer-version">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
