import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="social-networks">
          <div className="facebook">
            <a href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" className="ocultar">
              Facebook
            </a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="ocultar">
              Instagram
            </a>
          </div>
          <div className="twitter">
            <a href="https://x.com/" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://x.com/" target="_blank" className="ocultar">
              Twitter
            </a>
          </div>
          <div className="youtube">
            <a href="https://www.youtube.com/" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" className="ocultar">
              Youtube
            </a>
          </div>
        </div>
        <div className="copyright">
          <img className="copyright-logo" src="/src/assets/images/logo empresa/logo.png" alt="" />
          <p>Copyright © 2025 SmartZone Store</p>
        </div>
        <div className="customer-services">
          <p>Atención al cliente:</p>
          <div className="whatsapp">
            <i className="fa-brands fa-whatsapp" />
            <span> +54 1122334455</span>
          </div>
          <p>smartzoneconsultas@gmail.com</p>
          <p>Lunes a viernes de 9 a 18hs</p>
        </div>
      </footer>
    </>
  );
}
