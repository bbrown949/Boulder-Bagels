import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchShmearCatalog } from '../../lib';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './FoodMenu.css';
import CircleLoader from '../../components/CircleLoader';

export default function ShmearMenu() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadCatalog() {
      try {
        const products = await fetchShmearCatalog();
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

  if (isLoading) return <CircleLoader />;
  if (error) return <div>Error Loading Menu: {error.message}</div>;
  return (
    <Container className="food-container">
      <div className="menu-header">
        <h2 className="eats-header">Shmear</h2>
      </div>
      <Row className="row">
        {products?.map((product) => (
          <Col key={product.productId} className="col-12 col-md-6 col-lg-4">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function Product({ product }) {
  const { productId, productName, imageUrl, description } = product;

  return (
    <Link
      to={`/${productId}`}
      className="product text-dark card mb-4 shadow-sm text-decoration-none">
      <img src={imageUrl} className="image card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="description card-text">
          <i>{description}</i>
        </p>
      </div>
    </Link>
  );
}
