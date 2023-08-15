import './CartPage.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AppContext from '../../components/AppContext';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { fetchCartItems, toDollars, removeItem } from '../../lib';
import CircleLoader from '../../components/CircleLoader';

export default function CartPage() {
  const { user } = useContext(AppContext);
  const [cart, setCart] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const cartId = user?.customerId;
  let total = 0;
  let items = 0;

  useEffect(() => {
    async function loadCart() {
      try {
        const cart = await fetchCartItems(cartId);
        setCart(cart);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadCart();
  }, [cartId, cart]);
  if (isLoading) return <CircleLoader />;
  if (error) {
    return <div>`Error Loading Cart: ${error.message}`</div>;
  }
  if (!cart) return null;

  cart[0] &&
    cart?.map((item) => {
      total += item.price * item.quantity;
      items += 1 * item.quantity;
      return total && items;
    });

  async function handleRemoveItem(cartId, productId) {
    try {
      await removeItem(cartId, productId);
    } catch (e) {
      setError(e);
    }
  }

  return (
    <Container className="container" fluid>
      <Container className="cart-container" fluid>
        <Col className="menu-header">
          <h2 className="cart-header">Your Cart Items</h2>
        </Col>
        <div className="row">
          {cart[0] &&
            cart?.map((product) => {
              return (
                <Col className="cart-items" key={product.productId}>
                  <CartItem product={product} />
                  <div className="remove-btn">
                    <div
                      className="remove"
                      onClick={() =>
                        handleRemoveItem(user.customerId, product.productId)
                      }>
                      ❌
                    </div>
                  </div>
                </Col>
              );
            })}
          {!cart[0] && (
            <>
              <Row className="empty-cart-container">
                <Col className="empty-cart">
                  <div className="empty-cart-msg">
                    <h3>...not hungry? 🤔</h3>
                  </div>
                </Col>
                <Row className="back-to-shop-btn-row">
                  <span className="empty-cart-msg">
                    <Link to="/">
                      <button className="back-to-shop-btn">
                        Navigate to Home
                      </button>
                    </Link>
                  </span>
                </Row>
              </Row>
            </>
          )}
          {cart[0] && (
            <Row className="checkout-row">
              <div className="checkout">
                <div className="total">
                  <div>
                    <div className="items">
                      <u>Items: {items} </u>
                    </div>
                    <div className="subtotal">Sub-Total:{toDollars(total)}</div>
                  </div>
                </div>
                <div>-------------------- </div>
                <Link to="../eats">
                  <button className="checkout-shop">Keep Shopping</button>
                </Link>
                <div className="btn-space"></div>
                <button className="checkout-btn">Checkout</button>
              </div>
            </Row>
          )}
        </div>
      </Container>
    </Container>
  );
}

function CartItem({ product }) {
  const { productName, quantity, imageUrl, price } = product;
  return (
    <Col className="cart-item-container">
      <div>
        <img
          src={imageUrl}
          className="cart-image card-img-top"
          alt={productName}
        />

        <div className="cart-item-details">
          <div className="product-name">{productName}</div>
          <div className="cart-price">{toDollars(price * quantity)}</div>
          <div>Quantity:({quantity}) </div>
        </div>
      </div>
    </Col>
  );
}
