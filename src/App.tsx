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
import './index.css' 
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import AppBar from "./components/AppBar/AppBar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div className="container">
      <BurgerMenu/>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="calendar"
            element={
              <PrivateRoute>
                <Calendar />
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
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
