import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminProducts.css';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const API = import.meta.env.VITE_API_URL;

export default function AdminProducts() {
  const token = localStorage.getItem('token');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  function formatearFecha(productDate) {
    const fecha = new Date(productDate);
    const formateada = fecha.toLocaleString('es-AR', { dateStyle: 'short' });
    return formateada;
  }

  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get(`${API}/products`);

      setProducts(response.data.products);
    } catch (error) {
      console.log('Error al obtener los productos', error);
    }
  }

  function editingProduct(id) {
    const productToEdit = products.find((product) => product._id === id);
    console.log('Producto a editar:', productToEdit);
    if (productToEdit) {
      setEditProduct(productToEdit);
      reset(productToEdit);
    }
  }

  function deleteProduct(id) {
    Swal.fire({
      title: '¿Desea eliminar este producto?',
      text: 'Esta acción no podrá deshacerse.',
      icon: 'error',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      confirmButtonColor: 'red',
      cancelButtonColor: 'royalblue',
      cancelButtonText: 'Cancelar',
    }).then((response) => {
      if (response.isConfirmed) {
        axios.delete(`${API}/products/${id}`, { headers: { Authorization: token } }).then(() => {
          Swal.fire({
            title: 'Producto eliminado correctamente',
            icon: 'success',
            showConfirmButton: true,
          });
          getProducts();
        });
      }
    });
  }

  async function adminSubmit(data) {
    console.log(data);

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('price', data.price);
      formData.append('image', data.image[0]);
      formData.append('description', data.description);
      formData.append('date', data.date);
      formData.append('category', data.category);

      if (editProduct) {
        console.log('Editando producto:', editProduct);

        await axios.put(`${API}/products/${editProduct._id}`, formData, {
          headers: { Authorization: token },
        });
      } else {
        const response = await axios.post(`${API}/products`, formData, {
          headers: { Authorization: token },
        });
        Swal.fire({
          title: 'Producto agregado correctamente!',
          icon: 'success',
        });
        setProducts((prevProducts) => [...prevProducts, response.data]);
      }
      getProducts();
      setEditProduct(null);
      reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="padre">
        <h1 className="admin-products-h1">Administrador de Productos</h1>
        <div className="table-container">
          <table className="admin-table" border={1}>
            <thead>
              <tr>
                <th>Imagen del producto</th>
                <th className="product">Producto</th>
                <th>Descripción</th>
                <th>Fecha de ingreso</th>
                <th className="price">Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img src={`${API}/uploads/products/${product.image}`} alt={product.name} />
                  </td>
                  <td>
                    <p>{product.name}</p>
                  </td>
                  <td>{product.description}</td>
                  <td>{formatearFecha(product.createdAt)}</td>
                  <td>{product.price}</td>
                  <td>
                    <button title="Editar producto" onClick={() => editingProduct(product._id)}>
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button
                      className="danger"
                      title="Eliminar producto"
                      onClick={() => deleteProduct(product._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <form className="admin-form" onSubmit={handleSubmit(adminSubmit)}>
        <div className="input-group">
          <label htmlFor="title">Producto</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre del producto"
            {...register('name', {
              required: 'Ingrese el nombre del producto',
              minLength: {
                value: 5,
                message: 'El nombre del producto debe tener al menos 5 caracteres',
              },
              maxLength: {
                value: 50,
                message: 'El nombre del producto no puede exceder los 50 caracteres',
              },
            })}
          />
          {errors?.product && <span className="error">{errors.product.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="price">Precio</label>
          <input
            type="text"
            id="price"
            step={0.01}
            placeholder="Precio del producto"
            {...register('price', {
              required: 'Ingrese el precio del producto',
              min: {
                value: 1,
                message: 'El precio no puede ser menor a 1',
              },
            })}
          />
          {errors?.price && <span className="error">{errors.price.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="image">Imagen</label>
          <input
            type="file"
            id="image"
            placeholder="URL de la imagen del producto"
            {...register('image', {
              required: !editProduct ? 'Ingrese una imagen del producto' : false,
            })}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            type="text"
            id="description"
            placeholder="Descripción del producto"
            {...register('description', {
              required: 'Ingrese una descripción del producto',
              minLength: {
                value: 10,
                message: 'La descripción debe tener al menos 10 caracteres',
              },
              maxLength: {
                value: 500,
                message: 'La descripción no puede exceder los 200 caracteres',
              },
            })}
          />
          {errors?.description && <span className="error">{errors.description.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="date">Fecha de creación</label>
          <input
            type="date"
            id="date"
            {...register('date', { required: 'Ingrese la fecha de creación' })}
          />
          {errors?.date && <span className="error">{errors.date.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="category">Categoría</label>
          <select id="category" {...register('category', { required: 'Seleccione una categoría' })}>
            <option value="" disabled>
              Seleccione una categoría
            </option>
            <option value="smartphone">Smartphone</option>
            <option value="accesory">Accesorio</option>
          </select>
          {errors?.category && <span className="error">{errors.category.message}</span>}
        </div>
        <button type="submit" className="admin-btn" disabled={!isValid}>
          {editProduct ? 'Editar producto' : 'Cargar producto'}
        </button>
      </form>
    </>
  );
}
