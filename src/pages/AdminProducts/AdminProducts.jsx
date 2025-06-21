import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminProducts.css';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function AdminProducts() {
  return (
    <>
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
            <tr>
              <td>
                <img src="/src/assets/images/Samsung galaxy S24.PNG" alt="" />
              </td>
              <td>
                <p>Samsung Galaxy S24</p>
              </td>
              <td>
                El Samsung Galaxy S24 es un smartphone de gama alta que forma parte de la serie
                Galaxy S de Samsung, conocida por su diseño premium, rendimiento potente y
                características innovadoras.
              </td>
              <td>01/02/2025</td>
              <td>$ 1.000.000</td>
              <td>
                <button title="Editar producto">
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button className="danger" title="Eliminar producto">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/assets/images/Samsung Galaxy S24 FE.png" alt="" />
              </td>
              <td>
                <p>Samsung Galaxy S24 FE</p>
              </td>
              <td>
                El Samsung Galaxy S24 FE (Fan Edition) es una versión más asequible de la serie
                Galaxy S24, diseñada para ofrecer muchas de las características premium de los
                modelos flagship a un precio más accesible.
              </td>
              <td>01/02/2025</td>
              <td>$ 900.000</td>
              <td>
                <button title="Editar producto">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="danger" title="Eliminar producto">
                  <i className="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/assets/images/iPhone 16.png" alt="" />
              </td>
              <td>
                <p>iPhone 16</p>
              </td>
              <td>
                El iPhone 16 representa la última generación de smartphones de Apple, tiene pantalla
                de 6,1", chip A18, cámara principal de 48 MP y nuevas funciones de inteligencia
                artificial. Incluye un botón de acción y mejora la batería.
              </td>
              <td>01/02/2025</td>
              <td>$ 1.200.000</td>
              <td>
                <button title="Editar producto">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="danger" title="Eliminar producto">
                  <i className="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/assets/images/iPhone 16 plus.png" alt="" />
              </td>
              <td>
                <p>iPhone 16 Plus</p>
              </td>
              <td>
                El iPhone 16 Plus es la versión de pantalla grande del iPhone 16, cuenta con
                pantalla de 6.7 pulgadas, chip A18 Bionic, cámara de 48 MP, gran duración de batería
                y carga rápida. Con iOS 18 y soporte 5G, es ideal para quienes buscan rendimiento y
                pantalla grande en un diseño elegante.
              </td>
              <td>01/02/2025</td>
              <td>$ 1.400.000</td>
              <td>
                <button title="Editar producto">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="danger" title="Eliminar producto">
                  <i className="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/assets/images/iPhone 16 Pro.png" alt="" />
              </td>
              <td>
                <p>iPhone 16 Pro</p>
              </td>
              <td>
                El iPhone 16 Pro cuenta con una pantalla Super Retina XDR OLED de 6,3 pulgadas con
                tecnología ProMotion de hasta 120 Hz, chip A18 Pro, cámara principal de 48 MP con
                zoom periscópico 5x y diseño de titanio.
              </td>
              <td>01/02/2025</td>
              <td>$ 1.650.000</td>
              <td>
                <button title="Editar producto">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="danger" title="Eliminar producto">
                  <i className="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/assets/images/iPhone SE.png" alt="" />
              </td>
              <td>
                <p>iPhone SE</p>
              </td>
              <td>
                El iPhone SE es un iPhone compacto y asequible que combina el clásico diseño con
                táctil ID y hardware moderno, como el chip A15 Bionic. Con una pantalla de 4.7
                pulgadas, cámara de 12 MP y soporte para 5G, ofrece rendimiento sólido y
                actualizaciones de iOS a largo plazo. Ideal para quienes buscan un iPhone pequeño y
                económico.
              </td>
              <td>01/02/2025</td>
              <td>$ 800.000</td>
              <td>
                <button title="Editar producto">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="danger" title="Eliminar producto">
                  <i className="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/assets/images/Google_Pixel_9-removebg-preview.png" alt="" />
              </td>
              <td>
                <p>Google Pixel 9</p>
              </td>
              <td>
                El Google Pixel 9 cuenta con una pantalla OLED de 6,24" y tasa de refresco de 120
                Hz. Está impulsado por el chip Google Tensor G4, con 12 GB de RAM y opciones de
                almacenamiento de 128 GB o 256 GB. Su sistema de cámaras incluye un sensor principal
                de 50 MP y un ultra gran angular de 48 MP, junto con una cámara frontal de 10,5 MP.
                Además, utiliza inteligencia artificial Gemini AI para mejorar la experiencia.
              </td>
              <td>01/02/2025</td>
              <td>$ 1.300.000</td>
              <td>
                <button title="Editar producto">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="danger" title="Eliminar producto">
                  <i className="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/assets/images/Google Pixel 8 Pro.png" alt="" />
              </td>
              <td>
                <p>Google Pixel 8 Pro</p>
              </td>
              <td>
                El Google Pixel 8 Pro tiene una pantalla OLED LTPO de 6,7" con tasa de refresco de
                120 Hz. Equipado con el chip Google Tensor G3 y 12 GB de RAM. Su sistema de cámaras
                incluye un sensor principal de 50 MP y un teleobjetivo de 48 MP con zoom 5x. La
                batería de 5.050 mAh admite carga rápida de 45 W y carga inalámbrica de 23 W.
                También incluye un termómetro integrado.
              </td>
              <td>01/02/2025</td>
              <td>$ 1.350.000</td>
              <td>
                <button title="Editar producto">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="danger" title="Eliminar producto">
                  <i className="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
