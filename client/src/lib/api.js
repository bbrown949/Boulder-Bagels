/**
 * Fetches all products from the API.
 * @returns Promise that resolves to an array of products.
 */
export async function fetchBagelCatalog() {
  const res = await fetch('/api/bagelProducts');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function fetchSandwichCatalog() {
  const res = await fetch('/api/sandwichProducts');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function fetchDrinkCatalog() {
  const res = await fetch('/api/drinkProducts');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function fetchShmearCatalog() {
  const res = await fetch('/api/shmearProducts');
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

/**
 *
 * @param {number} cartId
 * @returns a join of products & shoppingCartItems table
 */
export async function fetchCartItems(cartId) {
  const res = await fetch(`/api/shoppingCartItems/${cartId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 *
 * @param {Number} productId
 * @param {Number} quantity
 * @param {Number} cartId
 */
export async function addItemQuantity(productId, quantity, cartId) {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity, cartId }),
  };
  const res = await fetch(`/api/cart/${cartId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 *
 * @param {Number} cartId
 * @param {Number} productId
 * @returns
 */
export async function removeItem(cartId, productId) {
  const req = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId, productId }),
  };
  const res = await fetch(`/api/delete/:cartId/:productId`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Signs in a user.
 * @param {string} username The user's username.
 * @param {sting} password The user's password.
 * @returns Promise that resolves to `{ token, user }`.
 */
export async function signIn(username, password) {
  return await signUpOrIn('sign-in', username, password);
}

/**
 * Signs up a user.
 * @param {string} username The user's username.
 * @param {sting} password The user's password.
 * @returns Promise that resolves to the user.
 */
export async function signUp(username, password) {
  return await signUpOrIn('sign-up', username, password);
}

/**
 * Signs up or signs in depending on the action.
 * @param {string} action Action to take, either 'sign-up' or 'sign-in'
 * @param {string} username The user's username.
 * @param {sting} password The user's password.
 * @returns Promise that resolves to user (sign-up) or `{ token, user }` (sign-in).
 */
export async function signUpOrIn(action, username, password) {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  };
  const res = await fetch(`/api/auth/${action}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/////

/**
 *
 * @param {string} username
 * @returns Promise that resolves to the users username
 */
export async function fetchUser(username) {
  const res = await fetch(`/api/customers/${username}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 *
 * @param {Number} cartId
 * @returns
 */
export async function removeAllItems(cartId) {
  const req = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId }),
  };
  const res = await fetch(`/api/delete/${cartId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
