import { useEffect, useState, useContext } from 'react';
import { toDollars } from '../lib';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProduct, addItemQuantity } from '../lib';
import { addToCart } from '../lib/addToCart';
import './ProductDetailsPage.css';
import AppContext from '../components/AppContext';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
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

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return (
      <div>
        `Error Loading Product ${productId}: ${error.message}`
      </div>
    );
  }
  function incrementQuantity() {
    quantity = quantity + 1;
    if (quantity > 3) setQuantity((quantity = 3));
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

  async function handleAddToCart() {
    try {
      await addToCart(productId, quantity, user.customerId);
      await addItemQuantity(user.customerId, productId, quantity);
    } catch (e) {
      setError(e);
    }
  }
  return (
    <div className="detailsContainer">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <Link to="/eats" className="btn text-secondary">
                Back to eats
              </Link>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-6 col-md-5">
              <img src={imageUrl} alt={productName} className="image" />
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <h2>{productName}</h2>
              <h5 className="text-secondary">{toDollars(price)}</h5>
              <p>{longDescription}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="space-between">
                {quantity === 3 && (
                  <div className="qty-limit-txt">limit: 3 per customer</div>
                )}
                <button className="counter-btn" onClick={decrementQuantity}>
                  -
                </button>
                <div className="count">{quantity}</div>
                <div>
                  <button className="counter-btn" onClick={incrementQuantity}>
                    +
                  </button>
                </div>
              </div>
              <div>
                <button className="btn" onClick={handleAddToCart}>
                  Add to cart
                </button>
                <button
                  className="btn"
                  variant="success"
                  onClick={() => navigate('../cart')}>
                  Go to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
