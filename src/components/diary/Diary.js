import React from "react";
import { db } from "../../firebase";
// redux - setup
import { useSelector, useDispatch } from "react-redux";
import { fetchDiaries } from "../../slices/userSlice";
import { deleteDiary } from "../../slices/diariesSlice";
import { toggleEdit } from "../../slices/diaryEditSlice";
import { diarySelected } from "../../slices/selectedDiarySlice";

const Diary = ({ diary: { id, title, content } }) => {
  // redux - setup
  const { user_id } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bl-diaries__diary-box" data-id={id}>
        <div className="bl-diaries__diary-details">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <div className="bl-diaries__diary-btns">
          <button
            className="bl-diaries__diary-btn"
            onClick={(e) => {
              dispatch(toggleEdit());
              dispatch(diarySelected(id));
            }}
          >
            Edit
          </button>
          <button
            className="bl-diaries__diary-btn bl-diaries__diary-btn--delete"
            onClick={async (e) => {
              e.preventDefault();
              dispatch(deleteDiary(id));
              dispatch(fetchDiaries(user_id));
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Diary;
