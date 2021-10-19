import React, { useEffect } from "react";
import { auth } from "./firebase";
import { RouteComponentProps } from "react-router-dom";
// Style
import styles from "./App.css";
// Components
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App(props) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      !user && props.history.push("user-auth");
    });
  }, []);
  return (
    <div className="App">
      <Header history={props.history} />
      <Hero />
    </div>
  );
}

export default App;
