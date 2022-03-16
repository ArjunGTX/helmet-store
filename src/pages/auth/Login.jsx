import { Link } from "react-router-dom";
import "../../styles/pages/auth.css";

export const Login = () => {
  return (
    <div className="auth-container flex-row flex-center">
      <div className="auth-form flex-col flex-center">
        <h3>Log In</h3>
        <input type="text" className="input" placeholder="Enter your Email" />
        <input
          type="password"
          autoComplete="new-password"
          className="input"
          placeholder="Enter Password"
        />
        <div className="flex-row flex-center">
          <label htmlFor="terms" className="flex-row flex-center">
            <input type="checkbox" id="terms" />
            Remember Me
          </label>
          <button className="btn btn-link">
              <Link to="/forgot-password">Forgot Password</Link>
          </button>
        </div>
        <button className="btn btn-info btn-block">Log In</button>
        <button className="btn btn-link btn-block">
          <Link to="/sign-up">Create New Account</Link>
        </button>
      </div>
    </div>
  );
};
