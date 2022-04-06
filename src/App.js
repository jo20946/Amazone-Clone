// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { auth } from "./firebase";
import React, { useEffect } from "react";
import { useStateValue } from "./Components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

import { debuglog } from "util";

const stripePromise = loadStripe(
  "pk_test_51KdN6OCtu7GQuADA7a2ck3K6xO49DzNGQvE74nOxDf3uqWN6pm5Apaqx6tqPO4rYNPtxGG6qFqbXtfNXQC5T9KYJ00JWpzEzfF"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          ></Route>

          {/* <Route path="/payment">
            <Elements stripe={stripePromise}>element = {<Payment />}</Elements>
          </Route> */}

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
