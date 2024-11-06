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
import { getMeThunk } from "./redux/auth/operations";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { PublicRoute } from "./Routes/PublicRoute";
import { selectIsRefreshing } from "./redux/auth/selector";
import Loader from "./components/Loader/Loader";
import "./index.css";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import AppBar from "./components/AppBar/AppBar";
import { AppDispatch } from "./redux/store";
import { selectIsLight } from "./redux/burger/selectors";
import { Toaster } from "react-hot-toast";
import GoogleCallback from "./pages/GoogleCallback/GoogleCallback";
import Prices from "./pages/Prices/Prices";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  const isDark = useSelector(selectIsLight);

  return (<div className='appContainer' data-theme={isDark ? "dark" : "light"}>
    <div className="container" >
      {isRefreshing ? (
        <Loader />
      ) : (
        <div>
          <Toaster containerStyle={{ top: 60 }} />
          <BurgerMenu />
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
