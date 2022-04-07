import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/profile-modal.css";
import { useClickOutside } from "../utils/hooks";
import { MdOutlineContactless } from "react-icons/md";
import { FiSettings, FiHelpCircle, FiInfo } from "react-icons/fi";
import { useAuth } from "../contexts";

export const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const modalRef = useRef(null);

  useClickOutside(modalRef, onClose);

  const handleLogout = () => {
    setAuth({
      isLoggedIn: false,
      encodedToken: "",
    });
    onClose();
    navigate("/");
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
