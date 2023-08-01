import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState } from 'react';
import './app-drawer.css';

export default function AppDrawer({ listItems }) {
  const [clickedOpen, setClickedOpen] = useState(true);
  return (
    <div className="container">
      <div onClick={() => setClickedOpen(!clickedOpen)} className="menu-icon">
        <GiHamburgerMenu />
      </div>
      <div
        onClick={() => setClickedOpen(!clickedOpen)}
        className={clickedOpen ? 'menu-shade' : 'menu-shade is-drawn'}></div>
      <div className={clickedOpen ? 'menu-drawer' : 'menu-drawer is-open'}>
        <h3 className="menu-heading">Menu</h3>
        <DrawerList listItems={listItems} />
      </div>
    </div>
  );
}

function DrawerList({ listItems }) {
  const list = listItems.map((item) => (
    <li key={item.id} className="menu-items">
      {item.name}
    </li>
  ));
  return <div>{list}</div>;
}
