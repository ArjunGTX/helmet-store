import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/pages/auth.css";
import { validateLoginData } from "../../utils/api";
import { InputAlert } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/services/auth";
import { selectAuth } from "../../redux/slices/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from
    ? location.state.from.pathname === "/sign-up"
      ? "/"
      : location.state.from.pathname
    : -1;

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, []);

  const handleInputChange = (e) => {
    if (e.target.type === "checkbox") {
      setLoginData((loginData) => ({
        ...loginData,
        [e.target.id]: e.target.checked,
      }));
    } else {
      setLoginData((loginData) => ({
        ...loginData,
        [e.target.id]: e.target.value,
      }));
      setLoginErrors((loginErrors) => ({ ...loginErrors, [e.target.id]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = validateLoginData(loginData, loginErrors);
    if (!isValid) {
      setLoginErrors(errors);
      return;
    }
    const {
      meta: { requestStatus },
    } = await dispatch(
      login({
        email: loginData.email,
        password: loginData.password,
      })
    );
    if (requestStatus === "fulfilled") {
      navigate(from);
    }
  };

  const handleGuestLogin = async () => {
    const {
      meta: { requestStatus },
    } = await dispatch(
      login({
        email: "guestuser@email.com",
        password: "GuestUser@123",
      })
    );
    if (requestStatus === "fulfilled") {
      navigate(from);
    }
  };

  return (
    <div className="auth-container flex-row flex-center">
      <form className="auth-form flex-col flex-center" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <input
          type="text"
          className="input"
          id="email"
          placeholder="Enter your Email"
          value={loginData.email}
          onChange={handleInputChange}
        />
        {loginErrors.email && (
          <InputAlert message={loginErrors.email} className="mr-auto" />
        )}
        <input
          type="text"
          autoComplete="new-password"
          className="input"
          id="password"
          value={loginData.password}
          onChange={handleInputChange}
          placeholder="Enter Password"
        />
        {loginErrors.password && (
          <InputAlert message={loginErrors.password} className="mr-auto" />
        )}
        <div className="flex-row flex-center">
          <label htmlFor="terms" className="flex-row flex-center">
            <input
              type="checkbox"
              id="remember"
              checked={loginData.remember}
              onChange={handleInputChange}
            />
            Remember Me
          </label>
          <button className="btn btn-link">
            <Link to="/forgot-password">Forgot Password</Link>
          </button>
        </div>
        <button className="btn btn-info btn-block">Login</button>
        <div className="flex-row flex-center">
          <button className="btn btn-link">
            <Link to="/sign-up">Create New Account</Link>
          </button>
          <button
            onClick={handleGuestLogin}
            type="button"
            className="btn btn-link"
          >
            Login as Guest
          </button>
        </div>
      </form>
    </div>
  );
};
