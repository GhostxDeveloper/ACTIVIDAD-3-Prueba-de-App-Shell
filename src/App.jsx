import Header from './components/Header'
import Footer from './components/Footer'
import ProductsView from './views/ProductsView'
import './App.css'

/**
 * Componente principal de la aplicación
 * Implementa la arquitectura App Shell:
 * - Header: Encabezado fijo con estado de conexión
 * - Main Content: Contenido dinámico (ProductsView)
 * - Footer: Pie de página con información
 */
function App() {
  return (
    <div className="app">
      {/* Header del App Shell */}
      <Header />

      {/* Contenido dinámico que se actualiza */}
      <main className="main-content">
        <ProductsView />
      </main>

      {/* Footer del App Shell */}
      <Footer />
    </div>
  )
}

export default App
