import { useState } from 'react';
import { LOGO_URL } from '../utils/constant';
const Header = () => {
  const [btnName, setBtnName] = useState('login');
  // const btnName = 'Login';
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className='login-btn'
            onClick={() => {
              btnName === 'login' ? setBtnName('logout') : setBtnName('login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
