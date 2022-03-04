/* eslint-disable react/jsx-pascal-case */
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/authActions";
import SC from "../../themes/StyledComponents";
import "./Auth.scss";

export default function Signup() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const redirect = useNavigate();
  // user hooks
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // other hooks
  const [error, setError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(
        register({
          username: username,
          email: email,
          firstname: firstname,
          lastname: lastname,
          password: password,
        })
      );
      setUsername("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setError("Passwords do not match");
    }
    return redirect("/");
  };

  useEffect(() => {
    if (
      username.length > 5 &&
      email.length > 0 &&
      firstname.length > 0 &&
      lastname.length > 0 &&
      password.length > 6 &&
      password === confirmPassword
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [username, email, firstname, lastname, password, confirmPassword]);

  useEffect(() => {
    if (state._id) {
      return redirect("/");
    }
  }, [state]);

  return (
    <div className="auth-page">
      <SC.authScreenLogo>Applify</SC.authScreenLogo>
      <SC.authContainer className="auth-container">
        <form onSubmit={isValid ? handleSubmit : null}>
          {/* USERNAME */}
          <div>
            <SC.authInput
              className="auth-input"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            ></SC.authInput>
          </div>
          {/* EMAIL */}
          <div>
            <SC.authInput
              className="auth-input"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></SC.authInput>
          </div>
          {/* FIRSTNAME */}
          <div>
            <SC.authInput
              className="auth-input"
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            ></SC.authInput>
          </div>
          {/* LASTNAME */}
          <div>
            <SC.authInput
              className="auth-input"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            ></SC.authInput>
          </div>
          {/* PASSWORD */}
          <div>
            <SC.authInput
              className="auth-input"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></SC.authInput>
          </div>
          {/* CONFIRM PASSWORD */}
          <div>
            <SC.authInput
              className="auth-input"
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            ></SC.authInput>
          </div>

          <SC.primaryColorButtonInverse className={`auth-button ${isValid}`}>
            Register
          </SC.primaryColorButtonInverse>
        </form>
      </SC.authContainer>
      <div className="auth-sub-container">
        <SC.textOnBgColor className="dont-have-an-account">
          Already have an account?
          <Link to="/login">
            <SC.primaryColorText>Login</SC.primaryColorText>
          </Link>
        </SC.textOnBgColor>
        {error && <span className="error-span">{error}</span>}
      </div>
    </div>
  );
}
