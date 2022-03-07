/* eslint-disable react/jsx-pascal-case */
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";
import { CircularProgress } from "@material-ui/core";
import SC from "../../themes/StyledComponents";
import "./Auth.scss";

export default function Login() {
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [fetchingGuest, setFetchingGuest] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  let redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    if (usermail.length > 0 && password.length > 0) {
      dispatch(
        login(
          {
            usermail: usermail,
            password: password,
          },
          setErrorHandler
        )
      );
      setUsermail("");
      setPassword("");
    }
    setFetching(false);
  };

  const justVisiting = () => {
    setFetchingGuest(true);
    dispatch(
      login(
        {
          usermail: "GuestUser",
          password: process.env.REACT_APP_TEST_ACCOUNT_PASSWORD,
        },
        setErrorHandler
      )
    );
    setUsermail("");
    setPassword("");
    setFetchingGuest(false);
  };

  useEffect(() => {
    if (usermail.length > 0 && password.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [usermail, password]);

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
          <div>
            <SC.authInput
              className="auth-input"
              type="text"
              placeholder="Username or email"
              onChange={(e) => setUsermail(e.target.value)}
              required
            ></SC.authInput>
          </div>

          <div>
            <SC.authInput
              className="auth-input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            ></SC.authInput>
          </div>

          <SC.primaryColorButtonInverse className={`auth-button ${isValid}`}>
            <div className="login-button-wrapper">
              {fetching ? (
                <CircularProgress color="white" size="18px" />
              ) : (
                "Login"
              )}
            </div>
          </SC.primaryColorButtonInverse>
        </form>
      </SC.authContainer>
      <div className="auth-sub-container">
        <SC.textOnBgColor className="dont-have-an-account">
          Don't have an account?
          <Link to="/register">
            <SC.primaryColorText>Sign-up</SC.primaryColorText>
          </Link>
        </SC.textOnBgColor>
        <div className="just-visiting-container">
          <SC.textOnBgColor>Wanna look around? </SC.textOnBgColor>
          <SC.primaryColorButtonInverse
            className="just-visiting-button"
            onClick={() => justVisiting()}
          >
            <div className="guest-login-button-wrapper">
              {fetchingGuest ? (
                <CircularProgress color="white" size="18px" />
              ) : (
                "Just visiting"
              )}
            </div>
          </SC.primaryColorButtonInverse>
        </div>
        {errorHandler.error && (
          <span className="error-span">{errorHandler.message}</span>
        )}
      </div>
    </div>
  );
}
