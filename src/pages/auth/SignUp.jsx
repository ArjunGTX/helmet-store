import { Link } from "react-router-dom";
import "../../styles/pages/auth.css";

export const SignUp = () => {
  return (
    <div className="auth-container flex-row flex-center">
      <div className="auth-form flex-col flex-center">
        <h3>Sign Up</h3>
        <input type="text" className="input" placeholder="Enter your Name" />
        <input type="text" className="input" placeholder="Enter your Email" />
        <input
          type="password"
          className="input"
          placeholder="Enter Password"
          autoComplete="new-password"
        />
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
          autoComplete="new-password"
        />

        <label htmlFor="terms" className="flex-row flex-center">
          <input type="checkbox" id="terms" />I accept Terms & Conditions
        </label>
        <button className="btn btn-info btn-block">Create New Account</button>
        <button className="btn btn-link btn-block">
          <Link to="/login">Already have an account</Link>
        </button>
      </div>
    </div>
  );
};
