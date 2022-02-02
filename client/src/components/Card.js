import React from "react";
import matchingImg from "../asset/data-matching.jpg";

export default function Card() {
  return (
    <>
      <div style={{ margin: "35px 0" }}>
        <div
          style={{
            background: `url(${matchingImg})`,
            height: "209px",
            backgroundSize: "cover",
            borderRadius: "10px",
            border: "1px solid rgb(238, 238, 238)",
          }}
        />
        <div
          style={{
            margin: "15px 0px 10px",
            fontSize: "25px",
            fontWeight: "bold",
            color: "rgb(34, 34, 34)",
            textOverflow: "ellipsis",
            textAlign: "center",
          }}
        >
          Study Matching
        </div>
      </div>
    </>
  );
}
