import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import './Header.css';
import Signup from './Signup';
import About from './About';
import Home from './Home';
import Page2 from './Page2';
import Page3 from './Page3';

function Header() {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#d48166'}}>
          <h2>Fila</h2>
          <ul className="loginlink">
            <li>
              <Link to="/" className="links home-link">
                Home
              </Link>
              <Link to="/about us">Products</Link>
              <Link to="/page2">Wishlist</Link>
              <Link to="/page3">Fetch Your Wishlist</Link>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about us" element={<About />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Box>
  );
}

export default Header;
