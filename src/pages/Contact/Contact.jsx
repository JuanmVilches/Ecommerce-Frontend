import './Contact.css';

export default function Contact() {
  return (
    <main className="contact-main">
      <div className="main-container">
        <h1 className="contact-h1">Contacto</h1>
        <div className="container">
          <form className="contact-form">
            <label htmlFor="name">Escriba su nombre completo</label>
            <input
              type="text"
              minLength="3"
              maxLength="20"
              placeholder="Nombre completo"
              id="name"
              name="nombre"
              required
              pattern="^[a-zA-Z]+( [a-zA-Z]+)*$"
            />
            <label htmlFor="email">Escriba su email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              minLength="10"
              maxLength="40"
              required
              pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
            />
            <label htmlFor="comment">Déjenos su mensaje!</label>
            <textarea name="comment" id="comment" rows="10" cols="5" required></textarea>
            <button type="submit">Contactar</button>
          </form>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d580.5674319105424!2d-58.43909262237481!3d-34.599474454879974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca735a1475a9%3A0x6d7b590d3fee6495!2sAv.%20Corrientes%205256%2C%20C1414%20AJS%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1738167307061!5m2!1ses-419!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
