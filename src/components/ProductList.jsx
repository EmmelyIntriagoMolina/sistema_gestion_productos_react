import { useState } from "react"
import "../css/ProductList.css"

function ProductList({ products, onEditarProducto }) {
    const [busqueda, setBusqueda] = useState('')
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

    const productosFiltrados = products.filter((producto) => {
        const coincideNombre = producto.nombre
            .toLowerCase()
            .includes(busqueda.toLowerCase());

        const coincideCategoria =
            categoriaSeleccionada === '' ||
            producto.categoria === categoriaSeleccionada;

        return coincideNombre && coincideCategoria;
    });
    

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
            <select
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                className="search-input"
            >
                <option value="">Todas las categorías</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Accesorios">Accesorios</option>
            </select>

            { productosFiltrados.length > 0 ? (
                <ul className="product-list">
                    {productosFiltrados.map((producto) => (
                        <li className="product-item" key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <p>Precio: ${producto.precio.toFixed(2)}</p>
                            <p>Categoría: {producto.categoria}</p>
                            <p>Stock: {producto.stock}</p>

                            <button onClick={() => onEditarProducto(producto)}>
                                Editar
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron productos que coincidan con la búsqueda.</p>
            )}
        </section>
    )
}

export default ProductList