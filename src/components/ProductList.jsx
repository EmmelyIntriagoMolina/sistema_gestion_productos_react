import { useState } from "react"
import "../css/ProductList.css"

function ProductList({ products }) {
    const [busqueda, setBusqueda] = useState('')
    const productosFiltrados = products.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
    

    return (
        <section className="product-section">
            <h2>Lista de Productos</h2>
            <input
                type="text"
                placeholder="Buscar producto por nombre..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="search-input"
            />

            <ul className="product-list">
                {productosFiltrados.map((producto) => (
                    <li className="product-item" key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio.toFixed(2)}</p>
                        <p>Categoría: {producto.categoria}</p>
                        <p>Stock: {producto.stock}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProductList