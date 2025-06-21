import './About.css';

export default function About() {
  return (
    <main className="about-main">
      <div className="main-site">
        <h1 className="about-h1">Acerca de SmartZone</h1>
        <div className="somos">
          <h2 className="about-h2">¿Quienes somos?</h2>
          <p>
            Somos SmartZone, una empresa familiar nacida en 2010 especializada en la venta de
            celulares, ofreciendo una amplia variedad de modelos de las mejores marcas del mercado.
            Apoyados en alianzas estratégicas con las principales marcas tecnológicas, nos fuimos
            volviendo referentes del mercado
          </p>
        </div>
        <div className="destacamos">
          <h2>¿En que nos destacamos?</h2>
          <p>
            Nos destacamos por nuestra atención al cliente, garantizando asesoramiento experto para
            que encuentres el teléfono perfecto según tus necesidades. Además, trabajamos con
            productos 100% originales, con garantía y respaldo de fabricantes reconocidos.
          </p>
        </div>
        <div className="mision">
          <h2>Nuestra misión</h2>
          <p>
            Nuestra misión es brindarte la mejor experiencia de compra, con atención personalizada y
            asesoramiento experto para que encuentres el celular perfecto para ti. Trabajamos con
            las mejores marcas y modelos, garantizando productos originales y con garantía.
          </p>
        </div>
        <div className="equipo">
          <h2>Nuestro equipo</h2>
          <p>
            Contamos con un equipo en constante crecimiento, un sitio web con más de 50 categorías
            de producto a la venta y múltiples puntos de retiro distribuidos a lo largo del país.
          </p>
        </div>
        <div className="info">
          <img src="/src/assets/images/avatar.png" alt="" />
          <p>Creador del sitio:</p>
          <p>Juan Manuel Vilches</p>
        </div>
      </div>
    </main>
  );
}
