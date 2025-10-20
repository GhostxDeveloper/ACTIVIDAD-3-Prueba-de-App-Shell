import { useState, useEffect } from 'react';
import './Views.css';

/**
 * Vista de Productos - Contenido dinámico del App Shell
 * Muestra un catálogo de productos con datos simulados
 */
function ProductsView() {
  // Estados para manejar los productos y el estado de carga
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar productos al montar el componente
  useEffect(() => {
    // Simular llamada a API con delay de 800ms
    setTimeout(() => {
      // Datos de productos simulados
      const mockProducts = [
        { id: 1, name: 'Laptop Pro', price: 1299.99, stock: 15, category: 'Electrónica' },
        { id: 2, name: 'Mouse Inalámbrico', price: 29.99, stock: 50, category: 'Accesorios' },
        { id: 3, name: 'Teclado Mecánico', price: 89.99, stock: 30, category: 'Accesorios' },
        { id: 4, name: 'Monitor 4K', price: 449.99, stock: 12, category: 'Electrónica' },
        { id: 5, name: 'Webcam HD', price: 79.99, stock: 25, category: 'Accesorios' },
        { id: 6, name: 'Auriculares Bluetooth', price: 159.99, stock: 40, category: 'Audio' },
        { id: 7, name: 'Smartphone X', price: 899.99, stock: 20, category: 'Móviles' },
        { id: 8, name: 'Tablet Pro', price: 599.99, stock: 18, category: 'Móviles' }
      ];
      setProducts(mockProducts);
      setLoading(false);
    }, 800);
  }, []);

  // Mostrar mensaje de carga mientras se obtienen los productos
  if (loading) {
    return (
      <div className="view-container">
        <div className="loading-spinner">Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className="view-container">
      <h2 className="view-title">Productos</h2>
      <p className="view-subtitle">Catálogo de productos disponibles</p>

      {/* Grid responsive de productos */}
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            {/* Encabezado del producto con nombre y categoría */}
            <div className="product-header">
              <h3 className="product-name">{product.name}</h3>
              <span className="product-category">{product.category}</span>
            </div>

            {/* Información de precio y stock */}
            <div className="product-body">
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-stock">
                Stock: <strong>{product.stock}</strong> unidades
              </p>
            </div>

            {/* Botón de acción */}
            <button className="product-btn">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsView;
