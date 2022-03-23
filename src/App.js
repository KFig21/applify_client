/* eslint-disable react/jsx-pascal-case */
// imports
import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { loadUser } from "./store/actions/authActions";
import "./App.scss";
// pages
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
// themes
import { ThemeProvider } from "styled-components";
import SC from "./themes/StyledComponents";
import darkThemeYellow from "./themes/DarkTheme_Yellow";
import Signup from "./pages/Auth/Signup";
import Boards from "./pages/Boards/Boards";
import Settings from "./pages/Settings/Settings";
import Board from "./components/Board/Board";
import { getBoards } from "./store/actions/boardActions";
import { changeTheme } from "./themes/ThemeChange";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState(darkThemeYellow);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });

  const fetchBoards = async () => {
    let user_id = await user._id;
    if (user_id !== undefined) {
      dispatch(
        getBoards(
          {
            user: user_id,
          },
          setErrorHandler
        )
      );
    }
  };

  // when dispatch is ready, load user
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const handleTheme = async () => {
    const _theme = await user.theme;
    if (_theme !== null) {
      changeTheme(setTheme, _theme);
    }
  };

  // when user is set, load boards
  useEffect(() => {
    fetchBoards();
    handleTheme();
  }, [user, user.theme]);

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <div className="App">
          {user._id && <Nav currentPage={currentPage} />}
          <Footer />
          <SC.mainContent className="main">
            <Routes>
              {user._id ? (
                <>
                  <Route
                    exact
                    path="/"
                    element={
                      user ? (
                        <Home setCurrentPage={setCurrentPage} />
                      ) : (
                        <Login />
                      )
                    }
                  ></Route>
                  <Route
                    exact
                    path="/boards"
                    element={
                      user ? (
                        <Boards setCurrentPage={setCurrentPage} />
                      ) : (
                        <Login />
                      )
                    }
                  ></Route>
                  <Route
                    exact
                    path="/board/:id"
                    element={
                      user ? (
                        <Board setCurrentPage={setCurrentPage} />
                      ) : (
                        <Login />
                      )
                    }
                  ></Route>
                  <Route
                    exact
                    path="/settings"
                    element={
                      user ? (
                        <Settings
                          setCurrentPage={setCurrentPage}
                          setTheme={setTheme}
                        />
                      ) : (
                        <Login />
                      )
                    }
                  ></Route>
                  <Route
                    exact
                    path="/login"
                    element={user._id ? <Navigate to="/" /> : <Login />}
                  ></Route>
                </>
              ) : (
                <>
                  <Route exact path="/" element={<Login />}></Route>
                  <Route exact path="/login" element={<Login />}></Route>
                  <Route exact path="/register" element={<Signup />}></Route>
                </>
              )}
            </Routes>
          </SC.mainContent>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
