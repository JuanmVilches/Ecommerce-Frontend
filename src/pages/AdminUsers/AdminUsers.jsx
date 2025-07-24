import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './AdminUsers.css';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const API = import.meta.env.VITE_API_URL;

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  console.log(users);

  function formatearFecha(userDate) {
    const fecha = new Date(userDate);
    const formateada = fecha.toLocaleString('es-AR', { dateStyle: 'short' });
    return formateada;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error('Error al obtener los usuarios', error);
      });
  }, []);

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('repeatPassword', data.repeatPassword);
    formData.append('date', data.date);
    formData.append('country', data.country);

    if (data.image) {
      formData.append('image', data.image[0]);
    }
    const token = localStorage.getItem('token');
    if (editUser) {
      axios
        .put(`${API}/users/${editUser._id}`, formData, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setUsers(users.map((user) => (user._id === editUser._id ? res.data : user)));
          setEditUser(null);
          alert('Usuario editado correctamente');
          reset();
        });
    } else {
      axios.post(`${API}/users`, formData).then((res) => {
        setUsers([...users, res.data]);
        console.log(res.data);

        reset();
        alert('Usuario agregado correctamente');
      });
    }
  };

  function editingUser(id) {
    const user = users.find((u) => u._id === id);
    console.log(id, user);
    setEditUser(user);
    reset(user);
  }

  function deleteUser(id) {
    const token = localStorage.getItem('token');
    if (confirm('Esta seguro que desea eliminar este usuario?'))
      axios
        .delete(`${API}/users/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then(
          () => setUsers(users.filter((user) => user._id !== id)),
          alert('Usuario eliminado correctamente')
        )
        .catch((err) => console.error('Error al eliminar usuario:', err));
  }

  return (
    <>
      <div className="father">
        <h1 className="admin-user-h1">Administración de Usuarios</h1>
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Fecha de Nacimiento</th>
                <th>País</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{formatearFecha(user.createdAt)}</td>
                  <td>{user.country}</td>
                  <td>
                    <button title="Editar producto" onClick={() => editingUser(user._id)}>
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button
                      className="danger"
                      title="Eliminar producto"
                      onClick={() => deleteUser(user._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1 className="admin-user-h1">FORMULARIO DE USUARIOS</h1>
        <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="name">Nombre de usuario</label>
            <input
              placeholder="Nombre"
              id="name"
              {...register('name', { required: 'Campo obligatorio' })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Email"
              type="email"
              {...register('email', { required: 'Campo obligatorio' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              placeholder="Contraseña"
              type="password"
              {...register('password', {
                required: 'Campo obligatorio',
                minLength: { value: 4, message: 'Mínimo 6 caracteres' },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="repeatPassword">Repetir contraseña</label>
            <input
              id="repeatPassword"
              placeholder="Repetir contraseña"
              type="password"
              {...register('repeatPassword', {
                required: 'Campo obligatorio',
              })}
            />
            {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="birthdate">Fecha de nacimiento</label>
            <input
              type="date"
              id="birthdate"
              {...register('date', { required: 'Campo obligatorio' })}
            />
            {errors.birthdate && <p>{errors.birthdate.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="country">País</label>
            <select id="country" {...register('country', { required: 'Campo obligatorio' })}>
              <option value="">Seleccionar país</option>
              <option value="" disabled></option>
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Brasil">Brasil</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Ecuador">Ecuador</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Mexico">Mexico</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Venezuela">Venezuela</option>
            </select>
            {errors.country && <p>{errors.country.message}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="image">Foto de usuario (no es requerido)</label>
            <input type="file" id="image" {...register('image')} />
          </div>

          <button type="submit" className="user-btn">
            {editUser ? 'Editar usuario' : 'Agregar usuario'}
          </button>
        </form>
      </div>
    </>
  );
}
