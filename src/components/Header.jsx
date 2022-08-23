import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import "../styles/components/header.css";
import { useCart, useSidebar, useWishlist } from "../contexts";
import { ProfileModal } from "./ProfileModal";
import { useDebounce } from "../utils/hooks";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../redux/slices/auth";
import { search } from "../redux/slices/filter";
import { selectCart } from "../redux/slices/cart";

export const Header = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(selectAuth);
  const cart = useSelector(selectCart);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { toggleSidebar } = useSidebar();

  const { wishlist } = useWishlist();

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filterBySearch = (query) => {
    dispatch(search(query));
  };

  const debouncedFilterBySearch = useDebounce(filterBySearch, 500);

  useEffect(() => {
    debouncedFilterBySearch(searchQuery);
  }, [searchQuery]);

  const closeProfileModal = () => setShowProfileModal(false);

  const showLoginButton = () => {
    if (isLoggedIn) return false;
    if (pathname === "/" || pathname === "/products") return true;
    return false;
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    filterBySearch(searchQuery);
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
      <form className="header-middle" onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search Products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <AiOutlineSearch
          className="search-icon"
          onClick={() => filterBySearch(searchQuery)}
        />
      </form>
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
