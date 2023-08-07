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
  // loops through the cart array to calculate the customers subtotal && quantity of items
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
    <div className="container">
      <div className="menu-header">
        <h2>Your Cart Items</h2>
      </div>
      <div className="row">
        {cart[0] &&
          cart?.map((product) => {
            return (
              <div className="cart-items" key={product.productId}>
                <CartItem product={product} />
                <div className="prices">
                  <div className="amount">{toDollars(product.price)}</div>
                  <button
                    className="remove"
                    onClick={() =>
                      handleRemoveItem(user.customerId, product.productId)
                    }>
                    Remove From Cart
                  </button>
                </div>
              </div>
            );
          })}
        {!cart[0] && (
          <>
            <div className="empty-cart-container">
              <div className="empty-cart">
                <div className="empty-cart-msg">
                  <h3>Not Hungry? 🤔</h3>
                </div>
              </div>
              <div>
                <span className="empty-cart-msg">
                  <Link to="../eats">
                    <button className="back-to-shop-btn">Back to Shop</button>
                  </Link>
                </span>
              </div>
            </div>
          </>
        )}
        {/*   Checks if there's any items in the cart and conditionally renders the checkout section      */}
        {cart[0] && (
          <div className="hr">
            <div className="checkout">
              <div className="total">
                <div>
                  <div className="Subtotal">Sub-Total</div>
                  <div className="items">{cartItems} items</div>
                </div>
                <div className="total-amount">{toDollars(cartTotal)}</div>
              </div>
              <button className="button">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CartItem({ product }) {
  const { productName, quantity, price, imageUrl } = product;

  return (
    <div>
      <img src={imageUrl} className="image card-img-top" alt={productName} />

      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text text-secondary">
          {toDollars(price * quantity)}
        </p>
        <h4>{quantity} Items</h4>
      </div>
    </div>
  );
}
