import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white mono h3 flex items-center justify-center fixed left-0 right-0 top-0 z-1">
      <Link
        to="/"
        className="no-underline"
      >
        <h1 className="f5 fw3 m0">Futurice Code Test</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
