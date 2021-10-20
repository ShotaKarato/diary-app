import React from "react";
// redux - setup
import { useSelector, useDispatch } from "react-redux";
import { toggleInput } from "../../slices/diaryInputSlice";
// style
import styles from "./Hero.css";
// components
import Diary from "../diary/Diary";

const Hero = () => {
  // redux - setup
  const dispatch = useDispatch();
  const { user_id, user_name, user_diaries } = useSelector(
    (state) => state.user
  );
  return (
    <>
      <section className="bl-hero">
        <h2 className="bl-hero__greeting-text">
          G'day {user_name}!<br />
          <span className="bl-hero__text--large">What's on your mind?</span>
        </h2>
        <button
          className="bl-hero__post-btn"
          onClick={() => {
            dispatch(toggleInput());
          }}
        >
          New Post
        </button>
      </section>
      <section className="bl-diaries">
        <h2 className="bl-diaries__title-text">Your diaries</h2>
        {user_diaries.map((diary, index) => (
          <Diary diary={diary} key={index} />
        ))}
      </section>
    </>
  );
};

export default Hero;
