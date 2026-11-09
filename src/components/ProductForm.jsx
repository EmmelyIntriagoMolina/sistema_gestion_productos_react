import { useState, useEffect } from 'react'
import "../css/ProductForm.css"

function ProductForm({ 
    onAgregarProducto,
    productoEditar,
    onEditarProducto,
    onCancelarEdicion
}) {
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
        if (
            !formData.nombre.trim() ||
            !formData.precio ||
            !formData.categoria.trim() ||
            !formData.stock
        ) {
            alert('Todos los campos son obligatorios.')
            return
        }
        e.preventDefault();
        
        const nuevoProducto = {
            id: productoEditar ? productoEditar.id : Date.now(),
            nombre: formData.nombre,
            precio: Number(formData.precio),
            categoria: formData.categoria,
            stock: Number(formData.stock)
        }

        if (productoEditar) {
            onEditarProducto(nuevoProducto)
        } else {
            onAgregarProducto(nuevoProducto)
        }
        
        setFormData({
            nombre: '',
            precio: '',
            categoria: '',
            stock: ''
        });
    }

    useEffect(() => {
        if (productoEditar) {
            setFormData({
                nombre: productoEditar.nombre,
                precio: productoEditar.precio,
                categoria: productoEditar.categoria,
                stock: productoEditar.stock
            });
        }
    }, [productoEditar]);

    useEffect(() => {
        if (productoEditar === null) {
            setFormData({
                nombre: '',
                precio: '',
                categoria: '',
                stock: ''
            });
        }
    }, [productoEditar]);

    return (
        <section className="form-section">
            <h2>{productoEditar ? 'Editar' : 'Agregar'} producto</h2>

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
                    <button type="submit">
                        {productoEditar ? 'Guardar cambios' : 'Agregar producto'}
                    </button>
                    {productoEditar && (
                        <button type="button" onClick={onCancelarEdicion}>
                            Cancelar edición
                        </button>
                    )}
                </div>
            </form>
        </section>
    )

}

export default ProductForm