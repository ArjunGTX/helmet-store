import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import "../styles/components/header.css";
import { useAuth, useSidebar } from "../contexts";

export const Header = () => {
  const { pathname } = useLocation();
  const { toggleSidebar } = useSidebar();
  const { auth } = useAuth();
  const showLoginButton = () => {
    if (auth.isLoggedIn) return false;
    if (pathname === "/" || pathname === "/products") return true;
    return false;
  };
  return (
    <header>
      <div className="flex-row flex-center">
        {/* only show hamburger menu on products page */}
        {pathname === "/products" && (
          <button onClick={() => toggleSidebar(true)} className="btn btn-icon">
            <FiMenu className="nav-icon" />
          </button>
        )}
        <Link to="/" className="logo">
          Helmet Store
        </Link>
      </div>
      <div className="header-middle">
        <input type="text" className="search-input" />
        <AiOutlineSearch className="search-icon" />
      </div>
      <div className="header-right">
        {showLoginButton() && (
          <Link to={"/login"}>
            <button className="btn btn-secondary">Log In</button>
          </Link>
        )}
        <Link to="/cart">
          <button className="btn btn-icon">
            <BsCart3 />
          </button>
        </Link>
        <Link to="/wishlist">
          <button className="btn btn-icon">
            <AiOutlineHeart />
          </button>
        </Link>
        <Link to="/profile">
          <button className="btn btn-icon">
            <CgProfile />
          </button>
        </Link>
      </div>
    </header>
  );
};
