import { useState } from 'react'

import productosIniciales from './data/products'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [productos, setProductos] = useState(productosIniciales)
  const [productoEditar, setProductoEditar] = useState(null)

  const agregarProducto = (nuevoProducto) => {
    setProductos((prevProductos) => [
      ...prevProductos,
      nuevoProducto
    ])
  }
  const seleccionarProducto = (producto) => {
    setProductoEditar(producto);
  }

  const actualizarProducto = (productoActualizado) => {
    setProductos((prevProductos) =>
        prevProductos.map((producto) =>
            producto.id === productoActualizado.id
                ? productoActualizado
                : producto
        )
    );
    setProductoEditar(null);
  };

  return ( 
    <main className="app-container">
      <header className="app-header">
        <h1>Product Manager</h1>
        <p>Sistema de gestión de inventario</p>
      </header>

      <div className="dashboard-layout">
        <ProductForm 
          onAgregarProducto={agregarProducto}
          productoEditar={productoEditar}
          onEditarProducto={actualizarProducto}
        />
        <ProductList 
          products={productos} 
          onEditarProducto={seleccionarProducto}
        />
      </div>
    </main>
  )
}

export default App
