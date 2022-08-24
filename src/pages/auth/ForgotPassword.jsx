import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/pages/auth.css";

export const ForgotPassword = () => {
  //hard coding for now
  const [isOtpSent, setIsOtpSent] = useState(false);

  return (
    <div className="auth-container flex-row flex-center">
      <div className="auth-form flex-col flex-center">
        <h3>Forgot Password</h3>
        {isOtpSent ? (
          <>
            <input type="text" className="input" placeholder="Enter OTP" />
            <button className="btn btn-info btn-block">Confirm OTP</button>
          </>
        ) : (
          <>
            <input
              type="text"
              className="input"
              placeholder="Enter your Email"
            />
            <button className="btn btn-info btn-block">Send OTP</button>
          </>
        )}

        <button className="btn btn-link btn-block">
          <Link to="/login">Back to Login</Link>
        </button>
      </div>
    </div>
  );
};
