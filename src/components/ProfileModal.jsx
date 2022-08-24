import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/profile-modal.css";
import { useClickOutside } from "../utils/hooks";
import { MdOutlineContactless } from "react-icons/md";
import { FiSettings, FiHelpCircle, FiInfo } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/auth";

export const ProfileModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const modalRef = useRef(null);

  useClickOutside(modalRef, onClose);

  const handleLogout = () => {
    dispatch(logout());
    onClose();
    navigate("/login");
  };

  return (
    <div ref={modalRef} className="profile-modal flex-col flex-center">
      <Link to="" className="flex-row flex-center mr-auto item">
        <MdOutlineContactless className="icon" />
        Address
      </Link>
      <Link to="" className="flex-row flex-center mr-auto item">
        <FiInfo className="icon" />
        About
      </Link>
      <Link to="" className="flex-row flex-center mr-auto item">
        <FiHelpCircle className="icon" />
        Help
      </Link>
      <Link to="" className="flex-row flex-center mr-auto item">
        <FiSettings className="icon" />
        Settings
      </Link>
      <hr />
      <button onClick={handleLogout} className="btn btn-primary btn-block">
        Logout
      </button>
    </div>
  );
};
