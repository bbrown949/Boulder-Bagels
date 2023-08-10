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
  'Your breakfast sandwich just got an upgrade. This bundle of joy features American Cheese, Bacon, Cage-Free Eggs and a Jalapeno Garlic Aioli.'
), (
  'Nova-Lox',
  599,
  'sandwhich',
  '/images/002.jpeg',
  'Fish outta water? Yes!',
  'Breakfast really doesnt get more perfect - or classic - than this! Top your favorite bagel with a bit of cream cheese, some crunchy red onion, a few savory capers, slices of bright, fresh tomato and our mild, luscious and cold-smoked Nova Lox salmon.'
), (
  'Farmhouse',
  599,
  'sandwhich',
  '/images/003.png',
  'Grab your Pitchfork.',
  'Dig in to this inspired-by-the farm breakfast combo. Our Farmhouse Signature Breakfast Sandwich starts with cage-free eggs, thick-cut bacon, smoked ham and cheddar cheese, then gets a back-to-the-farm finish with country pepper shmear on a Cheesy Hash Brown Gourmet Bagel.'
), (
  'Avocado Egg Sandwich',
  599,
  'sandwhich',
  '/images/004.png',
  'Fresh from the garden.',
  'This breakfast sandwich is loaded with plant power! With Cage-Free Fresh-Cracked Eggs, Avocado, Juicy Tomato and Fresh Spinach with Roasted Tomato Spread on a Fresh-Baked Everything Bagel.'
),  (
  'Turkey, Bacon, Avo',
  599,
  'sandwhich',
  '/images/turkeyAvo.jpg',
  'Like a BLT... but better.',
  'Dont go "cold turkey" at lunch! Satisfy your hunger with our Turkey, Bacon & Avocado Signature Sandwich. Lean roasted turkey is dressed up with thick-cut bacon, creamy avocado, lettuce, tomato, and our unique roasted tomato spread, all on a plain bagel.'
), (
  'The Santa Fe',
  599,
  'sandwhich',
  '/images/005.png',
  'Spice it up.',
  'A healthy twist with our Santa Fe Egg White Breakfast Sandwich. Any Bagel topped with Turkey Sausage, Cage-Free Egg Whites, Cheddar Cheese, and our Jalapeño Salsa Cream Cheese. Its the kick you need in the morning.'
), (
  'Chorizo Sunrise',
  599,
  'sandwhich',
  '/images/006.png',
  'Olé! Olé! Olé!',
  'Say "Olé!" to the new day with our Chorizo Sunrise Signature Breakfast Sandwich! Take your taste buds on a trip south-of-the-border with Savory Chorizo Sausage, Smashed Avocado, Cheddar Cheese, Cage-Free Eggs and our Jalapeño Salsa Shmear, all served on a Green Chile Gourmet Bagel.'
), (
  'Avocado Veg Out',
  599,
  'sandwhich',
  '/images/vegOut.jpg',
  'Feeling Healthy?',
  'Dont stress about a healthy lunch! Our Avocado Veg Out has every crispy, healthy, gorgeous veggie you could want (tomato, lettuce, cucumbers and red onions), all dressed up for lunch with avocado and Garden Veggie Shmear.'
), (
  'Orange Juice',
  299,
  'drinks',
  '/images/orange.jpg',
  'Freshly squeezed every morning.',
  'Get your morning started off right and wash down your breakfast egg sandwich with a free pour Orange Juice.'
),   (
  'Coffee Of The Day',
  199,
  'drinks',
  '/images/coffeeOfDay.jpg',
  'Pep up your step.',
  'Why be boring?? Go beyond “regular or decaf” and explore the world with our Coffee of the Day. These carefully curated coffees and seasonal favorites are brewed every hour to make sure you get a fresh cup, any time of day.'
),  (
  'Vanilla Cream Cold Brew',
  499,
  'drinks',
  '/images/vanillaCreamColdBrew.jpg',
  'Staff Favorite.',
  'A classic with a sweet twist. We add vanilla and cream to our Classic Cold Brew and serve over ice for a delicious and craveable drink.'
), (
  'Hot Chocolate',
  199,
  'drinks',
  '/images/hotChocolate.jpg',
  'Excellent, anytime.',
  'Go ahead, we wont tell a soul! Nothing comforts like a Hot Chocolate. As cozy as your favorite slippers, every Hot Chocolate is made to order – pick your favorite chocolate (milk or white), then top it off with whipped cream.'
), (
  'Chocolate Coffee Shake',
  599,
  'drinks',
  '/images/chocShake.jpg',
  'Get in my belly.',
  'For a refreshing frozen drink with a kick of caffeine, we blend our Classic Cold Brew with chocolate and top with whipped cream (and an extra chocolate drizzle, for good measure).'
), (
  'Hot Tea',
  199,
  'drinks',
  '/images/hotTea.jpg',
  'Relaxing and calming.',
  'Ready for a steaming cup of comfort? Whatever you’re craving, we’ve got your “cup of tea!” Our Hot Tea selections range from herbal to black, simple to full-flavored.'
), (
  'Lemonade',
  299,
  'drinks',
  '/images/lemonade.jpg',
  'Just like Mom makes it.',
  'Looking for a zesty kick to a refreshing drink? Try our refreshing lemonade and give your taste buds a kick.'
), (
  'StrawBanana Smoothie',
  499,
  'drinks',
  '/images/strawberryBananaSmoothie.jpg',
  'One word. Yum.',
  'When you need a nutritious, refreshing boost, try our Strawberry Banana Smoothie. We blend bright red strawberries and potassium-rich bananas with low-fat yogurt to create a healthy pick-me-up that’s perfect any time of day.'
), (
  'Everything',
  299,
  'bagel',
  '/images/everything.png',
  'A little bit of everything!',
  'You get the whole shebang with our classic Everything Bagel. Each mouthwatering bite delivers a little something to tickle your taste buds in our Everything Spice Mix which includes: sesame seeds, poppy seeds, onion, garlic, and salt!'
), (
  'Sesame',
  299,
  'bagel',
  '/images/sesame.png',
  'Taste the roast.',
  'Hungry? Just say "Open Sesame" and, POOF ... bagel magic! Our Sesame Bagel is simple-yet-loveable, the favorite choice for hungry folks everywhere who want the perfect canvas to layer flavor onto. Its a crunchy, satisfying magic carpet ride, trust us!'
), (
  'Plain',
  299,
  'bagel',
  '/images/plain.png',
  'For the simple people.',
  'Simple? Yes. Boring? Never! A plain bagel is a timeless classic ... its always in style, it goes with everything and it never disappoints. Its the perfect canvas for whatever other yumminess you have in mind, so cream cheese it up any way you like.'
), (
  'Poppy Seed',
  299,
  'bagel',
  '/images/poppy.jpg',
  'For some snap in your bite.',
  'We love it when you call it Big Poppy! For a bit of crunch and a burst of flavor in every bite, our Poppy Bagel is the ideal breakfast or lunch heavy hitter. Poppy seeds adorn this classic bagel for a subtle taste loaded with crunchy goodness.'
), (
  'Garlic',
  299,
  'bagel',
  '/images/garlic.jpg',
  'Talk about flavor country.',
  'Garlic lovers rejoice (and vampires be gone)! It really doesnt get more flavorful or savory than our wonderful Garlic Bagel. Minced garlic and sesame seeds give gorgeous toasty aromatic flavor to this all-time classic..'
), (
  'Onion',
  299,
  'bagel',
  '/images/onion.png',
  'Never dull, always delish.!',
  'This onion wont make you cry, unless its from tears of joy! Our Onion Bagel is the perfect savory base for your choice of shmears. Never dull, always delish, this tried-and-true classic bagel delivers powerful flavor with every bite!'
), (
  'Cinnamon Sugar',
  299,
  'bagel',
  '/images/cinnamon.png',
  'Great for kids!',
  'Sugar and spice and everything nice, all wrapped up in a bagel! For breakfast, for lunch, or for any time you need an instant mood-boosting treat, our Cinnamon Sugar Bagel is just sweet enough to satisfy.'
), (
  'Cranberry',
  299,
  'bagel',
  '/images/cranberry.jpg',
  'Now thats tarty!',
  'Who says cranberries are only for once a year? Enjoy the tart-yet-sweet flavor of our Cranberry Bagel every day for a unique, never-dull start to your morning. Up bright and early? This is the perky pick-me-up you need.'
), (
  'Plain',
  299,
  'shmear',
  '/images/plainCC.jpg',
  'Double-whipped.',
  'Our double-whipped Plain Cream Cheese is like your favorite pair of jeans - it never goes out of style and it pairs perfectly with ... everything! Mix and match our Plain Cream Cheese with every kind of bagel and youre sure to please every kind of taste bud.'
), (
  'Onion And Chive',
  299,
  'shmear',
  '/images/onionChive.jpg',
  'Zingy and delish.',
  'Onion gets a bright dash of delish with herb-y chives in this classic one-two punch of a savory shmear. Top any bagel with a satisfying serving of garden-fresh flavor with our double-whipped Onion & Chive Shmear.'
), (
  'Jalapeno Salsa',
  299,
  'shmear',
  '/images/salsa.jpg',
  'Is it hot in here?.',
  'If youre ready to spice things up a little, try our zesty Jalapeño Salsa Reduced Fat Cream Cheese . Double-whipped, reduced fat shmear gets a healthy dose of Tex-Mex flavor with jalapeño peppers, diced tomatoes, red peppers, onions and garlic.'
), (
  'Strawberry',
  299,
  'shmear',
  '/images/strawberry.jpg',
  'The "berry" best..',
  'Light-as-air reduced fat, double-whipped cream cheese gets a delicious boost with a bounty of fresh strawberries blended in. Its like a little taste of spring in every bite!'
)
