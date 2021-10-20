import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// react router
import { Switch, Route, BrowserRouter } from "react-router-dom";
// redux - setup
import { Provider } from "react-redux";
import store from "./store/store";
// Components
import App from "./App";
import UserAuth from "./components/userAuth/UserAuth";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/user-auth" component={UserAuth} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
