import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import "../styles/components/header.css";
import {
  useAuth,
  useCart,
  useFilters,
  useSidebar,
  useWishlist,
} from "../contexts";
import { ProfileModal } from "./ProfileModal";
import { useDebounce } from "../utils/hooks";
import { searchProduct } from "../actions/filter-action";

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { toggleSidebar } = useSidebar();
  const {
    auth: { isLoggedIn },
  } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { filterDispatch } = useFilters();

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filterBySearch = () => {
    filterDispatch(searchProduct(searchQuery));
    console.log("called");
  };

  const debouncedFilterBySearch = useDebounce(filterBySearch, 400);

  useEffect(() => {
    debouncedFilterBySearch();
  }, [searchQuery]);

  const closeProfileModal = () => setShowProfileModal(false);

  const showLoginButton = () => {
    if (isLoggedIn) return false;
    if (pathname === "/" || pathname === "/products") return true;
    return false;
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

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
        <input
          type="text"
          className="search-input"
          placeholder="Search Products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
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
            {cart.length !== 0 && isLoggedIn && (
              <div className="badge">{cart.length}</div>
            )}
            <BsCart3 />
          </button>
        </Link>
        <Link to="/wishlist">
          <button className="btn btn-icon">
            {wishlist.length !== 0 && isLoggedIn && (
              <div className="badge">{wishlist.length}</div>
            )}
            <AiOutlineHeart />
          </button>
        </Link>
        <button
          onClick={() =>
            isLoggedIn
              ? setShowProfileModal(!showProfileModal)
              : navigate("/login")
          }
          className="btn btn-icon"
        >
          <CgProfile />
        </button>
      </div>
      {showProfileModal && <ProfileModal onClose={closeProfileModal} />}
    </header>
  );
};
