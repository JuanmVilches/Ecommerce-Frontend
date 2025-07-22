import { useForm } from 'react-hook-form';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API_URL = 'http://localhost:3000';

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  async function login(data) {
    try {
      const response = await axios.post(`${API_URL}/login`, data);

      console.log(response.data);
      alert('Exito');

      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      alert('Inicio de sesión exitoso');
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Error al iniciar sesión');
    }
    console.log(data);
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
