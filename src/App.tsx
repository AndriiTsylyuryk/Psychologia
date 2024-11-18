import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Calendar from "./pages/Calendar/Calendar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeThunk, refreshThunk } from "./redux/auth/operations";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { PublicRoute } from "./Routes/PublicRoute";
import { selectIsRefreshing, selectToken } from "./redux/auth/selector";
import Loader from "./components/Loader/Loader";
import "./index.css";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import AppBar from "./components/AppBar/AppBar";
import { AppDispatch } from "./redux/store";
import { selectIsLight } from "./redux/burger/selectors";
import { Toaster } from "react-hot-toast";
import GoogleCallback from "./pages/GoogleCallback/GoogleCallback";
import Prices from "./pages/Prices/Prices";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

import NewPassword from "./pages/NewPasswordForm/NewPasswordForm";
import introJs from "intro.js";
import "intro.js/introjs.css";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const newToken = useSelector(selectToken);

  useEffect(() => {
    let intervalId;
    const startTokenRefreshInterval = () => {
      intervalId = setInterval(async () => {
        try {
          dispatch(refreshThunk());
        } catch (error) {
          console.error("Failed to refresh token", error);
        }
      }, 14 * 60 * 1000);
      return intervalId;
    };

    if (newToken) {
      startTokenRefreshInterval();
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [newToken, dispatch]);

  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);
  const isDark = useSelector(selectIsLight);

  // useEffect(() => {
  //   introJs()
  //     .setOptions({
  //       steps: [
  //         {
  //           element: ".bm-burger-button",
  //           intro: "Тут знаходиться меню",
  //           offset: {
  //             top: 20,   // Відступ знизу підказки
  //             left: 30,  // Відступ зліва від елемента
  //           }
  //         },
  //       ],
  //       showProgress: true,
  //       disableInteraction: true,
  //     })
  //     .start();
  // }, []);

  return (
    <div className="appContainer" data-theme={isDark ? "dark" : "light"}>
      <div className="container">
        {isRefreshing ? (
          <Loader />
        ) : (
          <div>
            <Toaster containerStyle={{ top: 60 }} />
            <div id="burger">
              <BurgerMenu />
            </div>

            <AppBar />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="about"
                  element={
                    <PrivateRoute>
                      <About />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="calendar"
                  element={
                    <PrivateRoute>
                      <Calendar />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="refresh"
                  element={
                    <PrivateRoute>
                      <Calendar />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="prices"
                  element={
                    <PrivateRoute>
                      <Prices />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/reset-password-request"
                element={
                  <PublicRoute>
                    <ResetPassword />
                  </PublicRoute>
                }
              />
              <Route
                path="/reset-password"
                element={
                  <PublicRoute>
                    <NewPassword />
                  </PublicRoute>
                }
              />
              <Route
                path="/google/callback"
                element={
                  <PublicRoute>
                    <GoogleCallback />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
