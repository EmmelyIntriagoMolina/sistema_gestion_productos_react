import { useState } from 'react'
import "../css/ProductForm.css"

function ProductForm({ onAgregarProducto}) {
    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        categoria: '',
        stock: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const nuevoProducto = {
            id: Date.now(),
            nombre: formData.nombre,
            precio: Number(formData.precio),
            categoria: formData.categoria,
            stock: Number(formData.stock)
        };
    
        onAgregarProducto(nuevoProducto);
    
        setFormData({
            nombre: '',
            precio: '',
            categoria: '',
            stock: ''
        });
    }

    return (
        <section className="form-section">
            <h2>Agregar nuevo Producto</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre del producto</label>
                    <input
                        type="text"
                        id="nombre"
                        value={formData.nombre}
                        placeholder="Ingrese el nombre del producto"
                        onChange={handleChange}
                        name="nombre"
                    /> 
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio del producto</label>
                    <input
                        type="number"
                        id="precio"
                        value={formData.precio}
                        placeholder="Ingrese el precio del producto"
                        onChange={handleChange}
                        name="precio"
                    /> 
                </div>
                <div className="form-group">
                    <label htmlFor="categoria">Categoría del producto</label>
                    <input
                        type="text"
                        id="categoria"
                        value={formData.categoria}
                        placeholder="Ingrese la categoría del producto"
                        onChange={handleChange}
                        name="categoria"
                    /> 
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock del producto</label>
                    <input
                        type="number"
                        id="stock"
                        value={formData.stock}
                        placeholder="Ingrese el stock del producto"
                        onChange={handleChange}
                        name="stock"
                    /> 
                </div>
                <div>
                    <button type="submit">Agregar Producto</button>
                </div>
            </form>
        </section>
    )

}

export default ProductForm