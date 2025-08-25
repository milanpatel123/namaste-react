import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const [btnName, setBtnName] = useState('login');
  // console.log('Header render');

  const onlineStatus = useOnlineStatus();

  // if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)
  //if dependency array is [btnName] => called everytime btnName updated
  useEffect(() => {
    console.log('useEffect called');
  }, [btnName]);

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status: {onlineStatus ? 'green' : 'red'} </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About us </Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li>
            <Link to='/grocery'>Grocery</Link>
          </li>
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
