import React from "react";

export default function Survey({ survey, surveyCheck, handleCheck }) {
  const checkHandle = (e) => {
    handleCheck(e);
  };

  return (
    <>
      <div
        style={{
          height: "16px",
          marginTop: "15px",
          marginBottom: "25px",
          paddingBottom: "15px",
        }}
      >
        <label
          htmlFor={survey}
          style={{
            display: "flex",
            cursor: "pointer",
            height: "100%",
            border: "1px solid #333",
            padding: "15px",
          }}
        >
          <input
            type="radio"
            id={survey}
            value={survey}
            checked={survey === surveyCheck}
            onChange={checkHandle}
          />
          {survey}
        </label>
        <br />
      </div>
    </>
  );
}
