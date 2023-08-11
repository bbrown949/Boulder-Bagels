import { useEffect, useState, useContext } from 'react';
import { toDollars } from '../lib';
import { useParams, Link } from 'react-router-dom';
import { fetchProduct, addItemQuantity } from '../lib';
import { addToCart } from '../lib/addToCart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './ProductDetailsPage.css';
import AppContext from '../components/AppContext';
import CircleLoader from '../components/CircleLoader';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  let [quantity, setQuantity] = useState(1);
  const { user } = useContext(AppContext);

  useEffect(() => {
    async function loadProduct(productId) {
      try {
        const product = await fetchProduct(productId);
        setProduct(product);
        console.log(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadProduct(productId);
  }, [productId, setProduct]);

  if (isLoading) return <CircleLoader />;

  if (error) {
    return (
      <div>
        `Error Loading Product ${productId}: ${error.message}`
      </div>
    );
  }

  //code for increasing and decreasing quantity
  function incrementQuantity() {
    quantity = quantity + 1;
    setQuantity(quantity);
  }
  function decrementQuantity() {
    quantity = quantity - 1;
    if (quantity < 1) setQuantity((quantity = 1));
    setQuantity(quantity);
  }
  if (isLoading) return <div>Loading...</div>;

  if (!product) return null;
  const { productName, price, imageUrl, longDescription } = product;

  /// Add to cart function user.customerId = cartId
  async function handleAddToCart() {
    try {
      await addToCart(productId, quantity, user.customerId);
      await addItemQuantity(user.customerId, productId, quantity);
    } catch (err) {
      setError(err);
    }
  }
  return (
    <Container className="detailsContainer">
      <div className="card shadow-sm">
        <div className="card-body">
          <Row className="row">
            <div className="col"></div>
          </Row>
          <div className="row mb-4">
            <div className="">
              <img src={imageUrl} alt={productName} className="image" />
            </div>
            <div className="details-container">
              <div className="details-product-name">
                <h2>{productName}</h2>
              </div>
              <h5 className="text-secondary">{toDollars(price)}</h5>
              <p className="long-description">{longDescription}</p>
            </div>
          </div>
          <Row className="row">
            <Col className="quantity-col">
              <div className="space-between">
                <Row>
                  <Button className="counter-minus" onClick={decrementQuantity}>
                    Less
                  </Button>
                  <div className="count">{quantity}</div>
                  <div>
                    <Button
                      className="counter-plus"
                      onClick={incrementQuantity}>
                      More
                    </Button>
                  </div>
                </Row>
              </div>
            </Col>
            <div>
              <Link to="../cart">
                <Button className="add-to-cart-btn" onClick={handleAddToCart}>
                  Add to cart
                </Button>
              </Link>
            </div>
          </Row>
        </div>
      </div>
    </Container>
  );
}
