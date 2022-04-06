import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/pages/auth.css";
import { signUp, validateSignUpData } from "../../utils/api";
import { InputAlert } from "../../components";
import { useAuth } from "../../contexts";

export const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [signUpErrors, setSignUpErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  const handleInputChange = (e) => {
    setSignUpErrors((signUpErrors) => ({
      ...signUpErrors,
      [e.target.id]: "",
    }));
    e.target.type === "checkbox"
      ? setSignUpData((signUpData) => ({
          ...signUpData,
          [e.target.id]: e.target.checked,
        }))
      : setSignUpData((signUpData) => ({
          ...signUpData,
          [e.target.id]: e.target.value,
        }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { isValid, errors } = validateSignUpData(signUpData, signUpErrors);
      if (!isValid) {
        setSignUpErrors(errors);
        return;
      }
      setLoading(true);
      const { status, data } = await signUp(
        signUpData.firstName,
        signUpData.lastName,
        signUpData.email,
        signUpData.password
      );
      setLoading(false);
      if (status !== 201) return;
      setAuth({
        isLoggedIn: true,
        encodedToken: data.encodedToken,
      });
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="auth-container flex-row flex-center">
      <form className="auth-form flex-col flex-center" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <input
          type="text"
          className="input"
          placeholder="Enter First Name"
          id="firstName"
          value={signUpData.firstName}
          onChange={handleInputChange}
        />
        {signUpErrors.firstName && (
          <InputAlert message={signUpErrors.firstName} className="mr-auto" />
        )}
        <input
          type="text"
          className="input"
          placeholder="Enter Last Name"
          id="lastName"
          value={signUpData.lastName}
          onChange={handleInputChange}
        />
        {signUpErrors.lastName && (
          <InputAlert message={signUpErrors.lastName} className="mr-auto" />
        )}
        <input
          type="text"
          className="input"
          placeholder="Enter Email Address"
          id="email"
          value={signUpData.email}
          onChange={handleInputChange}
        />
        {signUpErrors.email && (
          <InputAlert message={signUpErrors.email} className="mr-auto" />
        )}
        <input
          type="password"
          className="input"
          placeholder="Enter Password"
          autoComplete="new-password"
          id="password"
          value={signUpData.password}
          onChange={handleInputChange}
        />
        {signUpErrors.password && (
          <InputAlert message={signUpErrors.password} className="mr-auto" />
        )}
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
          autoComplete="new-password"
          id="confirmPassword"
          value={signUpData.confirmPassword}
          onChange={handleInputChange}
        />
        {signUpErrors.confirmPassword && (
          <InputAlert
            message={signUpErrors.confirmPassword}
            className="mr-auto"
          />
        )}

        <label htmlFor="terms" className="flex-row flex-center">
          <input
            type="checkbox"
            id="terms"
            value={signUpData.terms}
            onChange={handleInputChange}
          />
          I accept Terms & Conditions
        </label>
        {signUpErrors.terms && <InputAlert message={signUpErrors.terms} />}
        <button className="btn btn-info btn-block">Create New Account</button>
        <button type="button" className="btn btn-link btn-block">
          <Link
            to="/login"
            state={{
              from: location,
            }}
          >
            Already have an account
          </Link>
        </button>
      </form>
    </div>
  );
};
