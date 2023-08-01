import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import pg from 'pg';
import ClientError from './lib/client-error.js';

// eslint-disable-next-line no-unused-vars -- Remove when used
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/build', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

//  fetchProducts server call
app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
    select "productId",
    "productName",
    "price",
    "imageUrl",
    "description",
    "longDescription"
    from "products"`;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (e) {
    next(e);
  }
});

//  fetchProduct server call (productId)
app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!productId) {
      throw new ClientError(400, 'productId must be a positive integer');
    }
    const sql = `
    select "productId",
    "productName",
    "price",
    "imageUrl",
    "description",
    "longDescription"
    from "products"
    where "productId" = $1`;
    const params = [productId];
    const result = await db.query(sql, params);
    if (!result.rows[0])
      throw new ClientError(
        404,
        `cannot find product with productId ${productId}`
      );
    res.json(result.rows[0]);
  } catch (e) {
    next(e);
  }
});

// addToCart server call
app.post('/api/cart/:productId', async (req, res, next) => {
  try {
    console.log(req.body);
    const { productId, quantity, cartId } = req.body;
    if (!productId || !quantity)
      throw new ClientError(400, 'please select a valid product and quantity');
    const sql = `
    insert into "shoppingCartItems" ("productId", "quantity", "cartId")
    values ($1, $2, $3)
    `;
    const params = [productId, quantity, cartId];
    const result = await db.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Create React App server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Routtter to manage the routing.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
