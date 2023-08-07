import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCatalog, toDollars } from '../../lib';
import './FoodMenu.css';

export default function FoodMenu() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadCatalog() {
      try {
        const products = await fetchCatalog();
        setProducts(products);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadCatalog();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Loading Menu: {error.message}</div>;
  return (
    <div className="container">
      <div className="menu-header">
        <h2>EATS</h2>
      </div>
      <div className="row">
        {products?.map((product) => (
          <div key={product.productId} className="col-12 col-md-6 col-lg-4">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Product({ product }) {
  const { productId, productName, price, imageUrl, description } = product;

  return (
    <Link
      to={`/${productId}`}
      className="product text-dark card mb-4 shadow-sm text-decoration-none">
      <img src={imageUrl} className="image card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text text-secondary">{toDollars(price)}</p>
        <p className="description card-text">{description}</p>
      </div>
    </Link>
  );
}
