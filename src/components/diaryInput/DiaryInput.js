import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
// redux - setup
import { useDispatch } from "react-redux";
import { fetchDiaries } from "../../slices/userSlice";
import { toggleInput } from "../../slices/diaryInputSlice";
// style
import styles from "./DiaryInput.css";
// components
import TextField from "@mui/material/TextField";

const DiaryInput = () => {
  // redux - setup
  const { user_id } = useSelector((state) => state.user);
  const diary_input = useSelector((state) => state.diaryInput);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const handleDiarySubmit = async (data) => {
    const { title, content } = data;
    try {
      await db.collection("diaries").add({
        user_id,
        title,
        content,
      });
      dispatch(fetchDiaries(user_id));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={diary_input ? "bl-diary-input" : "bl-diary-input hidden"}>
      <form
        className="bl-diary-input__form"
        onSubmit={handleSubmit(handleDiarySubmit)}
      >
        <fieldset className="bl-diary-input__wrapper">
          <TextField
            id="outlined-basic"
            label="Title"
            className="bl-diary-input__title"
            {...register("title", {
              required: "required",
            })}
          />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            className="bl-diary-input__content"
            multiline
            rows={16}
            {...register("content", {
              required: "required",
            })}
          />
          <button
            type="submit"
            className="bl-diary-input__btn"
            onClick={() => {
              dispatch(toggleInput());
            }}
          >
            Submit!
          </button>
          <button
            className="bl-diary-input__btn bl-diary-input__btn--cancel"
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggleInput());
            }}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default DiaryInput;
