/**
 * Fetches all products from the API.
 * @returns Promise that resolves to an array of products.
 */
export async function fetchCatalog() {
  const res = await fetch('/api/products');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Fetches a single product from the API.
 * @param {number} productId The ID of the product to fetch.
 * @returns Promise that resolves to the product.
 */
export async function fetchProduct(productId) {
  const res = await fetch(`/api/products/${productId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/** Add a product to customers shopping cart
 * @param {number} productId of item
 * @param {quantity} quantity of items in cart
 * @param {cartId} cartId of each individual customer
 */
export async function addToCart(productId, quantity, cartId) {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity, cartId }),
  };
  const res = await fetch(`/api/cart/${cartId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
