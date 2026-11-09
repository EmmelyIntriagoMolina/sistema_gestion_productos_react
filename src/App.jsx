import { useState } from 'react'

import productosIniciales from './data/products'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [productos, setProductos] = useState(productosIniciales)
  const agregarProducto = (nuevoProducto) => {
    setProductos((prevProductos) => [
      ...prevProductos,
      nuevoProducto
    ])
  }

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Product Manager</h1>
        <p>Sistema de gestión de inventario</p>
      </header>

      <div className="dashboard-layout">
        <ProductForm onAgregarProducto={agregarProducto} />
        <ProductList products={productos} />
      </div>
    </main>
  )
}

export default App
