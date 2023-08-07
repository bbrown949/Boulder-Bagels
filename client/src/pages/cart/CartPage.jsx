import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState, useContext } from 'react';
import { fetchCartItems, toDollars, removeItem } from '../../lib';
import './CartPage.css';
import { Link } from 'react-router-dom';
import AppContext from '../../components/AppContext';

export default function CartPage() {
  const { user } = useContext(AppContext);
  const [cart, setCart] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const cartId = user?.customerId;
  let cartTotal = 0;
  let cartItems = 0;

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
    setIsLoading(true);
    loadCart();
  }, [cartId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>Error Loading Cart: {error.message}</div>;
  }
  if (!cart) return null;
  //  subtotal && quantity of items
  cart[0] &&
    cart?.map((item) => {
      cartTotal += item.price * item.quantity;
      cartItems += 1 * item.quantity;
      return cartTotal && cartItems;
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

                  {/* <Col className="amount">{toDollars(product.price * quantity)}</Col> */}
                  <div className="remove-btn">
                    <button
                      className="remove"
                      onClick={() =>
                        handleRemoveItem(user.customerId, product.productId)
                      }>
                      Remove From Cart
                    </button>
                  </div>
                </Col>
              );
            })}
          {!cart[0] && (
            <>
              <Row className="empty-cart-container">
                <Col className="empty-cart">
                  <div className="empty-cart-msg">
                    <h3>Not Hungry? 🤔</h3>
                  </div>
                </Col>
                <Row>
                  <span className="empty-cart-msg">
                    <Link to="../eats">
                      <button className="back-to-shop-btn">Back to Shop</button>
                    </Link>
                  </span>
                </Row>
              </Row>
            </>
          )}
          {/*   Checks if there's any items in the cart and conditionally renders the checkout section      */}
          {cart[0] && (
            <Row className="hr">
              <div className="checkout">
                <div className="total">
                  <div>
                    <div className="items">
                      <u>{cartItems} items</u>
                    </div>
                    <div className="subtotal">
                      Sub-Total:{toDollars(cartTotal)}
                    </div>
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
  const { productName, quantity, price, imageUrl } = product;

  return (
    <Col className="cart-item-container">
      <div>
        <img
          src={imageUrl}
          className="cart-image card-img-top"
          alt={productName}
        />

        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text text-secondary">
            {toDollars(price * quantity)}
          </p>
          <h4>{quantity} Items</h4>
        </div>
      </div>
    </Col>
  );
}
