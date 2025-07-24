import { useForm } from 'react-hook-form';
import './Register.css';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  async function submitForm(data) {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('repeatPassword', data.repeatPassword);
      formData.append('date', data.date);
      formData.append('country', data.country);
      if (data.image && data.image[0]) {
        formData.append('image', data.image[0]);
      }
      const response = await axios.post(`${API}/users`, formData);
      reset();
      alert('Usuario registrado correctamente');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="register-main">
      <h1 className="register-title">Registro</h1>
      <form className="register-form" onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Escriba su nombre"
          {...register('name', {
            required: 'Ingrese su nombre',
            minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' },
            maxLength: { value: 20, message: 'El nombre no puede exceder los 20 caracteres' },
            pattern: {
              value: /^[a-zA-Z]+( [a-zA-Z]+)*$/,
              message: 'El nombre solo puede contener letras y espacios',
            },
          })}
        />
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="Escriba su correo electrónico"
          {...register('email', {
            required: 'Ingrese su correo electrónico',
            minLength: {
              value: 10,
              message: 'El correo electrónico debe tener al menos 10 caracteres',
            },
            maxLength: {
              value: 50,
              message: 'El correo electrónico no puede exceder los 50 caracteres',
            },
            pattern: {
              value: /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/,
              message: 'Ingrese un correo electrónico válido',
            },
          })}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Escriba su contraseña"
          {...register('password', {
            required: 'Ingrese su contraseña',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener al menos 8 caracteres',
            },
            maxLength: {
              value: 20,
              message: 'La contraseña no puede exceder los 20 caracteres',
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message:
                'La contraseña debe contener al menos un número, una letra mayúscula y una letra minúscula',
            },
          })}
        />
        <label htmlFor="repeatpassword">Repetir contraseña</label>
        <input
          type="password"
          id="repeatpassword"
          placeholder="Repita su contraseña"
          {...register('repeatpassword', {
            required: 'Repita su contraseña',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener al menos 8 caracteres',
            },
            maxLength: {
              value: 20,
              message: 'La contraseña no puede exceder los 20 caracteres',
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message:
                'La contraseña debe contener al menos un número, una letra mayúscula y una letra minúscula',
            },
          })}
        />
        <label htmlFor="birthday">Fecha de nacimiento</label>
        <input
          type="date"
          id="birthday"
          {...register('birthday', {
            required: 'Ingrese su fecha de nacimiento',
          })}
        />
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
        <label htmlFor="comment">Déjenos un comentario!</label>
        <textarea {...register('comment')} id="comment" rows={7} defaultValue={''} />

        <label htmlFor="image">Foto de usuario (no es requerido)</label>
        <input type="file" id="image" {...register('image')} />

        <button type="submit">Registrarse</button>
      </form>
    </main>
  );
}
