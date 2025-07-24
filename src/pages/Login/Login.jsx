import { useForm } from 'react-hook-form';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const API = import.meta.env.VITE_API_URL;

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  async function login(data) {
    try {
      const response = await axios.post(`${API}/login`, data);
      console.log(response);

      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      Swal.fire({
        title: 'Iniciu de sesión exitoso!',
        icon: 'success',
      });
      navigate('/');
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error al iniciar sesión',
        icon: 'error',
      });
    }
    reset();
  }

  return (
    <>
      <main className="login-main">
        <form className="login-form" onSubmit={handleSubmit(login)}>
          <h2 className="login-h2">INICIO DE SESIÓN</h2>
          <div className="login-group">
            <label className="label-login" htmlFor="mail">
              Escriba su mail
            </label>
            <input className="input-login" type="text" id="mail" {...register('email')} />
          </div>
          <div className="login-group">
            <label className="label-login" htmlFor="password">
              Escriba su contraseña
            </label>
            <input
              className="input-login"
              type="password"
              id="password"
              {...register('password')}
            />
          </div>
          <button className="login-btn" type="submit">
            Iniciar sesión
          </button>
        </form>
      </main>
    </>
  );
}
