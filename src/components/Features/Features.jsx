import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Features.css';
import { faHeadset, faShop, faTruck } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
  return (
    <section className="features">
      <div className="delivery">
        <FontAwesomeIcon icon={faTruck} className="fontawesome-icons" />
        <p>Envios a domicilio</p>
      </div>
      <div className="shop">
        <FontAwesomeIcon icon={faShop} className="fontawesome-icons" />
        <p>Contamos con tienda fisica</p>
      </div>
      <div className="contact">
        <FontAwesomeIcon icon={faHeadset} className="fontawesome-icons" />
        <p>Resolvemos tus dudas en 24hs</p>
      </div>
    </section>
  );
}
