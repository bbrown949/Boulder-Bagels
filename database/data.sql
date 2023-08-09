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
  "price",
  "category",
  "imageUrl",
  "description",
  "longDescription"
) values (
  'Breakfast Egg Sandwich',
  699,
  'sandwhich',
  '/images/001.png',
  'Simple, yet delicious.',
  'Your breakfast sandwich just got an upgrade. The NEW All Nighter features our Cheesy Hash Brown Gourmet Bagel with American Cheese, Bacon, Cage-Free Eggs and a Jalapeno Garlic Aioli.'
), (
  'Nova-Lox',
  599,
  'sandwhich',
  '/images/002.jpeg',
  'Fish outta water? Yes!',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Farmhouse',
  599,
  'sandwhich',
  '/images/003.png',
  'short description',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Garden Avocado Egg Sandwich',
  599,
  'sandwhich',
  '/images/004.png',
  'short description',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Santa Fe',
  599,
  'sandwhich',
  '/images/005.png',
  'short description',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Chorizo Sunrise',
  599,
  'sandwhich',
  '/images/006.png',
  'short description',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Fresh Squeezed OJ',
  299,
  'drink',
  '/images/orange.png',
  'short description',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of shmear, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
)
