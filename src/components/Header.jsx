// let {BrowserRouter,Switch,Route,NavLink} = ReactRouterDOM;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as NavLink,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import React from "react";
import "../style.scss";
//Pages
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

function Header() {
  const { loginWithRedirect,logout,user, isAuthenticated  } = useAuth0();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  // const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  const [scroll, setScroll] = useState(false)

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");


  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      setScroll(window.scrollY > 160)
    })
  }, [])
  return (
    <div>
      <div className="marquee">
        <marquee behavior="scroll" direction="left">
          Welcome to Tushar Mart (Hurray) USE CODE "NEWUSER" and "FIRSTUSER" for Amazing Discounts
        </marquee>{" "}
      </div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className={scroll ? " scrolled navbar" : "navbar"} onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            IndiMart
            {/* <i className="fa fa-code"></i> */}
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={splitLocation[1] === "" ? "active nav-item" : "nav-item"}>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className={splitLocation[1] === "about" ? "active nav-item" : "nav-item"}>
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className={splitLocation[1] === "products" ? "active nav-item" : "nav-item"}>
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Products
              </NavLink>
            </li>
            <li className={splitLocation[1] === "contact" ? "active nav-item" : "nav-item"}>
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="login-logout">
            { isAuthenticated ?  <button className="btn-login-logout" onClick={() => logout({ returnTo: window.location.origin})}>
            <i class="fa fa-user" aria-hidden="true"></i>  Log Out
    </button> : <button className="btn-login-logout" onClick={() => loginWithRedirect()}><i class="fa fa-user" aria-hidden="true"></i> Log In</button>}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <div className={splitLocation[1] === "cart" ? "active cart-head1" : "cart-head1"}>
            <NavLink exact to="/cart">
              <button
                type="button"
                disabled={false}
                class="btn btn-outline-light  position-relative head-cart-pad"
              >
                <i class="fa fa-light fa-cart-shopping"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {state.Carts.length}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>{" "}
            </NavLink>
          </div>
         

          <div className={splitLocation[1] === "wishlist" ? "active cart-head" : "cart-head"}>
            <NavLink exact to="/wishlist">
              <button
                type="button"
                disabled={false}
                class="btn btn-outline-light  position-relative head-cart-pad"
              >
                <i class="fa fa-light fa-heart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {state.Wishs.length}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>{" "}
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
