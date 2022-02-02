import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../asset/banner.0d50f4a6.png";
import Card from "./Card";

export default function MainContainer() {
  return (
    <>
      <div
        style={{
          background: `url(${bannerImg})`,
          height: "300px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            color: "#fff",
            textAlign: "center",
            paddingTop: "115px",
            fontWeight: "bold",
          }}
        >
          🌟 [SEB] Section 1: Single Page Application
        </div>
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gridAutoColumns: "minmax(316px, 316px)",
          gap: "80px 40px",
        }}
      >
        <Link to="/studyMatchingSection">
          <Card style={{ textAlign: "center" }} />
        </Link>
      </div>
    </>
  );
}
