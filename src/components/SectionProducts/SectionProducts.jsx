import './SectionProducts.css';
import ProductCard from '../ProductCard/ProductCard';

export default function SectionProducts() {
  return (
    <main className="main-container">
      <section className="main-products">
        <h2>PRODUCTOS DESTACADOS</h2>
        <div className="cards-container">
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
