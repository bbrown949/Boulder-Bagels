-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

insert into "products" (
  "productName",
  "quantity",
  "category",
  "price",
  "imageUrl",
  "description",
  "longDescription"
) values (
  'Breakfast Egg Sandwich',
  0,
  1,
  699,
  '/images/001.png',
  'Simple, yet delicious.',
  'Your breakfast sandwich just got an upgrade. The NEW All Nighter features our Cheesy Hash Brown Gourmet Bagel with American Cheese, Bacon, Cage-Free Eggs and a Jalapeno Garlic Aioli.'
), (
  'Nova-Lox',
  0,
  1,
  599,
  '/images/002.jpeg',
  'Fish outta water? Yes!',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Farmhouse',
  0,
  1,
  599,
  '/images/003.png',
  'short description',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Garden Avocado Egg Sandwich',
  0,
  1,
  599,
  '/images/004.png',
  'short description',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Santa Fe',
  0,
  1,
  599,
  '/images/005.png',
  'short description',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Chorizo Sunrise',
  0,
  1,
  599,
  '/images/006.png',
  'short description',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
)
