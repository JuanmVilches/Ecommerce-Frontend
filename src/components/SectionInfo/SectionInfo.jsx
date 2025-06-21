import React from 'react';
import './SectionInfo.css';
export default function SectionInfo() {
  return (
    <section className="main-banner">
      <img className="image-banner" src="/src/assets/images/banner/main.jpg" alt="banner-image" />
      <div className="banner-text">
        <h1>Bienvenido a SmartZone Store</h1>
        <p>
          Bienvenido a nuestra tienda en línea, tu destino confiable para encontrar los últimos
          modelos de celulares al mejor precio. Aquí descubrirás una amplia variedad de smartphones
          de las marcas más reconocidas, diseñados para satisfacer tus necesidades tecnológicas y
          mantenerte conectado en todo momento. Explora nuestras ofertas, disfruta de un proceso de
          compra fácil y seguro, y recibe tu nuevo celular directamente en la puerta de tu hogar.
          ¡Tu próximo smartphone está a solo un clic de distancia!
        </p>
      </div>
    </section>
  );
}
