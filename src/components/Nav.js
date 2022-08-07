
import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { BsFillBagFill } from "react-icons/bs";
const Nav = () => {
  const { totalQuantity } = useSelector(state => state.CartReducer);
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav_container">
            <div className="nav_left">
              <Link to="/home"><img src="/images/logo.webp" alt="logo" /></Link>

            </div>
            <div className="nav_right">
              <div className='basket'>
                <Link to="/cart" ><BsFillBagFill className='icon' /></Link>
                <span>
                  {totalQuantity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Nav;