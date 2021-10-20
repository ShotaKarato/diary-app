import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
// redux - setup
import { useSelector, useDispatch } from "react-redux";
import { fetchDiaries } from "../../slices/userSlice";
import { toggleEdit } from "../../slices/diaryEditSlice";

// style
import styles from "./DiaryEdit.css";
// components
import TextField from "@mui/material/TextField";

const DiaryEdit = () => {
  // redux - setup
  const { user_id, user_diaries } = useSelector((state) => state.user);
  const diary_id = useSelector((state) => state.selectedDiary);
  const diary_edit = useSelector((state) => state.diaryEdit);
  const dispatch = useDispatch();

  // react hook form - setup
  const { register, handleSubmit } = useForm();
  const handleDiarySubmit = async (data) => {
    const { title, content } = data;
    try {
      const diaryRef = db.collection("diaries").doc(diary_id);
      await diaryRef.update({
        title,
        content,
      });
      dispatch(fetchDiaries(user_id));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={diary_edit ? "bl-diary-edit" : "bl-diary-edit hidden"}>
      <form
        className="bl-diary-edit__form"
        onSubmit={handleSubmit(handleDiarySubmit)}
      >
        <fieldset className="bl-diary-edit__wrapper">
          <TextField
            id="outlined-basic"
            label="Title"
            className="bl-diary-edit__title"
            autoFocus
            {...register("title", {
              required: "required",
            })}
          />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            className="bl-diary-edit__content"
            multiline
            rows={16}
            {...register("content", {
              required: "required",
            })}
          />
          <button
            type="submit"
            className="bl-diary-edit__btn"
            onClick={() => {
              dispatch(toggleEdit());
            }}
          >
            Submit!
          </button>
          <button
            className="bl-diary-edit__btn bl-diary-edit__btn--cancel"
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggleEdit());
            }}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default DiaryEdit;
