import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import "../styles/components/header.css";
import { useAuth, useCart, useSidebar, useWishlist } from "../contexts";
import { ProfileModal } from "./ProfileModal";

export const Header = () => {
  const { pathname } = useLocation();
  const { toggleSidebar } = useSidebar();
  const { auth } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [showProfileModal, setShowProfileModal] = useState(false);

  const closeProfileModal = () => setShowProfileModal(false);

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
        <Link to="/" className="flex-row flex-center logo">
          <img src="assets/images/logo.png" alt="logo" />
          HELMET STORE
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
        <Link to={auth.isLoggedIn ? "/cart" : "/login"}>
          <button className="btn btn-icon">
            {cart.length !== 0 && auth.isLoggedIn && (
              <div className="badge">{cart.length}</div>
            )}
            <BsCart3 />
          </button>
        </Link>
        <Link to={auth.isLoggedIn ? "/wishlist" : "/login"}>
          <button className="btn btn-icon">
            {wishlist.length !== 0 && auth.isLoggedIn && (
              <div className="badge">{wishlist.length}</div>
            )}
            <AiOutlineHeart />
          </button>
        </Link>
        <button
          onClick={() => setShowProfileModal(!showProfileModal)}
          className="btn btn-icon"
        >
          <CgProfile />
        </button>
      </div>
      {showProfileModal && <ProfileModal onClose={closeProfileModal} />}
    </header>
  );
};
