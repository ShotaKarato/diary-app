import React from "react";

const diary = (props) => {
  return (
    <>
      <div className="bl-diaries__diary-box">
        <h3>{props.diary.title}</h3>
        <p>{props.diary.content}</p>
      </div>
    </>
  );
};

export default diary;
