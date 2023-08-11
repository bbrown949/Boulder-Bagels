import React from 'react';
import './About.css';
export default function About() {
  return (
    <div className="about">
      <div></div>
      <div className="about-main">
        <div className="menu-header">
          <h2 className="press-header">Press</h2>
        </div>
        <div>
          <a href="https://realestateraechel.wordpress.com/2019/12/10/featured-erie-business-boulder-bagels/">
            {' '}
            (Original Article Credit){' '}
          </a>
        </div>
        <div>
          <div className="press-content">
            <p>
              Meeting with Bryan, founder of Boulder Bagels, was a ton of fun.
              As soon as he walked in the door, he was very friendly and eager
              to chat. Growing up in Laguna Beach, California, Bryan had that
              laid-back attitude that you might associate with Californians. He
              was extremely personable, and quick to deliver a smile. The
              inspiration for Boulder Bagels blossomed from a local Bagel shop
              in Laguna Beach that Bryan used to frequent. He loved the vibe and
              simplicity of it, and wanted to bring that idea to Colorado.
              Enter: Boulder Bagels.
            </p>
            <p>
              Bryan Brown has been an Erie resident for about two and a half
              years, and is no stranger to Boulder County. He is a CU alumni,
              and has always loved the Boulder area. That’s what gave him the
              idea for the name “Boulder Bagels” –
              <i>
                {' '}
                “Since attending college in Boulder, I always really liked the
                area, and when I started thinking about my bagel business, the
                name really stuck out to me and conveniently no one owned it
                yet.”{' '}
              </i>
              <div classname="spacing" />
            </p>
            <img
              src="/images/farmers.png"
              className="farmers-image"
              alt="market"></img>
            <p>
              This east-coast-style-bagel-meets-west-coast-authenticity company
              has only been in business for a few weeks so far, and their
              product is already busting through the doors of Erie residents,
              with them filling 45 orders on their opening weekend.{' '}
              <i>
                “We gained attention very quickly and are thrilled with the
                response from the community. It’s been a lot of work, but we are
                having so much fun building the business.”
              </i>{' '}
              Since then, they have hired a driver to help with delivering to
              ensure that he and his partner can focus on getting everything out
              the door fresh and on-time!
            </p>
            <p>
              Joined by his business partner Michael Austin – A Laguna Beach
              native as well, Boulder Bagels is currently delivering every
              Saturday. With the goal of all the bagels to be delivered by 10am,
              Bryan and Michael wake up at 3:00 in the morning to give
              themselves the best chance of staying on top of their orders. If
              you’re wanting to try these bagels but Saturdays are a tough time
              for you, don’t fret! You’ll be able to catch these guys at the
              2020 Erie Farmer’s Market in Spring. Flavors you can find at
              Boulder Bagels are: Plain, Onion, Poppy, Everything, Garlic,
              Sesame, and Salt, and they’re also experimenting with some other
              flavors such as Blueberry, Cheddar, Jalapeno, Cinnamon, along with
              Gluten Free bagels as well. If you ever fancy something a little
              different, Bryan recommends making the bagels “Laguna Style” –
              which is toasted and then topped with cream cheese, avocado
              slices, and lemon pepper. They will be offering samples of all
              types at the Erie Farmers Market next season.
            </p>
            <img
              src="/images/events.png"
              className="events-image"
              alt="events"></img>
            <p>
              Erie residents are always so amazing at supporting each other, and
              Boulder Bagels is no exception. Since opening, they’ve already
              taken part in a couple events including supporting Erie High’s
              Cheerleaders and Pom squad, and donating bagels to The Coats For
              Colorado event in Vista Ridge. If you know of anything coming up,
              Bryan says they are always looking for more charity events to be
              part of. If you’d like to place an order, have any questions, or
              would like to contact them to get involved with another charity or
              event, you can reach them at their social media pages :{' '}
              <a href="https://www.facebook.com/BoulderBagels"> Facebook </a>
              or
              <a href="https://www.facebook.com/BoulderBagels">
                {' '}
                Instagram{' '}
              </a>{' '}
              or simply shoot them an email: Hello@Boulderbagels.com.
            </p>
          </div>
        </div>
        <p> ---------</p>
      </div>
    </div>
  );
}
