import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='flex1'>
        <p style={{ color: '#52baeb', fontSize: '26px' }}>Text Utils</p>
        <p><Link to='/'  style={{ textDecoration: 'none' }}>Home</Link></p>
        <p><Link to='/about'  style={{ textDecoration: 'none' }}>About Us</Link></p>
        <p><Link to='/contact'  style={{ textDecoration: 'none' }}>Contact Us</Link></p>
      </div>
      <div className='flex2'>
        <p>Enable dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
