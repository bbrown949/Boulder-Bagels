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
