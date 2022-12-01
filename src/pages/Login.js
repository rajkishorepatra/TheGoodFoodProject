import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignInForm from "../components/login/SignInForm";
import SignUpForm from "../components/login/SignUpForm";
import '../css/login.css'


function Login() {
  return (
    <>
      <Router basename="/react-auth-ui/">
        <div className="App1">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/sign-up"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-up"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/sign-up" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    </>
  )
}

export default Login