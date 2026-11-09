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
  }

  const eliminarProducto = (id) => {
    setProductos((prevProductos) =>
        prevProductos.filter((producto) => producto.id !== id)
    );
  }

  const cancelarEdicion = () => {
    setProductoEditar(null)
  }

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
          onCancelarEdicion={cancelarEdicion}
        />
        <ProductList 
          products={productos} 
          onEditarProducto={seleccionarProducto}
          onEliminarProducto={eliminarProducto}
        />
      </div>
    </main>
  )
}

export default App
