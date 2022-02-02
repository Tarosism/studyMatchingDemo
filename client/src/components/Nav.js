import React from "react";
import { Navbar } from "../styles/Nav.styled";

export default function Nav() {
  return (
    <>
      <Navbar>
        <div>로고</div>
        <div style={{ margin: "0px 24px", display: "flex" }}>
          <span>수강중인 코스</span>
          <span>코플릿</span>
          <span>Jobs</span>
          <span>사람대가리</span>
        </div>
      </Navbar>
    </>
  );
}
