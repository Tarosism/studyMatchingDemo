import React from "react";
import SideNav from "../components/SideNav";
import MatchingSystem from "../components/MatchingSystem";

export default function studyMatchingSection() {
  return (
    <>
      <SideNav />
      <div style={{ marginLeft: "320px" }}>
        <div style={{ padding: "25px 25px" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            스터디 매칭 도우미
          </h1>
          <br />
          <MatchingSystem />
        </div>
      </div>
    </>
  );
}
