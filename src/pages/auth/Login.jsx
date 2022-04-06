import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/pages/auth.css";
import { login, validateLoginData } from "../../utils/api";
import { InputAlert } from "../../components";
import { useAuth } from "../../contexts";

export const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

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

  const loginRequest = async (email, password) => {
    try {
      setLoading(true);
      const {status, data} = await login(email, password);
      setLoading(false);
      if (!status === 200) return;
      setAuth({
        isLoggedIn: true,
        encodedToken: data.encodedToken,
      });
      navigate(-1);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validateLoginData(loginData, loginErrors);
    if (!isValid) {
      setLoginErrors(errors);
      return;
    }
    loginRequest(loginData.email, loginData.password);
  };

  const handleGuestLogin = () => {
    loginRequest("guestuser@email.com", "GuestUser@123");
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
        {loginErrors.email && <InputAlert message={loginErrors.email} className="mr-auto"/>}
        <input
          type="text"
          autoComplete="new-password"
          className="input"
          id="password"
          value={loginData.password}
          onChange={handleInputChange}
          placeholder="Enter Password"
        />
        {loginErrors.password && <InputAlert message={loginErrors.password} className="mr-auto" />}
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
