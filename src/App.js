import React, { useEffect } from "react";
import { auth } from "./firebase";
import { RouteComponentProps } from "react-router-dom";
// redux - setup
import { useSelector, useDispatch } from "react-redux";
// redux - reducer
import {
  fetchDiaries,
  setCurrentUser,
  resetCurrentUser,
} from "./slices/userSlice";
// style
import styles from "./App.css";
// components
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import DiaryInput from "./components/diaryInput/DiaryInput";

function App(props) {
  // redux - setup
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    auth.onAuthStateChanged((user) => {
      if (!user) {
        user && props.history.push("user-auth");
      } else if (isMounted) {
        dispatch(setCurrentUser({ id: user.uid, name: user.displayName }));
        dispatch(fetchDiaries(user.uid));
      }
    });
    return () => {
      dispatch(resetCurrentUser());
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <Header history={props.history} />
      <Hero />
      <DiaryInput />
    </div>
  );
}

export default App;
