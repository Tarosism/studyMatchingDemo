import React from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div
      style={{
        position: "fixed",
        top: "60px",
        left: "0px",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "320px",
          height: "100%",
          backgroundColor: "rgb(250,250,250)",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "1.5",
            padding: "17px",
          }}
        >
          <Link to="/" style={{ color: "#1890ff" }}>
            🌟 [SEB] Section 1: Single Page Application
          </Link>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "rgb(240,240,240)",
              fontSize: "12px",
              padding: "5px 15px",
              color: "rgb(120, 120, 120)",
              fontWeight: "bold",
            }}
          >
            Study Matching
          </div>
          <Link to="/studyMatchingSection">
            <div
              style={{
                fontSize: "14px",
                padding: "15px 15px",
                color: "rgb(55, 55, 55)",
              }}
            >
              <span>○</span>
              {"    "}
              스터디 매칭 도우미
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
