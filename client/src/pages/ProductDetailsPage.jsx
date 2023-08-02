import { useEffect, useState } from 'react';
import { toDollars } from '../lib';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../lib';
import { addToCart } from '../lib/addToCart';
import './ProductDetailsPage.css';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();

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
  if (!product) return null;
  const { productName, price, imageUrl, longDescription } = product;

  async function handleAddToCart() {
    try {
      await addToCart(productId, 1, 2);
    } catch (err) {
      setError(err);
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
