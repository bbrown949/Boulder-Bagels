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
  "name",
  "price",
  "imageUrl",
  "shortDescription",
  "longDescription"
) values (
  'Bacon And Egg',
  2999,
  '/images/2.png',
  'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.',
  'Lorem ipsum dolor amet fashion axe'
), (
  'Nova-Lox',
  2595,
  '/images/1.png',
  'It''s like a chamois, towel, and sponge, all in one! Soaks up to 10x it''s weight in any liquid!',
  'Lorem ipsum dolor amet fashion axe pour-over jianbing,m'
);
