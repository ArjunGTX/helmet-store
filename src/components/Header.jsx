import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import "../styles/components/header.css";

export const Header = () => {
  return (
    <header>
      <div className="flex-row flex-center">
        <button className="btn btn-icon">
          <FiMenu className="nav-icon" />
        </button>
        <Link to="/" className="logo">
          Helmet Store
        </Link>
      </div>
      <div class="header-middle">
        <input type="text" className="search-input" />
        <AiOutlineSearch className="search-icon" />
      </div>
      <div className="header-right">
        <Link to={"/login"}>
          <button className="btn btn-secondary">Log In</button>
        </Link>
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
