import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBagelCatalog } from '../../lib';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './FoodMenu.css';

export default function BagelMenu() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadCatalog() {
      try {
        const products = await fetchBagelCatalog();
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
    <Container className="food-container">
      <div className="menu-header">
        <h2 className="eats-header"> Bagels </h2>
      </div>
      <Row className="row">
        {products?.map((product) => (
          <Col key={product.productId} className="product-container">
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
    <div className="product-container">
      <Link to={`/${productId}`} className="product ">
        <img src={imageUrl} className="image card-img-top" alt={productName} />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="description card-text">
            <i>{description}</i>
          </p>
        </div>
      </Link>
    </div>
  );
}
