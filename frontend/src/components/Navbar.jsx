import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Roblux</h2>
      <Link to="/">Home</Link> | <Link to="/marketplace">Marketplace</Link>
    </nav>
  );
}

export default Navbar;
